import { Heart } from '../Icons/Heart.jsx'
import { Share } from '../Icons/Share.jsx'
import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions ({
  likes = 2022,
  shares = 333,
  comments = 678,
  hearted = false
}) {
  const handleLike = () => {
    window.alert('like')
  }

  const handleComment = () => {
    window.alert('comment')
  }

  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <button onClick={handleLike} className={styles.action}>
        <Heart />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
