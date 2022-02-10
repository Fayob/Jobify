import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);
  if (isLoading) {
    <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      <ChartsContainer />
      {/* {monthlyApplications > 0 && <ChartsContainer />} */}
    </>
  );
};

export default Stats;
