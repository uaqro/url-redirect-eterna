import React from "react";
import { Route } from "react-router-dom";

function Home() {
  const randomizer = Math.floor(Math.random() * 6);
  return (
    <div>
      {(() => {
        switch (randomizer) {
          case 1:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/1szPPqG5SbeArzyMA";
                  return null;
                }}
              />
            );
          case 2:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/4JvnkVrm5zD9k4BY7";
                  return null;
                }}
              />
            );
          case 3:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/HKWuE8MzXhDcQywGA";
                  return null;
                }}
              />
            );
          case 4:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/A48hZtN27zWXm9DKA";
                  return null;
                }}
              />
            );
          case 5:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/4dgBNj6FCnK3E7j57";
                  return null;
                }}
              />
            );
          case 6:
            return (
              <Route
                path="/"
                component={() => {
                  window.location.href = "https://forms.gle/ZzNRi6buVQENgvdb7";
                  return null;
                }}
              />
            );
          default:
            return <h1>Error</h1>;
        }
      })()}
    </div>
  );
}

export default Home;
