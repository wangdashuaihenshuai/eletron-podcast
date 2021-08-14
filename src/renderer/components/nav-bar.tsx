import { MenuItemConstructorOptions } from 'electron'
import { popMenu } from '../utils/remote'
import GroupMenu from './group-menu'
import Input from './input'

export default function NavBar() {
  const template: Array<MenuItemConstructorOptions> = [
    {
      id: 'create-music',
      label: '新建电台'
    }
  ]

  const onContextMenuClick = async function () {
    const id = await popMenu(template)
    console.log(id)
  }

  return (
    <nav
      tw="h-screen w-1/4 border-r border-gray-300"
      style={{ minWidth: '200px' }}
      onContextMenu={onContextMenuClick}
    >
      <div tw="w-11/12 h-full mx-auto">
        <div className="webkit-drag" tw="w-full h-14"></div>
        <Input />
        <GroupMenu />
      </div>
    </nav>
  )
}
