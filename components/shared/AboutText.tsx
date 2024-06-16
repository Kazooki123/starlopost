/* eslint-disable tailwindcss/no-custom-classname */

export default function AboutText() {
    return (
        <div className="flex-1">
            <section id="introduction" className="mb-8">
                <h2 className="text-2xl mb-4 font-bold text-yellow-500">Introduction</h2>
                <p className="text-gray-300">StarloPost is a thread-like website where users can engage in a creative and wholesome way.</p>
            </section>
            <section id="features" className="mb-8">
                <h2 className="text-2xl mb-4 font-bold text-yellow-500">Features</h2>
                <ul className="list-disc pl-5 text-gray-300">
                    <li>Community tab</li>
                    <li>Create Organization</li>
                    <li>Group Chats (Upcoming)</li>
                    <li>Media/Video Post (Upcoming)</li>
                    <li>Secure and user friendly UI</li>
                </ul>
            </section>
            <section id="community" className="mb-8">
                <h2 className="text-2xl mb-4 font-bold text-yellow-500">Community</h2>
                <p className="text-gray-300">We have a wholesome community, come and talk and discuss with users and groups together!</p>
            </section>
        </div>
    )
}