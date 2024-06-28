import React, { useState } from 'react';
import { preview } from 'vite';

// props from the state
const SearchBar = (props) => {
  const [jobRequirments, setJobRequirments] =
    useState({
      title: '',
      location: '',
      experience: '',
      type: '',
    });

  const handleChange = (e) => {
    setJobRequirments((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    await props.fetchJobs(jobRequirments);
  };

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <select
        className='w-64 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        value={selectedJob}
      >
        <option value='' disabled hidden>
          Jobs
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>
          iOS Developer
        </option>
        <option value='Android Developer'>
          Android Developer
        </option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Job type */}
      <select
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        value={selectedJobType}
      >
        <option value='' disabled hidden>
          Job Type
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>
          iOS Developer
        </option>
        <option value='Android Developer'>
          Android Developer
        </option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Location */}
      <select
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        value={selectedLocation}
      >
        <option value='' disabled hidden>
          Location
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>
          iOS Developer
        </option>
        <option value='Android Developer'>
          Android Developer
        </option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Experience */}
      <select
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        value={selectedExperience}
      >
        <option value='' disabled hidden>
          Experience
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>
          iOS Developer
        </option>
        <option value='Android Developer'>
          Android Developer
        </option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* button for search */}
      <button
        onClick={search}
        className='w-64 bg-slate-500 text-white font-bold py-3 rounded-md'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
