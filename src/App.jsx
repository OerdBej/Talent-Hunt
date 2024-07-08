import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import JobsCard from './component/JobsCard/JobsCard';
import jobsData from './component/Jobs_API/jobs_api';

import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from 'firebase/firestore';
//data in our database
import { db } from './Firebase/firebase.config';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [resetSearch, setResetSearch] = useState(false);

  const fetchJobs = async () => {
    setResetSearch(true);

    const tempJobs = [];
    const jobsRef = query(collection(db, 'jobs'));
    const q = query(jobsRef, orderBy('postedOn', 'desc'));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  //query the data based on the search form user from querying and filtering data on firebase documentation
  const getJobs = async (jobCriteria) => {
    setResetSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, 'jobs'));
    const q = query(
      jobsRef,
      where('type', '==', jobCriteria.type),
      where('title', '==', jobCriteria.title),
      where('experience', '==', jobCriteria.experience),
      where('location', '==', jobCriteria.location),
      orderBy('postedOn', 'desc')
    );

    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar getJobs={getJobs} />

      {setResetSearch && (
        <button>
          <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>
            clear
          </p>
        </button>
      )}

      {/* in order to pas as props we map */}
      {jobsData.map((job) => (
        <JobsCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;
