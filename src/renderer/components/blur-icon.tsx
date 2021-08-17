import React, { CSSProperties } from 'react'

export default function BlurIcon({
  style,
  children,
  ...props
}: {
  children: JSX.Element
  style?: CSSProperties
  tw?: string
}) {
  return (
    <div {...props}>
      <div
        tw="rounded-full w-full h-full text-white  hover:bg-primary-400 hover:bg-opacity-100 bg-opacity-25 bg-white flex items-center place-content-center"
        className="glass"
        style={style ? { ...style } : { padding: '4px' }}
      >
        {React.cloneElement(children, {
          className: 'w-full h-full text-white'
        })}
      </div>
    </div>
  )
}
