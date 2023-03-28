import styles from '../styles/Cards.module.css'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { BsBook, BsInfoCircle } from 'react-icons/bs'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://openexa.org/" className={styles.card}>
        <div className={styles.row}>
          <BsBook />↗
        </div>
        <h3>OpenEXA Website</h3>
        <p>Learn about OpenEXA's products and offerings.</p>
      </a>

      <a href="https://docs.uniswap.org/sdk/widgets/swap-widget" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle />↗
        </div>
        <h3>Swap Widget Docs</h3>
        <p>Explore the Swap Widget&apos;s features and API.</p>
      </a>

    </div>
  )
}
