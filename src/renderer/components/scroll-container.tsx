import { CSSProperties, useRef } from 'react'

export default function ScrollContainer({
  style,
  children
}: {
  children: JSX.Element[] | JSX.Element
  style?: CSSProperties
}) {
  const cardsRef = useRef<HTMLDivElement>(null)

  const onScroll = function (event: any) {
    if (cardsRef.current === null) return
    const node = cardsRef.current
    node.scrollLeft += event.deltaY
  }

  return (
    <div
      tw="flex flex-nowrap overflow-hidden w-full"
      style={style ? { ...style } : {}}
      ref={cardsRef}
      onWheel={onScroll}
    >
      {children}
    </div>
  )
}
