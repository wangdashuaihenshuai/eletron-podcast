import { DownloadIcon } from '@heroicons/react/solid'

import BlurIcon from './blur-icon'
import TruncateText from './truncate-text'

export default function ShortCard({
  info,
  isHover
}: {
  info: CardInfo
  isHover: boolean
}) {
  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full opacity-100 bg-black bg-opacity-40 transition duration-100 flex items-center place-content-center">
          <span tw="w-1/2 h-1/2">
            <BlurIcon style={{ padding: '10px' }}>
              <DownloadIcon tw="text-white" />
            </BlurIcon>
          </span>
        </div>
      )
    }

    return <div></div>
  }

  const renderDetail = function () {
    return (
      <div tw="flex-grow h-full px-4 flex flex-col justify-between ">
        <div tw="w-full">
          <div tw="font-bold text-xs text-gray-500">{info.time}</div>
          <div tw="font-semibold tracking-wide truncate pb-1 text-sm hover:underline">
            {info.title}
          </div>
          <TruncateText text={info.comment} />
        </div>
        <div tw="font-medium text-gray-500 tracking-wide text-xs">已播放</div>
      </div>
    )
  }

  return (
    <div tw="pr-3 my-2 pb-4 cursor-pointer flex">
      <div
        tw="bg-white rounded-md  overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        style={{
          width: '100px',
          minWidth: '100px',
          height: '100px',
          backgroundImage: `url(${info.cover})`,
          backgroundSize: 'cover'
        }}
      >
        {renderAction()}
      </div>
      <div tw="h-full flex-grow overflow-hidden">{renderDetail()}</div>
    </div>
  )
}
