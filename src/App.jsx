import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import JobsCard from './component/JobsCard/JobsCard';
import JobsData from './component/Jobs_API';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
    </div>
  );
};

export default App;
