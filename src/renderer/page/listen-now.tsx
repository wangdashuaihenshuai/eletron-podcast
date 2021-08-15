import { useEffect, useState, useRef } from 'react'
import Card from '../components/card'
import ShortCard from '../components/short-card'
import ScrollContainer from '../components/scroll-container'
import SectionBar from '../components/section-bar'
import { getDefaultMovies, getMovies } from '../utils/douban'
import Titlebar from '../components/title-bar'

export default function ListenNow() {
  const [hotMovies, setHotMovies] = useState<Movie[]>(getDefaultMovies(5))
  const [movies, setMovies] = useState<Movie[]>(getDefaultMovies(10))

  useEffect(() => {
    getMovies('热门', 8)
      .then((findMovies) => {
        setHotMovies(findMovies)
      })
      .catch(console.log)
    getMovies('豆瓣高分', 8)
      .then((findMovies) => {
        setMovies(findMovies)
      })
      .catch(console.log)
    return () => {}
  }, [])

  return (
    <div tw="w-full">
      <div tw="w-full bg-gradient-to-t from-gray-200 bg-opacity-80">
        <div tw="p-5 pb-2  w-full">
          <Titlebar title="现在就听" />
          <SectionBar title="待播清单" action="查看全部" />
        </div>
        <div tw="w-full">
          <ScrollContainer className="px-5">
            {hotMovies.map((movie) => {
              const info = {
                cover: movie.cover,
                title: movie.title,
                time: movie.duration,
                comment: movie.short_comment.content,
                auth: movie.directors[0]
              }
              return <Card {...info} key={movie.id} />
            })}
          </ScrollContainer>
        </div>
      </div>

      <div tw="px-5 w-full">
        <SectionBar title="最近播放" action="查看全部" />
      </div>
      <ScrollContainer className="p-5">
        {movies.map((movie) => {
          const info = {
            cover: movie.cover,
            title: movie.title,
            time: movie.duration,
            comment: movie.short_comment.content,
            auth: movie.directors[0]
          }
          return <ShortCard {...info} key={movie.id} />
        })}
      </ScrollContainer>
    </div>
  )
}
