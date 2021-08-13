import GroupMenu from './group-menu'
import Input from './input'

export default function TopBar() {
  return (
    <nav
      tw="h-screen w-1/4 border-r border-gray-300"
      style={{ minWidth: '200px' }}
    >
      <div tw="w-10/12 h-full mx-auto">
        <div className="webkit-drag" tw="w-full h-14"></div>
        <Input />
        <GroupMenu></GroupMenu>
      </div>
    </nav>
  )
}
