import Link from 'next/link';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';


function MainNavigation() {

  return (
    <header className="sticky top-0 z-50 grid grid-cols-6 bg-white shadow-md p-5 md:px-10">

      {/* Left - LOGO */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Browse/Post/Favourites/Your Listings/ ETC*/}
      <div className="col-start-3 items-center justify-center text-center p-2 border-l-2 border-r-2 flex">
        <Link href='/browse'>Browse Listings</Link>
      </div>
      <div className="col-start-4 items-center justify-center text-center p-2 border-r-2 flex">
        <Link href='/post'>Post a Listing</Link>
      </div>

      {/* Right - Login/Signup*/}
      <div className="col-start-6 items-center justify-end flex">
        <div className="items-center justify-center flex space-x-2 border-2 p-2 rounded-full w-18 md:w-32">
          <MdMenu size="1.25em" />
          <FaUserCircle size="1.25em" />
        </div>
      </div>

    </header >
  );
}

export default MainNavigation;
