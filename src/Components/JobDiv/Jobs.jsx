import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const requestBody = {
      limit: 10,
      offset: offset,
    };

    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", requestBody)
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data.jdList]);
        setOffset(offset + 10);
        setHasMore(response.data.jdList.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        endMessage={<p>No more jobs to load</p>}
      >
        <div className="jobContainer flex gap-6 justify-center flex-wrap items-center py-10">
          {data.map(
            (
              {
                jdUid,
                logoUrl,
                companyName,
                jobRole,
                location,
                jobDetailsFromCompany,
                minExp,
                minJdSalary,
                maxJdSalary,
              },
              idx
            ) => (
              <div
                key={`${jdUid}-${idx}`}
                className="group group/item singleJob w-[320px] p-[20px] bg-white rounded-[12px] shadow-lg shadow-slate-300 hover:bg-gray-100"
              >
                <div className="company flex items-center gap-2">
                  <img
                    src={logoUrl}
                    title="logo icons"
                    alt=""
                    className="w-[15%]"
                  />
                  <span className="text-[19px] py-[1rem] block ">
                    {companyName}
                  </span>
                </div>
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor break-words">
                    {jobRole}
                  </h1>
                </span>
                <h6 className="text-[#807e7e]"> {location}</h6>
                <h6 className="text-[#807e7e] font-semibold text-[12px] mt-2">
                  {minJdSalary && maxJdSalary ? (
                    <span>
                      Estimated Salary: ₹{minJdSalary} - {maxJdSalary} LPA ✅
                    </span>
                  ) : (
                    <span>No salary information available</span>
                  )}
                </h6>
                <p
                  className="text-[14px] text-[#010101] pt-[20px] border-t-[2px] mt-[10px] mb-4 line-clamp-6"
                  title={jobDetailsFromCompany}
                >
                  {jobDetailsFromCompany}
                </p>

                {minExp ? (
                  <h6 className="text-[#807e7e] font-semibold text-[12px] mb-3">
                    Minimum Experience: {minExp} years
                  </h6>
                ) : (
                  <h6 className="text-[#807e7e] font-semibold text-[12px] mb-3">
                    No minimum experience specified
                  </h6>
                )}
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-emerald-400 text-black">
                  ⚡︎Easy Apply
                </button>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] mt-3 font-semibold bg-indigo-500 text-white">
                  Unlock referral asks
                </button>
              </div>
            )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Jobs;
