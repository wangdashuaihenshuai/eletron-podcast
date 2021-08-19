import path from 'path'
import {
  app,
  Menu,
  ipcMain,
  MenuItemConstructorOptions,
  session,
  BrowserWindow
} from 'electron'

import type { BrowserWindowConstructorOptions } from 'electron'
import contextMenu from 'electron-context-menu'
import windowStateKeeper from 'electron-window-state'
import { getTwConfig, getTwConfigPath } from '@twstyled/util'

const resolvedTailwindConfig = getTwConfig(getTwConfigPath())

const isDevelopment = !app.isPackaged

const isLocalRequest = function (url: string): boolean {
  const urlInfo = new URL(url)
  return urlInfo.hostname === 'localhost'
}
// render request

function initRequest() {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    const { url } = details
    if (isLocalRequest(url)) {
      callback({ requestHeaders: details.requestHeaders })
      return
    }

    details.requestHeaders.Origin = url
    details.requestHeaders.Referer = url
    details.referrer = url
    callback({ requestHeaders: details.requestHeaders })
  })

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const { url } = details
    if (isLocalRequest(url) || !details.responseHeaders) {
      callback({ responseHeaders: details.responseHeaders })
      return
    }
    details.responseHeaders['Access-Control-Allow-Origin'] = [
      'http://localhost:3000'
    ]
    details.responseHeaders['Access-Control-Allow-Credentials'] = ['true']
    details.responseHeaders['Access-Control-Allow-Headers'] = [
      'x-requested-with',
      '*'
    ]

    details.responseHeaders['Access-Control-Expose-Headers'] = ['*']
    details.responseHeaders['Access-Control-Request-Headers'] = ['*']
    details.responseHeaders['Access-Control-Request-Method'] = ['*']
    callback({ responseHeaders: details.responseHeaders })
  })
}

function createWindow() {
  const windowOptions: BrowserWindowConstructorOptions = {
    minWidth: 800,
    minHeight: 600,
    width: 1960,
    height: 1080,
    // backgroundColor: resolvedTailwindConfig.theme.colors.primary[800],
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    trafficLightPosition: {
      x: 20,
      y: 32
    },
    visualEffectState: 'active',
    vibrancy: 'menu',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      devTools: true,
      spellcheck: false,
      preload: path.join(app.getAppPath(), 'preload.js')
    },
    show: false
  }

  contextMenu({
    showSearchWithGoogle: false,
    showCopyImage: false,
    prepend: (defaultActions, params, browserWindow) => [
      {
        label: 'its like magic 💥'
      }
    ]
  })

  const windowState = windowStateKeeper({
    defaultWidth: windowOptions.minWidth,
    defaultHeight: windowOptions.minHeight
  })

  const browserWindow = new BrowserWindow({
    ...windowOptions,
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height
  })

  windowState.manage(browserWindow)

  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
    browserWindow.focus()
  })

  const port = process.env.PORT || 3000

  if (isDevelopment) {
    void browserWindow.loadURL(`http://localhost:${port}`)
  } else {
    void browserWindow.loadFile('./index.html')
  }
}

void app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// render event
function listenPopMenu() {
  ipcMain.handle(
    'show-context-menu',
    (event, template: Array<MenuItemConstructorOptions>) => {
      return new Promise((resolve, reject) => {
        for (const t of template) {
          t.click = () => {
            resolve(t.id)
          }
        }

        const menu = Menu.buildFromTemplate(template)
        menu.popup({
          window: BrowserWindow.fromWebContents(event.sender) || undefined
        })
      })
    }
  )
}

function initEvent() {
  listenPopMenu()
}

app.on('ready', () => {
  initRequest()
  initEvent()
})
