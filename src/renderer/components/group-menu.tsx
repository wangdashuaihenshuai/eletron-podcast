import { PlayIcon } from '@heroicons/react/outline'

interface MenuList {
  label: string
  key: string
}

export default function GroupMenu({
  select,
  groupMenuInfo,
  onSelect
}: GroupMenuProps) {
  const onClick = function (key: string) {
    return function () {
      onSelect(key)
    }
  }

  const Item = function (info: MenuList) {
    return (
      <div tw="text-sm flex flex-row items-center">
        <PlayIcon tw="text-primary-500 h-4 w-4 ml-2 mr-1" />
        {info.label}
      </div>
    )
  }

  const Menu = function (info: MenuList, isSelect: boolean) {
    if (isSelect) {
      return (
        <div
          key={info.key}
          onClick={onClick(info.key)}
          tw="w-full rounded-md bg-gray-600 bg-opacity-20  p-1"
        >
          {Item(info)}
        </div>
      )
    }

    return (
      <div
        key={info.key}
        onClick={onClick(info.key)}
        tw="w-full rounded-md  p-1"
      >
        {Item(info)}
      </div>
    )
  }

  return (
    <>
      {groupMenuInfo.map((menuInfo) => (
        <div tw="my-2" key={menuInfo.groupName}>
          <div
            tw="font-semibold text-gray-400 px-1"
            style={{ fontSize: '12px' }}
          >
            {menuInfo.groupName}
          </div>
          <div tw="font-normal tracking-wide my-1" style={{ fontSize: '11px' }}>
            {menuInfo.menuList.map((info) => Menu(info, select === info.key))}
          </div>
        </div>
      ))}
    </>
  )
}
