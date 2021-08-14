import { useEffect, useState } from 'react'
import Card from '../components/card'

interface Movie {
  actors: string[]
  duration: string
  cover: string
  id: string
  rate: string
  region: string
  release_year: string
  directors: string
  short_comment: { content: string; author: string }
  star: 4
  title: string
  types: string[]
  url: string
}

const getDetail = async function (info: any): Promise<Movie> {
  const response: any = await fetch(
    `https://movie.douban.com/j/subject_abstract?subject_id=${info.id}`,
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6',
        'sec-ch-ua':
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://movie.douban.com/',
      referrerPolicy: 'unsafe-url',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }
  )
  const body = await response.json()
  const movie = body.subject
  movie.cover = info.cover.replace('/s_ratio_poster/', '/m_ratio_poster/')
  return movie
}

const getFileList = async function (): Promise<Movie[]> {
  const response = await fetch(
    'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=6&page_start=0',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6',
        'sec-ch-ua':
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest'
      },
      referrer: 'https://movie.douban.com/',
      referrerPolicy: 'unsafe-url',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }
  )
  const body: any = await response.json()
  return Promise.all(
    body.subjects.map((info: any) => {
      return getDetail(info)
    })
  )
}

export default function ListenNow() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getFileList()
      .then((getMovies) => {
        setMovies(getMovies)
      })
      .catch(console.log)
    return () => {}
  }, [])
  return (
    <div tw="w-full">
      <div tw="p-5 pb-2 md:pb-5 md:p-10 w-full bg-gradient-to-t from-gray-200 bg-opacity-80">
        <div tw="text-4xl font-bold border-b py-2" className="webkit-drag">
          现在就听
        </div>
        <div tw="flex flex-row justify-between py-3">
          <div tw="text-xl font-semibold">待播清单</div>
          <div tw="text-base font-normal text-primary-400">查看全部</div>
        </div>
        <div tw="flex flex-nowrap overflow-hidden w-full">
          {movies.map((movie) => {
            const info = {
              cover: movie.cover,
              title: movie.title,
              time: movie.duration,
              comment: movie.short_comment.content,
              auth: movie.directors
            }
            return <Card {...info} key={movie.id} />
          })}
        </div>
      </div>
      <div tw="px-5 md:px-10 py-5 w-full">
        <div tw="text-xl font-semibold">最近播放</div>
      </div>
    </div>
  )
}
