import Image from 'next/image'
import styles from './HeaderAbout.module.css'

export default function HeaderAbout() {
    return (
        <header className={styles.header}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <h1 className={styles.headerText}>About</h1>
        </header>
    )
}