// unauthorized page when accessed

import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 animate-pulse">
            Unauthorized Access
          </h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            Oops! You don't have permission to view this page.
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <p className="text-center text-md text-gray-700">
              If you believe this is an error, please contact the administrator.
            </p>
          </div>
          <div>
            <Link href="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-purple-500 focus:ring-offset-2"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}