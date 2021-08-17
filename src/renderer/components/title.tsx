export default function Title({ title }: { title: string }) {
  return (
    <div tw="pb-1 font-semibold tracking-wide truncate text-sm hover:underline">
      {title}
    </div>
  )
}
