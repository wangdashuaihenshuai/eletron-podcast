import { SearchIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function Input() {
  const [isDown, setIsDown] = useState<boolean>(false)

  const down = function () {
    setIsDown(true)
  }

  const up = function () {
    setIsDown(false)
  }

  const XCircle = function () {
    if (isDown) {
      return (
        <XCircleIcon
          onMouseDown={down}
          onMouseUp={up}
          tw="h-5 w-5 text-gray-300 m-auto mx-1"
        />
      )
    }
    return (
      <XCircleIcon
        onMouseDown={down}
        onMouseUp={up}
        tw="h-5 w-5 text-gray-500 m-auto mx-1"
      />
    )
  }

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
      {XCircle()}
    </div>
  )
}
