import { CSSProperties, useRef } from 'react'

export default function ScrollContainer({
  className,
  style,
  children
}: {
  children: JSX.Element[] | JSX.Element
  style?: CSSProperties
  className?: string
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
      className={className}
      ref={cardsRef}
      onWheel={onScroll}
    >
      {children}
    </div>
  )
}
