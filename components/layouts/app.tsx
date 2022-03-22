import Link from "next/link";

export default function LandingLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white font-montserrat">
        {/*---HEADER---*/}
        <header className="h-24 sm:h-24 flex items-center border-b ">
          <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
            <Link href={`/`}>
              <div className="text-black font-black text-2xl flex items-center cursor-pointer">
                <span className="w-12 h-12 rounded-full bg-green-300 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 icon icon-tabler icon-tabler-clock"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <polyline points="12 7 12 12 15 15"></polyline>
                  </svg>
                </span>{" "}
                Calendly
              </div>
            </Link>

            <div className="flex items-center">
              <nav className="text-black text-lg hidden lg:flex items-center font-bold">
                <div className="py-2 px-3 h-full flex flex-row space-x-2 border rounded-md">
                  <img
                    src="https://pbs.twimg.com/profile_images/958258285055967233/2ekSG05m.jpg"
                    className="w-10 h-10 rounded-full bg-red-400"
                  />
                  <div className="flex flex-col font-semibold">
                    <div className="text-sm ">pace3man@gmail.com</div>
                    <div className="text-xs">Adel Chemi</div>
                  </div>
                  <div />
                </div>
              </nav>
              <button className="lg:hidden flex flex-col">
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        {/*---MAIN---*/}
        <div className="flex flex-row">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-full min-h-screen bg-gray-50">{children}</div>
        </div>
      </main>
    </>
  );
}

function Sidebar() {
  return (
    <div className="h-full w-full font-semibold text-lg flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="flex flex-col left-0 w-64 bg-white h-full border-r">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <Link href={`/app`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Get Started
                  </span>
                </a>
              </li>
            </Link>

            <Link href={`/app/services`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Services
                  </span>
                </a>
              </li>
            </Link>
            <Link href={`/app/history`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Meeting History
                  </span>
                </a>
              </li>
            </Link>
            <Link href={`/app/publications`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Publications
                  </span>
                </a>
              </li>
            </Link>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Settings
                </div>
              </div>
            </li>
            <Link href={`/app/profile`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </a>
              </li>
            </Link>
            <Link href={`/app/billing`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Billing
                  </span>
                </a>
              </li>
            </Link>
            {/* <Link href={`/app/account`}>
          <li>
          <a
              className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
              <span className="inline-flex justify-center items-center ml-4">
              <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
              </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
              Account
              </span>
          </a>
          </li>
          </Link> */}
            <Link href={`/app/settings`}>
              <li>
                <a className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
