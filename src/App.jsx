import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import JobsCard from './component/JobsCard/JobsCard';
// the fake api data dummy
import jobsData from './component/Jobs_API/jobs_api';

//get multiple documents from a collection
import { collection, query, where, getDocs } from 'firebase/firestore';
//data in our database
import { db } from './Firebase/firebase.config';

const App = () => {
  const [jobs, setJobs] = useState([]);

  //async to fetch jobs - firebase

  const fetchJobs = async () => {
    //all jobs to be stored, in order to pass to the state
    const tempJobs = [];
    try {
      const q = query(collection(db, 'jobs'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({ ...job.data, id: job.id });
      });
    } catch (error) {
      console.error('Error fetching jobs: ', error);
    }
    setJobs(tempJobs);
  };

  //display in ui to fetch the page is loaded with new job
  useEffect(() => {
    fetchJobs();
  }, []);

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
