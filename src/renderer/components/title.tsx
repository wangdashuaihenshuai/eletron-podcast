export default function Title({ children }: { children: string }) {
  return (
    <div tw="pb-1 font-semibold tracking-wide truncate text-sm hover:underline">
      {children}
    </div>
  )
}
