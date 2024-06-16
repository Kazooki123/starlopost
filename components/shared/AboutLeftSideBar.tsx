"use client";

import styles from './AboutLeftSideBar.module.css'

export default function AboutLeftSideBar() {
    const sections = ['Introductions', 'Features', 'Community'];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.sidebar}>
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase().replace(' ', '-'))}
                    className={styles.navButton}
                >
                    {section}
                </button>
            ))}
        </nav>
    );
}