import React from "react";
import Date from './Date'

const Search = () => {
  return (
    <>
      <form className="w-full h-[200px] md:h-[70px] w-[700px] bg-white">
        <div className="flex w-full h-full flex-col lg:flex-row">
          <div className="flex-1 border-r">
            <Date />
          </div>
          <div className="flex-1 border-r">
            
          </div>
          <button
            type="submit"
            className="btn"
          >
            Check now
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
