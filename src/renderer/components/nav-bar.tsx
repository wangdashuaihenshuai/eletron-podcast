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
      tw="h-screen border-r border-gray-300"
      style={{ width: '200px', minWidth: '200px' }}
    >
      <div tw="flex flex-col w-full h-full">
        <div tw="w-11/12 mx-auto">
          <div className="webkit-drag" tw="w-full h-14"></div>
          <Input />
          <GroupMenu />
        </div>
        <div onContextMenu={onContextMenuClick} tw="w-full flex-grow"></div>
      </div>
    </nav>
  )
}
