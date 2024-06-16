import styles from './about.module.css'

import AboutText from '@/components/shared/AboutText'
import HeaderAbout from '@/components/shared/HeaderAbout'
import AboutLeftSideBar from '@/components/shared/AboutLeftSideBar'

export default function AboutPage() {
    return (
      <div className={styles.aboutContainer}>
        <HeaderAbout />
        <div className={styles.contentWrapper}>
          <AboutLeftSideBar />
          <AboutText />
        </div>
      </div>
    );
}