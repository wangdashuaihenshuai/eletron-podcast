import { DotsHorizontalIcon, StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { popCardMoreMenu } from '../utils/remote'
import BlurIcon from './blur-icon'
import CardCover from './card-cover'
import Content from './content'
import Title from './title'

export default function Card({
  cover,
  rate,
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

  const onContextMenuClick = async function () {
    const id = await popCardMoreMenu()
    console.log(id)
  }
  const getReteString = function (rateString: string): string {
    if (!rateString || rateString === '') {
      return ''
    }

    return rateString + '分'
  }

  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full flex flex-col-reverse">
          <div tw="flex justify-between p-2">
            <div tw="w-7 h-7">
              <BlurIcon>
                <StarIcon />
              </BlurIcon>
            </div>
            <div tw="w-7 h-7">
              <BlurIcon>
                <DotsHorizontalIcon onClick={onContextMenuClick} />
              </BlurIcon>
            </div>
          </div>
        </div>
      )
    }

    return <div></div>
  }

  return (
    <div
      tw="mr-3 my-2 cursor-pointer"
      style={{ width: '230px' }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          width: '230px',
          height: '230px'
        }}
      >
        <CardCover cover={cover}>{renderAction()}</CardCover>
      </div>
      <div
        style={{ width: '100%', height: '100px' }}
        tw="w-full flex flex-col justify-between"
      >
        <div>
          <div tw="font-bold text-xs py-1 pt-2 text-gray-500">{time}</div>
          <Title title={getReteString(rate) + ' ' + title} />
          <Content>{comment}</Content>
        </div>
        <div tw="pt-1 text-xs text-primary-500 hover:underline">{auth}</div>
      </div>
    </div>
  )
}
