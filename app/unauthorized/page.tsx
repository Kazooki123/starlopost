/* eslint-disable tailwindcss/no-custom-classname */
// unauthorized page when accessed

import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-md">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-6 animate-pulse text-center font-extrabold text-gray-900">
            Unauthorized Access
          </h2>
          <div className="text-sm mt-2 text-center text-gray-600">
            Oops! You do not have permission to view this page.
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <p className="text-md text-center text-gray-700">
              If you believe this is an error, please contact the administrator.
            </p>
          </div>
          <div>
            <Link href="/"
              className="text-sm flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-purple-500 focus:ring-offset-2"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}