import React, { CSSProperties } from 'react'

export default function BlurIcon({
  style,
  children
}: {
  children: JSX.Element
  style?: CSSProperties
}) {
  return (
    <div
      tw="rounded-full w-full h-full text-white hover:bg-primary-400 hover:bg-opacity-100 bg-opacity-25 bg-white flex items-center place-content-center"
      className="glass"
      style={style ? { ...style } : { padding: '4px' }}
    >
      {React.cloneElement(children, { class: 'w-full h-full text-white' })}
    </div>
  )
}
