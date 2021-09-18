/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function HeroIntroduction() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-full ml-8">
        <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full">

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Find your home with</span>{' '}
                <span className="block text-indigo-600 xl:inline">The Nest</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A housing marketplace for university or college students during their study or work terms.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute h-56 w-full object-cover sm:h-72 md:h-96 lg:w-1/2 lg:h-full relative lg:inset-y-0 lg:right-0 grid-col">
        <Image
          className=""
          src="https://www.iconstudents.com/shared/skins/default/images/meet-icon-skyrise.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}