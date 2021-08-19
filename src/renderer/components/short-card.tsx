import { DownloadIcon } from '@heroicons/react/solid'
import React from 'react'

import BlurIcon from './blur-icon'
import CardCover from './card-cover'
import Content from './content'
import PlayStatus from './play-status'
import TimeText from './time-text'
import Title from './title'

export default function ShortCard({
  info,
  textLine,
  isHover
}: {
  info: CardInfo
  textLine: number
  isHover: boolean
}) {
  const renderAction = function () {
    if (isHover) {
      return (
        <div tw="w-full h-full flex items-center place-content-center">
          <BlurIcon tw="w-1/2 h-1/2" style={{ padding: '10px' }}>
            <DownloadIcon />
          </BlurIcon>
        </div>
      )
    }

    return <div></div>
  }

  const renderDetail = function () {
    return (
      <div tw="flex-grow h-full px-4 flex flex-col justify-between ">
        <div tw="w-full">
          <TimeText>{info.time ? info.time : '...'}</TimeText>
          <Title>{info.title}</Title>
          <Content line={textLine}>{info.comment}</Content>
        </div>
        {textLine <= 2 ? <PlayStatus percent={100} /> : <></>}
      </div>
    )
  }

  return (
    <div tw="cursor-pointer h-full flex">
      <div
        style={{
          width: '100px',
          minWidth: '100px',
          height: '100px'
        }}
      >
        <CardCover isHover={isHover} cover={info.cover}>
          {renderAction()}
        </CardCover>
      </div>
      <div tw="h-full w-full overflow-hidden">{renderDetail()}</div>
    </div>
  )
}
