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

const emptyMovie: Movie = {
  actors: [''],
  duration: '',
  cover: '',
  id: '0',
  rate: '',
  region: '',
  release_year: '1970',
  directors: [''],
  short_comment: { content: '', author: '' },
  star: 4,
  title: '',
  types: [''],
  url: ''
}

export const getDefaultMovies = function (num: number) {
  const ret: Movie[] = []
  for (let index = 0; index < num; index++) {
    ret.push({ ...emptyMovie, id: index.toString() })
  }
  return ret
}
export const getMovies = async function (
  tag: string,
  pageNum: number
): Promise<Movie[]> {
  const type = 'movie'
  const query = new URLSearchParams()
  query.set('tag', tag)
  query.set('type', type)
  query.set('page_limit', pageNum.toString())
  query.set('page_sart', '0')
  const response = await fetch(
    `https://movie.douban.com/j/search_subjects?${query.toString()}`,
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

export default {}
