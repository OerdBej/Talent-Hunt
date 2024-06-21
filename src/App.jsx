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
  const [jobsData, setJobsData] = useState([]);

  //async to fetch jobs - firebase

  const fetchJobs = async () => {
    try {
      // Querying data from the collection
      const q = query(collection(db, 'jobs'));
      const querySnapshot = await getDocs(q);
      //to get all the data
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    } catch (error) {
      console.error('Error fetching jobs: ', error);
    }
  };

  //display in ui to fetch the page is loaded with new job
  useEffect(() => {}, []);

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
