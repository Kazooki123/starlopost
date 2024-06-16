import styles from './AboutText.module.css'

export default function AboutText() {
    return (
        <div className={styles.aboutText}>
            <section id="introduction">
                <h2>Introduction</h2>
                <p>StarloPost is a thread-like website where users can engage in a creative and wholesome way.</p>
            </section>
            <section id="features">
                <h2>Features</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>
            <section id="community">
                <h2>Community</h2>
                <p>We have a wholesome community, come and talk and discuss with users and groups together!</p>
            </section>
        </div>
    );
}