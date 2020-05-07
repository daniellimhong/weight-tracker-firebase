import React, { useState, useEffect } from "react";
import ChartDisplay from "./Components/ChartDisplay";
import FilterDataBar from "./Components/FilterDataBar";
import Header from "./Components/Header";
import TrackingLog from "./Components/TrackingLog";
import AddLogModal from "./Components/AddLogModal";
import dummyData from "./dummyData";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  // useEffect, render dummy data
  useEffect(() => {
    setData(dummyData);
    // console.log(data);
  }, []);

  const handleAddClick = (log) => {
    setData([...data, log]); //fix for firebase
    setIsAdd(false);
  };

  return (
    <div className="App">
      {!isAdd ? (
        <>
          <Header />
          <FilterDataBar isAdd={isAdd} setIsAdd={setIsAdd} />
          {/* { isAdd ? "true" : "false"}  */}
          <ChartDisplay data={data} />
          <TrackingLog data={data} />
        </>
      ) : (
        <AddLogModal
          handleAddClick={handleAddClick}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          newId={data.length}
        />
      )}
    </div>
  );
}

export default App;
