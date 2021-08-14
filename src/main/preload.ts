import {
  ipcRenderer,
  contextBridge,
  MenuItemConstructorOptions
} from 'electron'

contextBridge.exposeInMainWorld('api', {
  popMenu: async function (template: Array<MenuItemConstructorOptions>) {
    return ipcRenderer.invoke('show-context-menu', template)
  }
})
