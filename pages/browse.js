import dynamic from 'next/dynamic'
import { MongoClient } from "mongodb";

import PostingCard from "../components/Postings/PostingCard";

const Map = dynamic(() => import("../components/Map/Map"), {
  loading: () => "Loading...",
  ssr: false
});

const BrowsePage = ({ postings }) => {

  return (
    <div className="flex"/* className="grid mt-2 gap-6 md:grid-cols-1 lg:grid-cols-2" */>

      <div className="flex flex-col">

        {/* Postings List */}
        {postings.map((posting) => (
          <PostingCard
            key={posting.id}
            image={posting.image}
            price={posting.price}
            location={posting.location}
            coordinates={posting.coordinates}
            description={posting.description}
            term={posting.term}
            duration={posting.duration}
          />
        ))}
      </div>
      {/* <div className="bg-yellow-200 min-h-full h-48 ml-2">
        test
      </div> */}

      {/* Map */}
      <section className="hidden lg:inline-flex lg:min-w-[470px] xl:min-w-[600px]">
        <Map postings={postings} />
      </section>


    </div>
  )

}

// Build side NOT CLIENTSIDE
export async function getServerSideProps() {

  const client = await MongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();
  const postingsCollection = db.collection("postings");

  //const postings = await postingsCollection.find().toArray();

  const postings = [
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
      leaseType: "Lease",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      washrooms: 1,
      gender: "Any",
      distances: [0.1, 0.44, 1.5],
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
      leaseType: "Lease",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      washrooms: 1,
      gender: "Any",
      distances: [0.1, 0.44, 1.5],
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
      leaseType: "Lease",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      washrooms: 1,
      gender: "Any",
      distances: [0.1, 0.44, 1.5],
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
      leaseType: "Lease",
      buildingType: "Apartment/Condo",
      duration: "4 Months",
      roomsAvailable: 1,
      washrooms: 1,
      gender: "Any",
      distances: [0.1, 0.44, 1.5],
      coordinates: [43.47767291062504, -80.54361234122729],
    },
  ];

  client.close();

  return {
    props: {
      //   postings: postings.map(posting => ({
      //     id: posting._id.toString(),
      //     title: posting.title,
      //     location: posting.location,
      //     description: posting.description,
      //     startDate: posting.startDate,
      //     price: posting.price,
      //     utilities: posting.utilities,
      //     image: posting.image,
      //     leaseType: posting.leaseType,
      //     buildingType: posting.buildingType,
      //     duration: posting.duration,
      //     roomsAvailable: posting.roomsAvailable,
      //     washrooms: posting.washrooms,
      //     gender: posting.gender,
      //     distances: posting.distances,
      //   }))
      // },
      postings: postings,
    },
    // revalidate: 1 // nextjs will wait 60 seconds before regenerating this page for a new request
  };
}

export default BrowsePage;