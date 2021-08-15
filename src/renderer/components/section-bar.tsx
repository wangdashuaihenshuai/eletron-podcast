export default function SectionBar({
  title,
  action,
  onClickAction
}: {
  title: string
  action: string
  onClickAction?: () => void
}) {
  return (
    <div tw="flex flex-row justify-between py-3">
      <div tw="text-xl font-semibold">{title}</div>
      <div tw="text-base font-normal text-primary-400 cursor-pointer">
        {action}
      </div>
    </div>
  )
}
