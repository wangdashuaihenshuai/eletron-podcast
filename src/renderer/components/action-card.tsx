import { DotsHorizontalIcon, StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { popCardMoreMenu } from '../utils/remote'
import BlurIcon from './blur-icon'
import CardCover from './card-cover'
import Content from './content'
import TimeText from './time-text'
import Title from './title'

export default function ActionCard({
  isHover,
  cover
}: {
  isHover?: boolean
  cover: string
}) {
  const onContextMenuClick = async function () {
    const id = await popCardMoreMenu()
    console.log(id)
  }

  const [isSelfHover, setIsSelfHover] = useState<boolean>(false)

  const onMouseOver = function () {
    setIsSelfHover(true)
  }
  const onMouseLeave = function () {
    setIsSelfHover(false)
  }

  const renderAction = function () {
    const hover = isHover === undefined ? isSelfHover : isHover
    if (hover) {
      return (
        <div tw="w-full h-full flex flex-col-reverse">
          <div tw="flex justify-between p-2">
            <BlurIcon tw="w-7 h-7">
              <StarIcon />
            </BlurIcon>
            <BlurIcon tw="w-7 h-7">
              <DotsHorizontalIcon onClick={onContextMenuClick} />
            </BlurIcon>
          </div>
        </div>
      )
    }

    return <div></div>
  }

  return (
    <div
      tw="w-full h-full"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <CardCover
        isHover={isHover === undefined ? isSelfHover : isHover}
        cover={cover}
      >
        {renderAction()}
      </CardCover>
    </div>
  )
}
