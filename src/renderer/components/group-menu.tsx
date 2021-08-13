import { useState } from 'react'

export default function GroupMenu() {
  const [list, setList] = useState<string[]>(['现在就听', '浏览', '测试测'])
  const [select, setSelect] = useState<string>('浏览')

  const onClick = function (word: string) {
    return function () {
      setSelect(word)
    }
  }
  return (
    <div tw="my-2">
      <div tw="font-semibold text-gray-400" style={{ fontSize: '14px' }}>
        title
      </div>
      <div tw="font-normal tracking-wide" style={{ fontSize: '13px' }}>
        {list.map((word) =>
          select === word ? (
            <div
              onClick={onClick(word)}
              tw="w-full rounded bg-gray-500 bg-opacity-20 p-1 px-4 m-1"
            >
              {word}
            </div>
          ) : (
            <div onClick={onClick(word)} tw="w-full rounded  p-1 px-4 m-1">
              {word}
            </div>
          )
        )}
      </div>
    </div>
  )
}
