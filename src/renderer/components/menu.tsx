import { MenuItemConstructorOptions } from 'electron'
import { popMenu } from '../utils/remote'

export default function MenuBar({
  template,
  onSelectMenu
}: {
  template: Array<MenuItemConstructorOptions>
  onSelectMenu: (id: string) => void
}) {
  popMenu(template)
    .then(function (id: string) {
      onSelectMenu(id)
    })
    .catch(console.log)
  return <></>
}
