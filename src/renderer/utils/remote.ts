import { MenuItemConstructorOptions } from 'electron'

const cardMoreMenuTemplate: Array<MenuItemConstructorOptions> = [
  {
    id: 'create-music',
    label: '移除下载项'
  },
  {
    id: 'create-music',
    label: '标记为已播放'
  },
  {
    id: 'create-music',
    label: '报告问题'
  },
  {
    id: 'create-music',
    label: '存储单集'
  },
  { type: 'separator' },
  {
    id: 'create-music',
    label: '插播'
  },
  {
    id: 'create-music',
    label: '最后播放'
  },
  { type: 'separator' },
  {
    id: 'create-music',
    label: '拷贝链接'
  },
  { type: 'separator' },
  {
    id: 'create-music',
    label: '分享单集',
    submenu: [{ label: '邮件' }, { label: '信息' }]
  },
  { type: 'separator' },
  {
    id: 'create-music',
    label: '前往节目'
  }
]

export const popCardMoreMenu = async function () {
  return popMenu(cardMoreMenuTemplate)
}

export const popMenu = async function (
  template: Array<MenuItemConstructorOptions>
): Promise<string> {
  /*eslint-disable */
  return window.api.popMenu(template)
}

export default function () { }