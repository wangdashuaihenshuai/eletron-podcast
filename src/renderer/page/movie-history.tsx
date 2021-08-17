import React, { useEffect, useState, useRef } from 'react'
import BackBar from '../components/back-bar'
import FullShortCard from '../components/full-short-card'
import { getDefaultMovies, getMovies } from '../utils/douban'

export default function MovieHistory() {
  const [movies, setMovies] = useState<Movie[]>(getDefaultMovies(20))
  useEffect(() => {
    getMovies('豆瓣高分', 20)
      .then((findMovies) => {
        setMovies(findMovies)
      })
      .catch(console.log)
    return () => {}
  }, [])
  return (
    <div tw="w-full h-screen overflow-scroll">
      <BackBar />
      <div tw="p-5 pb-2 md:pb-5 md:p-10">
        {movies.map((movie) => {
          const info = {
            id: movie.id,
            cover: movie.cover,
            title: movie.title,
            time: movie.duration,
            comment: movie.short_comment.content,
            auth: movie.directors[0],
            rate: movie.rate
          }
          return <FullShortCard info={info} key={movie.id} />
        })}
      </div>
    </div>
  )
}
