import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import JobsCard from './component/JobsCard/JobsCard';
// the fake api data dummy
import jobsData from './component/Jobs_API/jobs_api';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {/* in order to pas as props we map */}
      {jobsData.map((job) => (
        <JobsCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;
