interface GroupMenuInfo {
  groupName: string
  menuList: MenuList[]
}

interface GroupMenuProps {
  select: string
  groupMenuInfo: GroupMenuInfo[]
  onSelect: (key: string) => void
}

interface Movie {
  actors: string[]
  duration: string
  cover: string
  id: string
  rate: string
  region: string
  release_year: string
  directors: string[]
  short_comment: { content: string; author: string }
  star: 4
  title: string
  types: string[]
  url: string
}

interface CardInfo {
  cover: string
  title: string
  comment: string
  time: string
  auth: string
}
