import AboutText from '@/components/shared/AboutText'
import HeaderAbout from '@/components/shared/HeaderAbout'
import AboutLeftSideBar from '@/components/shared/AboutLeftSideBar'

export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <HeaderAbout />
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="flex flex-col p-4 md:flex-row md:p-8">
          <AboutLeftSideBar />
          <AboutText />
        </div>
      </div>
    );
}