import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import JobsCard from "./component/JobsCard/JobsCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      <JobsCard />
    </div>
  );
};

export default App;
