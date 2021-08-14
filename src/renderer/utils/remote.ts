import { MenuItemConstructorOptions } from 'electron'

export const popMenu = async function (
  template: Array<MenuItemConstructorOptions>
): Promise<string> {
  /*eslint-disable */
  return window.api.popMenu(template)
}

export default function () {}
