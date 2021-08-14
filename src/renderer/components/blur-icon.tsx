export default function BlurIcon({
  children
}: {
  children: JSX.Element[] | JSX.Element
}) {
  return (
    <div
      tw="rounded-full w-7 h-7 hover:bg-primary-400 hover:bg-opacity-100 bg-opacity-40 bg-white"
      className="glass"
      style={{ padding: '4px' }}
    >
      <div>{children}</div>
    </div>
  )
}
