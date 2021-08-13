import { SearchIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'

export default function Input() {
  return (
    <div
      tw="text-sm flex w-full rounded border  border-gray-400 bg-gray-400 bg-opacity-20 border-opacity-10  focus:rounded focus:border focus:border-blue-500"
      style={{ fontSize: '13px' }}
    >
      {/* <Search /> */}
      <SearchIcon tw="h-6 w-6 text-gray-500 m-auto mx-1" />
      <input
        tw="outline-none  bg-gray-400 bg-opacity-0 w-full "
        placeholder="搜索"
      />
      <XCircleIcon tw="h-6 w-6 text-gray-500 m-auto mx-1" />
    </div>
  )
}
