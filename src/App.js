import React, { useState, useEffect } from "react";
import ChartDisplay from "./Components/ChartDisplay";
import FilterDataBar from "./Components/FilterDataBar";
import Header from "./Components/Header";
import TrackingLog from "./Components/TrackingLog";
import AddLogModal from "./Components/AddLogModal";
import dummyData from "./dummyData";
import "./App.css";
import { useFirebase } from "./Components/Firebase/FirebaseContext";

function App() {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const firebase = useFirebase();

  console.log(firebase)
  // useEffect, render dummy data
  useEffect(() => {
    setData(dummyData);
    // console.log(data);
  }, []);

  const handleAddClick = (log) => {
    setData([...data, log]); //fix for firebase
    firebase.logs().push(log, () => {
      console.log("Log successfully tracked!")
    })
    setIsAdd(false);
  };

  // console.log(process.env.REACT_APP_API_KEY)

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
