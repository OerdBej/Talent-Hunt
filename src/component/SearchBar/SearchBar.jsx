import React from "react";

const SearchBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default SearchBar;
