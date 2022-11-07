import { format } from "date-fns";
import { useRouter } from "next/router";
import react from "react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchCards from "../components/SearchCards";
const search = ({ searchData }) => {
  const router = useRouter();
  const { endDate, guests, location, startDate } = router.query;
  if (endDate && startDate) {
    const dateStart = format(new Date(startDate), "yyyy-MM-dd");
    const dateEnd = format(new Date(endDate), "yyyy-MM-dd");

    const screenDates = `${dateStart} - ${dateEnd}`;

    return (
      <>
        <Header
          placeholder={`${location} | ${screenDates} - ${guests} guests `}
        />
        <main className="flex">
          <section className="flex-grow pt-14 px-6">
            {screenDates && (
              <p className="text-xs">
                300+ Stay - {screenDates} - for {guests} guests
              </p>
            )}
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex text-gray-800 whitespace-nowrap mb-5 space-x-3">
              <p className="button">cancellation Flexibility</p>
              <p className="button">Type of Placey</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
            <div>
              {searchData?.map(
                ({
                  description,
                  img,
                  lat,
                  location,
                  long,
                  price,
                  star,
                  title,
                  total,
                }) => (
                  <SearchCards
                    star={star}
                    location={location}
                    key={title}
                    description={description}
                    img={img}
                    title={title}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchData = await searchResults.json();

  return {
    props: {
      searchData,
    },
  };
}
