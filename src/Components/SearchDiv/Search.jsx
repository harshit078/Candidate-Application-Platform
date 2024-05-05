const Search = () => {
  return (
    <div className="searchDiv grid gap-1 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action=""></form>

      <div className="secDiv flex items-center gap-3 justify-center">
        <div className="singleSearch flex items-center">
          <label
            htmlFor="relevance"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[6px] px-2 py-1 "
          >
            <option value="">Roles</option>
            <option value="">tech lead</option>
            <option value="">frontend</option>
            <option value="">ios</option>
            <option value="">android</option>
            <option value="">backend</option>
          </select>
        </div>

        <div className="singleSearch flex items-center">
          <label
            htmlFor="tyoe"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1 "
          >
            <option value="">Number of employees</option>
            <option value="">Part-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className="singleSearch flex items-center">
          <label
            htmlFor="level"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[6px] px-2 py-1 "
          >
            <option value="">Experience</option>
            <option value="">1-3 years</option>
            <option value="">3-5 years</option>
            <option value="">Greater than 5 years</option>
          </select>
        </div>

        <div className="singleSearch flex items-center">
          <label
            htmlFor="tyoe"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[6px] px-4 py-1 "
          >
            <option value="">Remote</option>
            <option value="">Mumbai</option>
            <option value="">Delhi ncr</option>
            <option value="">Chennai</option>
          </select>
        </div>

        <div className="singleSearch flex items-center">
          <label
            htmlFor="tyoe"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[6px] px-2 py-1 "
          >
            <option value="">Min Base Pay Salary</option>
          </select>
        </div>

        <div className="singleSearch flex items-center">
          <label
            htmlFor="tyoe"
            className="text-[#808080] font-semibold"
          ></label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[6px] px-2 py-1 "
          >
            <option value="">Search Company Name</option>
          </select>
        </div>

        <span className="text-[#000000]  cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
