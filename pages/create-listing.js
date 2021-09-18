import ListingForm from '../components/Listings/ListingForm';
import { useRouter } from 'next/router';

function CreateListingPage() {
  const router = useRouter();

  const createListingHandler = async (enteredListingData) => {
    // const response = await fetch('/api/new-meetup', {
    //   method: 'POST',
    //   body: JSON.stringify(enteredListingData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // const data = await response.json();
    // console.log(data);
    console.log(enteredListingData);
    router.push('/browse');
  }

  return (
    <div className="m-auto items-center p-10 w-full max-w-[100rem]">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-4">Create a Listing</h1>
      <ListingForm onCreateListing={createListingHandler} />
    </div>
  )
}

export default CreateListingPage;