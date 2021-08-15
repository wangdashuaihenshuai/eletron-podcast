import Titlebar from '../components/title-bar'

export default function Explore({ title }: { title: string }) {
  return (
    <div tw="w-full">
      <div tw="p-5 pb-2 md:pb-5 md:p-10 w-full">
        <Titlebar title={title} />
      </div>
    </div>
  )
}
