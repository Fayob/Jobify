import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const JobContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchType, searchStatus, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
      {/* pagination button */}
    </Wrapper>
  );
};

export default JobContainer;
