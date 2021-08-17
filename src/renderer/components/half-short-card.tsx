import { useState } from 'react'
import { DownloadIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import CoverContainer from '../components/cover-container'
import ShortCard from '../components/short-card'
import { popCardMoreMenu } from '../utils/remote'

export default function HalfShortCard({ info }: { info: CardInfo }) {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseOver = function () {
    setIsHover(true)
  }

  const onMouseLeave = function () {
    setIsHover(false)
  }

  const ontMenuClick = async function () {
    const id = await popCardMoreMenu()
    console.log(id)
  }

  const renderRightIcon = function () {
    return (
      <div tw="w-full h-full text-primary-500 flex flex-row-reverse items-center p-2">
        <div tw="w-5 h-5 m-2">
          <DotsHorizontalIcon onClick={ontMenuClick} />
        </div>
        <div tw="w-5 h-5 m-2">
          <DownloadIcon />
        </div>
      </div>
    )
  }

  const renderRight = function () {
    if (!isHover) {
      return <></>
    }

    return (
      <div tw="w-full h-full flex flex-row-reverse">
        <div
          tw="w-1/3 h-full"
          style={{
            padding: '10px',
            background:
              'linear-gradient(to left, #fff 0% 70%,  rgba(0,0,0,0) 90% 100%)'
          }}
        >
          {renderRightIcon()}
        </div>
      </div>
    )
  }

  return (
    <div tw="h-full" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <CoverContainer>
        {renderRight()}
        <ShortCard info={info} key={info.id} isHover={isHover} />
      </CoverContainer>
    </div>
  )
}
