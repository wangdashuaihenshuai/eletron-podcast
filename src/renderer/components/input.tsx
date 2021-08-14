import { SearchIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'

export default function Input() {
  return (
    <div
      tw="text-sm flex w-full rounded-md border py-1 border-gray-400 bg-gray-400 bg-opacity-20 border-opacity-10  focus:rounded focus:border focus:border-blue-500"
      style={{ fontSize: '13px' }}
    >
      <SearchIcon tw="h-5 w-5 text-gray-500 m-auto mx-1" />
      <input
        tw="outline-none  bg-gray-400 bg-opacity-0 w-full "
        placeholder="搜索"
      />
      <XCircleIcon tw="h-5 w-5 text-gray-500 m-auto mx-1" />
    </div>
  )
}
