import { CSSProperties } from 'react'

export default function CoverContainer({
  style,
  children
}: {
  children: JSX.Element[]
  style?: CSSProperties
}) {
  return (
    <div
      tw="h-full flex-grow relative overflow-hidden"
      style={style ? { ...style } : {}}
    >
      <div tw="absolute w-full h-full">{children[0]}</div>
      {children[1]}
    </div>
  )
}
