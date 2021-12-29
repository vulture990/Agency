import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ListingForm from "../components/ListingForm";
import Listings from "../components/Listings";
import Pagination from "../components/Pagination";
import PrivateRoute from "../components/privateRoute";
import Post from "./Post";
// import '../index.css';
const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <main className="home">
      <Helmet>
        <title> Agence du Bassin Hydraulique du Guir Ziz Rheris- Home</title>
        <meta name="description" content="water Agence Home Page" />
      </Helmet>
      <div className="">
        {/* <h1 className="__form"> */}
        {/* Welcome to Water Agence */}
        {/* </h1> */}
        
        <div>
          <PrivateRoute exact path="/" component={Post} />
        </div>
      </div>
    </main>
  );
};

export default Home;
