import { useEffect, useState } from 'react'
import ActionCard from '../components/action-card'
import BackBar from '../components/back-bar'
import TimeText from '../components/time-text'
import Title from '../components/title'
import { getDefaultMovies, getMovies } from '../utils/douban'

export default function Movies() {
  const [hotMovies, setHotMovies] = useState<Movie[]>(getDefaultMovies(24))
  useEffect(() => {
    getMovies('热门', 24)
      .then((findMovies) => {
        setHotMovies(findMovies)
      })
      .catch(console.log)
  }, [])
  return (
    <div tw="w-full h-screen  overflow-scroll">
      <BackBar />
      <div tw="p-5 pb-2 md:pb-5 md:p-10 flex flex-row flex-wrap">
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
          return (
            <div tw="m-auto">
              <div
                tw="my-8 mx-2"
                style={{
                  width: '160px',
                  height: '160px'
                }}
              >
                <ActionCard cover={movie.cover} />
                <Title>{movie.title}</Title>
                <TimeText>{movie.duration}</TimeText>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
