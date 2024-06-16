"use client"

import { Button } from "@/components/ui/button" 

export default function AboutLeftSideBar() {
    const sections = ['Introductions', 'Features', 'Community'];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="mb-6 w-full md:mb-0 md:mr-8 md:w-64">
            {sections.map((section) => (
                <Button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase().replace(' ', '-'))}
                    variant="ghost"
                    className="mb-2 w-full justify-start text-left transition-colors hover:text-yellow-500"
                >
                    {section}
                </Button>
            ))}
        </nav>
    );
}