export default function PlayStatus({ percent }: { percent: number }) {
  if (percent >= 100) {
    return (
      <div tw="font-medium text-gray-500 tracking-wide text-xs">已播放</div>
    )
  }

  return (
    <div tw="font-medium text-primary-500 tracking-wide text-xs">播放中</div>
  )
}
