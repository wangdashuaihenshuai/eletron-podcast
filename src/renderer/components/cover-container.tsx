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
      tw="h-full w-full flex-grow relative overflow-hidden"
      style={style ? { ...style } : {}}
    >
      {children.slice(0, children.length - 1).map((node) => {
        return (
          <div tw="absolute w-full h-full" key={node.key}>
            {node}
          </div>
        )
      })}
      {children[children.length - 1]}
    </div>
  )
}
