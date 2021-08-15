export default function Titlebar({ title }: { title: string }) {
  return (
    <div tw="text-4xl font-bold border-b py-2" className="webkit-drag">
      {title}
    </div>
  )
}
