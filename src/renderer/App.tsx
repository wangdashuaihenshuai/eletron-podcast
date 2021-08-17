import type * as React from 'react'
import { motion } from 'framer-motion'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/nav-bar'
import ListenNow from './page/listen-now'
import Explore from './page/explore'
import NewMovies from './page/new-movies'
import MovieHistory from './page/movie-history'

const groupMenuInfo = [
  {
    groupName: 'Apple Podcast',
    menuList: [
      { label: '现在就听', key: 'listen-now' },
      { label: '浏览', key: 'explore' },
      { label: '排行榜', key: 'ranking' }
    ]
  },
  {
    groupName: '资料库',
    menuList: [
      { label: '节目', key: 'program' },
      { label: '已存储', key: 'store' },
      { label: '已下载', key: 'download' },
      { label: '最新单集', key: 'latest' }
    ]
  }
]

function App() {
  const [select, setSelect] = useState<string>('listen-now')
  const history = useHistory()
  const onSelect = function (key: string) {
    setSelect(key)
    history.push('/' + key)
  }
  const onFource = function () {
    setSelect('')
    history.push('/search')
  }

  return (
    <div tw="h-screen w-screen flex flex-row bg-opacity-40 bg-gray-200">
      <NavBar
        groupMenuInfo={groupMenuInfo}
        select={select}
        onSelect={onSelect}
        onFocus={onFource}
      />
      <div tw="bg-white flex-grow overflow-hidden">
        <Switch>
          <Route path="/listen-now">
            <ListenNow />
          </Route>
          <Route path="/new-movies">
            <NewMovies />
          </Route>
          <Route path="/explore">
            <Explore title="浏览" />
          </Route>
          <Route path="/ranking">
            <Explore title="排行榜" />
          </Route>
          <Route path="/search">
            <Explore title="搜索" />
          </Route>
          <Route path="/movie-history">
            <MovieHistory />
          </Route>
          <Route path="/">
            <ListenNow />
          </Route>
          <Route path="*">
            <Explore title="404" />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
