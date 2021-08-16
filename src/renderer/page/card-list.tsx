import { useEffect, useState, useRef } from 'react'
import BackBar from '../components/back-bar'
import Card from '../components/card'
import { getDefaultMovies, getMovies } from '../utils/douban'

export default function CardList() {
  const [hotMovies, setHotMovies] = useState<Movie[]>(getDefaultMovies(24))
  useEffect(() => {
    getMovies('热门', 24)
      .then((findMovies) => {
        setHotMovies(findMovies)
      })
      .catch(console.log)

    return () => {}
  }, [])
  return (
    <div tw="w-full h-screen overflow-scroll">
      <BackBar />
      <div tw="p-5 pb-2 md:pb-5 md:p-10 flex flex-row flex-wrap">
        {hotMovies.map((movie) => {
          const info = {
            cover: movie.cover,
            title: movie.title,
            time: movie.duration,
            comment: movie.short_comment.content,
            auth: movie.directors[0],
            rate: movie.rate
          }
          return (
            <div tw="m-auto" key={movie.id}>
              {' '}
              <Card {...info} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
