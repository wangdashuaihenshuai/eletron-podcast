import { DotsHorizontalIcon, DownloadIcon } from '@heroicons/react/solid'
import { MenuItemConstructorOptions } from 'electron'
import { useState } from 'react'
import { popMenu } from '../utils/remote'
import BlurIcon from './blur-icon'

interface CardInfo {
  cover: string
  title: string
  comment: string
  time: string
  auth: string
}

export default function Card({ cover, title, time, comment, auth }: CardInfo) {
  const template: Array<MenuItemConstructorOptions> = [
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

  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseOver = function () {
    setIsHover(true)
  }
  const onMouseLeave = function () {
    setIsHover(false)
  }

  const onContextMenuClick = async function () {
    const id = await popMenu(template)
    console.log(id)
  }

  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full opacity-100 bg-black bg-opacity-40 transition duration-100 flex flex-col-reverse">
          <div tw="flex justify-between p-2">
            <BlurIcon>
              <DownloadIcon tw="text-white" />
            </BlurIcon>
            <BlurIcon>
              <DotsHorizontalIcon
                onClick={onContextMenuClick}
                tw="text-white"
              />
            </BlurIcon>
          </div>
        </div>
      )
    }

    return <div></div>
  }

  return (
    <div
      tw="mx-3 my-2"
      style={{ width: '250px' }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        tw="bg-white  h-60 rounded-md  overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
        style={{
          width: '250px',
          height: '250px',
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover'
        }}
      >
        {renderAction()}
      </div>
      <div>
        <div tw="font-bold text-xs py-1 pt-2 text-gray-500">{time}</div>
        <div tw="font-semibold tracking-wide truncate text-sm hover:underline">
          {title}
        </div>
        <p tw="font-medium truncate text-gray-500 tracking-wide text-xs py-1">
          {comment}
        </p>
        <div tw="font-medium text-xs text-primary-500 hover:underline">
          {auth}
        </div>
      </div>
    </div>
  )
}
