import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export default function Rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
  );
}
