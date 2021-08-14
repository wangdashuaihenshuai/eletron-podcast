import { PlayIcon } from '@heroicons/react/outline'
import { useState } from 'react'

interface MenuList {
  lable: string
  key: string
}
interface GroupMenuInfo {
  groupName: string
  menuList: MenuList[]
}

export default function GroupMenu() {
  const [groupMenuInfo, setGroupMenuInfo] = useState<GroupMenuInfo[]>([
    {
      groupName: 'Apple Podcast',
      menuList: [
        { lable: '现在就听', key: 'listen-now' },
        { lable: '浏览', key: 'explore' },
        { lable: '排行榜', key: 'ranking' }
      ]
    },
    {
      groupName: '资料库',
      menuList: [
        { lable: '节目', key: 'program' },
        { lable: '已存储', key: 'store' },
        { lable: '已下载', key: 'download' },
        { lable: '最新单集', key: 'lastest' }
      ]
    }
  ])
  const [select, setSelect] = useState<string>('')

  const onClick = function (word: string) {
    return function () {
      setSelect(word)
    }
  }

  const Item = function (info: MenuList) {
    return (
      <div tw="flex flex-row items-center">
        <PlayIcon tw="text-blue-600 h-4 w-4 mx-2" />
        {info.lable}
      </div>
    )
  }

  const Menu = function (info: MenuList, isSelect: boolean) {
    if (isSelect) {
      return (
        <div
          onClick={onClick(info.key)}
          tw="w-full rounded-md bg-gray-600 bg-opacity-20  py-1"
        >
          {Item(info)}
        </div>
      )
    }

    return (
      <div onClick={onClick(info.key)} tw="w-full rounded-md  py-1">
        {Item(info)}
      </div>
    )
  }

  return (
    <>
      {groupMenuInfo.map((menuInfo) => (
        <div tw="my-2">
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
