import Image from 'next/image'

export default function HeaderAbout() {
    return (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <header className="flex items-center bg-black bg-opacity-20 p-4 md:p-6">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <h1 className="text-2xl md:text-3xl ml-4 font-bold text-gray-100">About</h1>
        </header>
    );
}