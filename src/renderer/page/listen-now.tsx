import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/card'
import ScrollContainer from '../components/scroll-container'
import SectionBar from '../components/section-bar'
import { getDefaultMovies, getMovies } from '../utils/douban'
import TitleBar from '../components/title-bar'
import HalfShortCard from '../components/half-short-card'

export default function ListenNow() {
  const [hotMovies, setHotMovies] = useState<Movie[]>(getDefaultMovies(10))
  const [movies, setMovies] = useState<Movie[]>(getDefaultMovies(8))
  const history = useHistory()
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
      <div tw="p-5 pb-2 md:pb-5 md:p-10 w-full bg-gradient-to-t from-gray-200 bg-opacity-80">
        <TitleBar title="现在就听" />
        <SectionBar
          title="待播清单"
          action="查看全部"
          onClickAction={() => {
            history.push('/new-movies')
          }}
        />
        <ScrollContainer>
          {hotMovies.map((movie) => {
            const info = {
              id: movie.id,
              cover: movie.cover,
              title: movie.title,
              time: movie.duration,
              comment: movie.short_comment.content,
              auth: movie.directors[0],
              rate: movie.rate
            }
            return <Card {...info} key={movie.id} />
          })}
        </ScrollContainer>
      </div>
      <div tw="px-5 md:px-10 py-2 w-full">
        <SectionBar
          title="最近播放"
          action="查看全部"
          onClickAction={() => {
            history.push('/movie-history')
          }}
        />
        <ScrollContainer>
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
            return (
              <div
                style={{
                  minWidth: '51%',
                  width: '51%'
                }}
              >
                <HalfShortCard info={info} key={movie.id} />
              </div>
            )
          })}
        </ScrollContainer>
      </div>
    </div>
  )
}
