import { DotsHorizontalIcon, StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { popCardMoreMenu } from '../utils/remote'
import ActionCard from './action-card'
import BlurIcon from './blur-icon'
import CardCover from './card-cover'
import Content from './content'
import TimeText from './time-text'
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

  const getReteString = function (rateString: string): string {
    if (!rateString || rateString === '') {
      return ''
    }

    return rateString + '分'
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
        <ActionCard isHover={isHover} cover={cover} />
      </div>

      <div
        style={{ width: '100%', height: '100px' }}
        tw="w-full flex flex-col justify-between"
      >
        <div>
          <TimeText>{time ? time : '...'}</TimeText>
          <Title>{getReteString(rate) + ' ' + title}</Title>
          <Content>{comment}</Content>
        </div>
        <div tw="pt-1 text-xs text-primary-500 hover:underline">{auth}</div>
      </div>
    </div>
  )
}
