import { CSSProperties } from 'react'

export default function BlurIcon({
  style,
  children
}: {
  children: JSX.Element[] | JSX.Element
  style?: CSSProperties
}) {
  return (
    <div
      tw="rounded-full w-full h-full hover:bg-primary-400 hover:bg-opacity-100 bg-opacity-25 bg-white"
      className="glass"
      style={style ? { ...style } : { padding: '4px' }}
    >
      <div>{children}</div>
    </div>
  )
}
