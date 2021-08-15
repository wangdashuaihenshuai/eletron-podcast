export default function TruncateText({ text }: { text: string }) {
  return (
    <div
      tw="text-xs text-gray-500 font-medium tracking-wide"
      className="truncate-2-lines"
    >
      {text && text !== '' ? text : '...'}
    </div>
  )
}
