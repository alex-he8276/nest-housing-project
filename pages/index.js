import Head from 'next/head';
import Card from '../components/Card';
import { MdSearch, MdPeople } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>The Nest Housing Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Banner */}
      {/* Highlight */}
      {/* Reviews */}
      {/* Footer */}

      <div className="grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <Card
          title="Search"
          description="Search with ease, by price, start term, location and more!"
        ><MdSearch size="2em" /></Card>
        <Card
          title="Create"
          description="Search with ease, by price, start term, location and more!"
        ><IoCreateOutline size="2em" /></Card>
        <Card
          title="Attract"
          description="Advertise your listings to over _____ students!"
        ><MdPeople size="2em" /></Card>
      </div>
    </div>
  )
}
