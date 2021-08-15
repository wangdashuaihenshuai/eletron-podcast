import { SearchIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'
import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export default function Input({ onFocus }: { onFocus?: () => void }) {
  const [isDown, setIsDown] = useState<boolean>(false)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const down = function () {
    setIsDown(true)
  }

  const history = useHistory()

  const onInputFocus = function () {
   
    if (onFocus) {
      onFocus()
    }
  }

  const onChange = function (event: any) {
    setValue(event.target.value)
  }

  const up = function () {
    setIsDown(false)
  }
  const clean = function () {
    setValue('')
    const node: any = inputRef.current
    if (!node) {
      return
    }

    node.value = ''
  }

  const XCircle = function () {
    if (value === '') {
      return <div tw="h-5 w-5 m-auto mx-1"></div>
    }

    if (isDown) {
      return (
        <XCircleIcon
          onMouseDown={down}
          onMouseUp={up}
          onClick={clean}
          tw="h-5 w-5 text-gray-300 m-auto mx-1"
        />
      )
    }
    return (
      <XCircleIcon
        onMouseDown={down}
        onMouseUp={up}
        onClick={clean}
        tw="h-5 w-5 text-gray-500 m-auto mx-1"
      />
    )
  }

  return (
    <div
      tw="text-sm flex w-full rounded-md border py-1 border-gray-400 bg-gray-400 bg-opacity-20 border-opacity-10  focus:rounded focus:border focus:border-blue-500"
      style={{ fontSize: '13px' }}
    >
      <SearchIcon tw="h-5 w-5 text-gray-500 mx-1" />
      <input
        ref={inputRef}
        onChange={onChange}
        onFocus={onInputFocus}
        tw="outline-none  bg-gray-400 bg-opacity-0 w-full "
        placeholder="搜索"
      />
      {XCircle()}
    </div>
  )
}
