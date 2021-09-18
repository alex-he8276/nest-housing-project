import Card from "./Card";
import { MdSearch, MdPeople } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';

export default function CardList(props) {
  return (
    <div className="grid lg:gap-10 md:gap-8 gap-4 mb-8 md:grid-cols-3 mx-auto px-8 sm:px-10 lg:px-14 mt-4 sm:mt-6 lg:mt-8  ">
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800">
        <Card
          title="Search"
          description="Search with ease, by price, start term, location and more!"
        >
          <MdSearch size="2em" m={2} p={2} />
        </Card>
      </div>
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800">
        <Card
          title="Create"
          description="Search with ease, by price, start term, location and more!"
        ><IoCreateOutline size="2em" /></Card>
      </div>
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800">
        <Card
          title="Attract"
          description="Advertise your listings to thousands of other students looking for a place to call home!"
        >
          <MdPeople size="2em" />
        </Card>
      </div>
    </div>
  );
}