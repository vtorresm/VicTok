import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC =
  'https://v16-webapp.tiktok.com/d16bdca638fe2076061137231b5a521e/61da0903/video/tos/useast2a/tos-useast2a-ve-0068c001/004560f1ad964c73a851e3b08538376e/?a=1988&br=3934&bt=1967&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FOqkag3-I&l=2022010815571401022307202524C2481F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNoOTY6ZmtuOjMzNzczM0ApNjtlNWc1Z2U1NzQ5OGZmZmcxLmIycjRfMl9gLS1kMTZzczE1MjM0X19iMDM2MV4zYjM6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const video = useRef()
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video
        autoPlay
        muted
        className={styles.video}
        src={SRC}
        controls={false}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
