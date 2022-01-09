import { Heart } from '../Icons/Heart.jsx'
// import { Share } from '../Icons/Share.jsx'
// import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions () {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
    </aside>
  )
}
