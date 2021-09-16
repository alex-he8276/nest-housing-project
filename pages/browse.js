import { MongoClient } from "mongodb";


const BrowsePage = (props) => {

  return (
    <div className="grid mt-2 gap-6 md:grid-cols-1 lg:grid-cols-2">

      {/* Postings List */}
      <div className="bg-yellow-200 min-h-full h-48 ml-2">
          test
      </div>

      {/* MapBox */}
      <div className="bg-blue-400 min-h-full mr-2">
          test2
      </div>


    </div>
  )

}

// Build side NOT CLIENTSIDE
export async function getServerSideProps(context) {
  // fetch data from api or database or filesystem

  //   const req = context.req; // good for authentication
  //   const res = context.res;

  // console.log(process.env.DB_CONNECTION);

  const client = await MongoClient.connect(process.env.DB_CONNECTION);
  const db = client.db();
  const postingsCollection = db.collection("postings");

  const postings = [];

  client.close();

  return {
    props: {
      postings: postings.map(posting => ({
        id: posting._id.toString(),
        title: posting.title,
        address: posting.address,
        description: posting.description,
        startDate: posting.startDate,
        price: posting.price,
        utilities: posting.utilities,
        image: posting.image,
        leaseType: posting.leaseType,
        buildingType: posting.buildingType,
        duration: posting.duration,
        roomsAvailable: posting.roomsAvailable,
        washrooms: posting.washrooms,
        gender: posting.gender,
        distances: posting.distances,
      }))
    },
    // revalidate: 1 // nextjs will wait 60 seconds before regenerating this page for a new request
  };
}

export default BrowsePage;