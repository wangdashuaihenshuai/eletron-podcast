import { CSSProperties } from 'react'

export default function EditIcon({
  style,
  children
}: {
  children: JSX.Element[] | JSX.Element
  style?: CSSProperties
}) {
  return (
    <div
      tw="w-7 h-7 px-1 rounded-md hover:bg-gray-200 flex items-center"
      style={style ? { ...style } : {}}
    >
      {children}
    </div>
  )
}
