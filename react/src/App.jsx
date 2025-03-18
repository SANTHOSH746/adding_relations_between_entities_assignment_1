import React from "react";
import DestinationContainer from "./components/DestinationContainer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-6">Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;
