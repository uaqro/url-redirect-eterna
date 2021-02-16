import React from "react";
import { Route } from "react-router-dom";

function Home() {
  const randomizer = Math.floor(Math.random() * 6);
  return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://www.eternatulum.mx";
                  return null;
                }}
              />
  );
}

export default Home;
