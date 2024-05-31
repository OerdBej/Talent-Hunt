import React from "react";

const SearchBar = () => {
  return (
    <div>
      <select className='w-64 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'>
        <option value='' disabled hidden selected>
          Jobs
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Job type */}
      <select className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'>
        <option value='' disabled hidden selected>
          Jobs
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Location */}
      <select className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'>
        <option value='' disabled hidden selected>
          Jobs
        </option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='iOS Developer'>iOS Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Advocate'>Advocate</option>
      </select>
      {/* the other Experience */}
      <select className='w-54 pl-4 py-3 bg-zinc-200 font-semibold rounded-md'>
        <option value='' disabled hidden selected>
          Jobs
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
