import React, { useState, useEffect } from "react";
import ChartDisplay from "./Components/ChartDisplay";
import FilterDataBar from "./Components/FilterDataBar";
import Header from "./Components/Header";
import TrackingLog from "./Components/TrackingLog";
import AddLogModal from "./Components/AddLogModal";
import "./App.css";
import { useFirebase } from "./Components/Firebase/FirebaseContext";

function App() {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.logs().once('value', (snapshot) => {
      const databaseResponse = snapshot.val();
      setData(formatData(databaseResponse))
    })
    console.log(data);
  }, []);

  const formatData = inputData => {
    const arr = [];
    
    for (let log in inputData){
      const val = inputData[log];
      val['log'] = log;
      arr.push(val)
    }     
    return arr;
  }

  const handleAddClick = (log) => {
    setData([...data, log]); //fix for firebase
    firebase.logs().push(log, () => {
      console.log("Log successfully tracked!")
    })
    setIsAdd(false);
  };
  const sortData = data => {
   const copy = [...data];
    return copy.sort((a, b) => b.id - a.id)
  }
  const sortedData = sortData(data);

  return (
    <div className="App">
      {!isAdd ? (
        <>
          <Header />
          {/* { isAdd ? "true" : "false"}  */}
          <ChartDisplay data={data} />
          <FilterDataBar isAdd={isAdd} setIsAdd={setIsAdd} />
          <TrackingLog data={sortedData} />
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
