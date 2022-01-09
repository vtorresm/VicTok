
import { Heart } from '../Icons/Heart.jsx'
import { Share } from '../Icons/Share.jsx'
import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions (likes = 2022, shares = 333, comments = 678, hearted = false) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <span title='like'>{likes}</span>
      </div>
      <div className={styles.action}>
        <Comment />
        <span title='comments'>{comments}</span>
      </div>
      <div className={styles.action}>
        <Share />
        <span title='shares'>{shares}</span>
      </div>
    </aside>
  )
}
