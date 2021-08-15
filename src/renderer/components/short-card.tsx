import { DownloadIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import BlurIcon from './blur-icon'
import TruncateText from './truncate-text'

export default function ShortCard({
  cover,
  title,
  time,
  comment,
  auth
}: CardInfo) {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseOver = function () {
    setIsHover(true)
  }
  const onMouseLeave = function () {
    setIsHover(false)
  }

  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full opacity-100 bg-black bg-opacity-40 transition duration-100 flex items-center place-content-center">
          <span tw="w-1/2 h-1/2">
            <BlurIcon style={{ padding: '15px' }}>
              <DownloadIcon tw="text-white" />
            </BlurIcon>
          </span>
        </div>
      )
    }

    return <div></div>
  }

  return (
    <div
      tw="pr-3 my-2 cursor-pointer flex"
      style={{
        minWidth: '50%',
        width: '50%'
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        tw="bg-white rounded-md  overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        style={{
          width: '100px',
          minWidth: '100px',
          height: '100px',
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover'
        }}
      >
        {renderAction()}
      </div>
      <div tw="flex-grow px-4 flex flex-col justify-between overflow-hidden">
        <div tw="w-full">
          <div tw="font-bold text-xs text-gray-500">{time}</div>
          <div tw="font-semibold tracking-wide truncate pb-1 text-sm hover:underline">
            {title}
          </div>
          <TruncateText text={comment} />
        </div>
        <div tw="font-medium text-gray-500 tracking-wide text-xs">已播放</div>
      </div>
    </div>
  )
}
