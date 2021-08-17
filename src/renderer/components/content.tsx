import TruncateText from './truncate-text'

export default function Content({
  children,
  line
}: {
  children: string
  line?: number
}) {
  return (
    <div tw="text-xs text-gray-500 font-medium tracking-wide">
      <TruncateText line={line}>
        {children && children !== '' ? children : '...'}
      </TruncateText>
    </div>
  )
}
