import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'ruziotaku',
    description: 'Este es un video de prueba',
    likes: '10',
    shares: '5',
    comments: '2',
    songTitle: 'sonido original',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/d16bdca638fe2076061137231b5a521e/61da0903/video/tos/useast2a/tos-useast2a-ve-0068c001/004560f1ad964c73a851e3b08538376e/?a=1988&br=3934&bt=1967&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FOqkag3-I&l=2022010815571401022307202524C2481F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNoOTY6ZmtuOjMzNzczM0ApNjtlNWc1Z2U1NzQ5OGZmZmcxLmIycjRfMl9gLS1kMTZzczE1MjM0X19iMDM2MV4zYjM6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'ruziotaku',
    description: 'Este es un video de prueba',
    likes: '10',
    shares: '5',
    comments: '2',
    songTitle: 'sonido original',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/6796116557fe655b8078ff332a1d8b3f/61da08ce/video/tos/useast2a/tos-useast2a-ve-0068c001/096fb5ac90cd4030ac5569902a278294/?a=1988&br=1106&bt=553&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FOqkag3-I&l=2022010815571401022307202524C2481F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3M6cDQ6ZmQ6OjMzNzczM0ApaDgzZGY7aWU6NzNpNjc4aGdwYi1tcjRfbmBgLS1kMTZzc2NeXy8vYjUyYC8tNV5iMzM6Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
