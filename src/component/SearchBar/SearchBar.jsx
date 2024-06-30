import React, { useState } from 'react';

const SearchBar = () => {
  const [jobCriteria, setJobCriteria] = useState({
    title: '',
    location: '',
    experience: '',
    type: '',
  });

  const handleChange = (e) => {
    // One update value at a time
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <select
        onChange={handleChange}
        className='w-64 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        name='title'
        value={jobCriteria.title}
      >
        <option value='' disabled hidden>
          Jobs
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Job type */}

      <select
        onChange={handleChange}
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        name='type'
        value={jobCriteria.type}
      >
        <option value='' disabled hidden>
          Job Type
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Location */}
      <select
        onChange={handleChange}
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        name='location'
        value={jobCriteria.location}
      >
        <option value='' disabled hidden>
          Location
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Experience */}
      <select
        onChange={handleChange}
        className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'
        name='experience'
        value={jobCriteria.experience}
      >
        <option value='' disabled hidden>
          Experience
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* button for search */}
      <button className='w-64 bg-slate-500 text-white font-bold py-3 rounded-md'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
