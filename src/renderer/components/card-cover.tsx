export default function CardCover({
  cover,
  onClick,
  isHover,
  children
}: {
  cover: string
  isHover: boolean
  onClick?: () => void
  children: JSX.Element | JSX.Element[]
}) {
  if (isHover) {
    return (
      <div
        tw=" w-full h-full bg-white rounded-md shadow-xl transition duration-300"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover'
        }}
      >
        <div tw="w-full h-full bg-black bg-opacity-40 transition duration-100 ">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      tw=" w-full h-full bg-white rounded-md shadow-lg transition duration-300"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover'
      }}
    >
      <div tw="w-full h-full transition duration-100 ">{children}</div>
    </div>
  )
}
