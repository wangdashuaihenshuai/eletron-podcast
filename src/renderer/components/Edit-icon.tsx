import { CSSProperties } from 'react'

export default function EditIcon({
  style,
  children,
  onClick
}: {
  children: JSX.Element[] | JSX.Element
  onClick?: () => void
  style?: CSSProperties
}) {
  return (
    <div
      tw="w-7 h-7 px-1 rounded-md hover:bg-gray-200 flex items-center"
      onClick={onClick ? onClick : () => {}}
      style={style ? { ...style } : {}}
    >
      {children}
    </div>
  )
}
