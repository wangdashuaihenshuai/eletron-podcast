export default function CardCover({
  cover,
  onClick,
  children
}: {
  cover: string
  onClick?: () => void
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <div
      tw=" w-full h-full bg-white rounded-md shadow-lg hover:shadow-xl transition duration-300"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover'
      }}
    >
      <div tw="w-full h-full hover:bg-black hover:bg-opacity-40 transition duration-100 ">
        {children}
      </div>
    </div>
  )
}
