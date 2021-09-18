import Image from 'next/image';
import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/solid";

function ListingCard({ image, price, location, description, term, duration }) {

  return (
    <div className="flex py-4 px-3 border-b-2 cursor-pointer hover:shadow-lg transition duration-200 first:border-t-2">
      <div className="relative h-24 md:h-52 w-40 md:w-80 flex-shrink-0 rounded-3xl">
        <Image src={image} layout="fill" className="rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-black">
            ${price} / month
          </h2>
          <HeartOutline className="h-6 cursor-pointer text-red-600" />
        </div>
        <h3 className="text-xl">
          {location}
        </h3>
        <div className="border-b-2 w-20 my-2" />
        <h4 className="pb-2 flex-grow">
          {description}
        </h4>
        <div className="flex flex-row">
          <span className="text-sm text-center font-medium bg-purple-100 w-24 py-1 px-2 rounded text-purple-500 align-middle mr-2">{term}</span>
          <span className="text-sm text-center font-medium bg-gray-200 w-20 py-1 px-2 rounded text-gray-500 align-middle mr-2">{duration}</span>
        </div>


      </div>

    </div>
  )
}

export default ListingCard
