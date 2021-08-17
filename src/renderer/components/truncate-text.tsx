export default function TruncateText({
  children,
  line
}: {
  children: string
  line?: number
}) {
  if (!line || line <= 0) {
    line = 2
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical'
      }}
    >
      {children}
    </div>
  )
}
