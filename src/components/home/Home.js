import React from "react";
import { Route } from "react-router-dom";

function Home() {
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
