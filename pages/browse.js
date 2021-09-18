import dynamic from 'next/dynamic'
import { MongoClient } from "mongodb";

import ListingCard from "../components/Listings/ListingCard";

const Map = dynamic(() => import("../components/Map/Map"), {
  loading: () => "Loading...",
  ssr: false
});

const BrowsePage = ({ listings }) => {

  return (
    <div className="flex"/* className="grid mt-2 gap-6 md:grid-cols-1 lg:grid-cols-2" */>

      <div className="flex flex-col">

        {/* listings List */}
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            image={listing.image}
            price={listing.price}
            location={listing.location}
            coordinates={listing.coordinates}
            description={listing.description}
            term={listing.term}
            duration={listing.duration}
          />
        ))}
      </div>
      {/* <div className="bg-yellow-200 min-h-full h-48 ml-2">
        test
      </div> */}

      {/* Map */}
      <section className=" lg:inline-flex p-6 lg:min-w-[470px] xl:min-w-[50%]">
        <Map listings={listings} />
      </section>

    </div>
  )
}

// Build side NOT CLIENTSIDE
export async function getServerSideProps() {

  const client = await MongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();
  const listingsCollection = db.collection("listings");

  //const listings = await listingsCollection.find().toArray();

  const listings = [
    {
      id: 1,
      title: "1 Rooms available for Spring term",
      location: "330 Phillip St.",
      description: "Random description that includes information about the unit and the building. Trying to write this even longer to see how much space I will need.",
      startDate: "Starts Sept. 4",
      term: "Winter 2022",
      price: 750,
      utilities: "Included",
      image: "https://www.iconstudents.com/shared/skins/default/images/meet-icon-skyrise.jpg",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      bathooms: 1,
      gender: "Any",
      coordinates: [43.47586669406319, -80.53271184396581],
    },
    {
      id: 2,
      title: "2 Rooms available for Spring term",
      location: "100 Phillip St.",
      description: "Random description",
      startDate: "Starts Sept. 4",
      term: "Winter 2022",
      price: 800,
      utilities: "Included",
      image: "https://www.iconstudents.com/shared/skins/default/images/meet-icon-skyrise.jpg",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      bathooms: 1,
      gender: "Any",
      coordinates: [43.46739544092925, -80.53820500794009],
    },
    {
      id: 3,
      title: "3 Rooms available for Spring term",
      location: "330 Phillip St.",
      description: "Random description",
      startDate: "Starts Sept. 4",
      term: "Winter 2022",
      price: 900,
      utilities: "Included",
      image: "https://www.iconstudents.com/shared/skins/default/images/meet-icon-skyrise.jpg",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      bathooms: 1,
      gender: "Any",
      coordinates: [43.47555527195781, -80.55219540993708],
    },
    {
      id: 4,
      title: "4 Rooms available for Spring term",
      location: "330 Phillip St.",
      description: "Random description",
      startDate: "Starts Sept. 4",
      term: "Winter 2022",
      price: 950,
      utilities: "Included",
      image: "https://www.iconstudents.com/shared/skins/default/images/meet-icon-skyrise.jpg",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      bathooms: 1,
      gender: "Any",
      coordinates: [43.47767291062504, -80.54361234122729],
    },
  ];

  client.close();

  return {
    props: {
      //   listings: listings.map(listing => ({
      //     id: listing._id.toString(),
      //     title: listing.title,
      //     location: listing.location,
      //     description: listing.description,
      //     startDate: listing.startDate,
      //     price: listing.price,
      //     utilities: listing.utilities,
      //     image: listing.image,
      //     leaseType: listing.leaseType,
      //     buildingType: listing.buildingType,
      //     duration: listing.duration,
      //     roomsAvailable: listing.roomsAvailable,
      //     bathooms: listing.bathooms,
      //     gender: listing.gender,
      //   }))
      // },
      listings: listings,
    },
    // revalidate: 1 // nextjs will wait 60 seconds before regenerating this page for a new request
  };
}

export default BrowsePage;