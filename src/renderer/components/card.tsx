import { DotsHorizontalIcon, StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { popCardMoreMenu } from '../utils/remote'
import BlurIcon from './blur-icon'
import TruncateText from './truncate-text'

export default function Card({ cover, title, time, comment, auth }: CardInfo) {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseOver = function () {
    setIsHover(true)
  }
  const onMouseLeave = function () {
    setIsHover(false)
  }

  const onContextMenuClick = async function () {
    const id = await popCardMoreMenu()
    console.log(id)
  }

  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full opacity-100 bg-black bg-opacity-40 transition duration-100 flex flex-col-reverse">
          <div tw="flex justify-between p-2">
            <span tw="w-7 h-7">
              <BlurIcon>
                <StarIcon tw="text-white" />
              </BlurIcon>
            </span>
            <span tw="w-7 h-7">
              <BlurIcon>
                <DotsHorizontalIcon
                  onClick={onContextMenuClick}
                  tw="text-white"
                />
              </BlurIcon>
            </span>
          </div>
        </div>
      )
    }

    return <div></div>
  }

  return (
    <div
      tw="mr-3 my-2 cursor-pointer"
      style={{ width: '250px' }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        tw="bg-white h-60 rounded-md  overflow-hidden shadow-lg hover:shadow-xl transition duration-300 "
        style={{
          width: '250px',
          height: '250px',
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover'
        }}
      >
        {renderAction()}
      </div>
      <div
        style={{ width: '100%', height: '100px' }}
        tw="w-full flex flex-col justify-between"
      >
        <div>
          <div tw="font-bold text-xs py-1 pt-2 text-gray-500">{time}</div>
          <div tw="pb-1 font-semibold tracking-wide truncate text-sm hover:underline">
            {title}
          </div>
          <TruncateText text={comment} />
        </div>
        <div tw="pt-1 text-xs text-primary-500 hover:underline">{auth}</div>
      </div>
    </div>
  )
}
