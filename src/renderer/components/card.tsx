import { BadgeCheckIcon, DotsHorizontalIcon } from '@heroicons/react/solid'

import BlurIcon from './blur-icon'

export default function Card({ isHover }: { isHover: boolean }) {
  return (
    <div
      tw="bg-white  w-60 h-60 rounded-md  overflow-hidden shadow-lg hover:shadow-xl transition duration-300 m-5 border border-gray-200"
      style={{
        backgroundImage:
          'url(https://img9.doubanio.com/view/photo/l/public/p2671043811.webp)',
        backgroundSize: 'cover'
      }}
    >
      <div tw="w-full h-full opacity-100 hover:opacity-100 hover:bg-black hover:bg-opacity-20 transition duration-100 flex flex-col-reverse">
        <div tw="flex justify-between p-2">
          <BlurIcon>
            <BadgeCheckIcon tw="text-white" />
          </BlurIcon>
          <BlurIcon>
            <DotsHorizontalIcon tw="text-white" />
          </BlurIcon>
        </div>
      </div>
    </div>
  )
}
