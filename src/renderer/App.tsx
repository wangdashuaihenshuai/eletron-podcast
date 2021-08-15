import type * as React from 'react'
import { motion } from 'framer-motion'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/nav-bar'
import ListenNow from './page/listen-now'
import Explore from './page/explore'
import CardList from './page/card-list'

const groupMenuInfo = [
  {
    groupName: 'Apple Podcast',
    menuList: [
      { lable: '现在就听', key: 'listen-now' },
      { lable: '浏览', key: 'explore' },
      { lable: '排行榜', key: 'ranking' }
    ]
  },
  {
    groupName: '资料库',
    menuList: [
      { lable: '节目', key: 'program' },
      { lable: '已存储', key: 'store' },
      { lable: '已下载', key: 'download' },
      { lable: '最新单集', key: 'lastest' }
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
          <Route path="/card-list">
            <CardList />
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
