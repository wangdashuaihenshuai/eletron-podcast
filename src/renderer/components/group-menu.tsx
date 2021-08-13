import { PlayIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function GroupMenu() {
  const [list, setList] = useState<string[]>(['现在就听', '浏览', '测试测'])
  const [select, setSelect] = useState<string>('浏览')

  const onClick = function (word: string) {
    return function () {
      setSelect(word)
    }
  }

  const item = function (word: string) {
    return (
      <div tw="flex flex-row">
        <PlayIcon tw="text-blue-600 h-4 w-4 mx-2" />
        {word}
      </div>
    )
  }

  return (
    <div tw="my-2">
      <div tw="font-semibold text-gray-400 px-1" style={{ fontSize: '14px' }}>
        title
      </div>
      <div tw="font-normal tracking-wide" style={{ fontSize: '13px' }}>
        {list.map((word) =>
          select === word ? (
            <div
              onClick={onClick(word)}
              tw="w-full rounded bg-gray-500 bg-opacity-20  py-1 my-1"
            >
              {item(word)}
            </div>
          ) : (
            <div onClick={onClick(word)} tw="w-full rounded  py-1 my-1">
              {item(word)}
            </div>
          )
        )}
      </div>
    </div>
  )
}
