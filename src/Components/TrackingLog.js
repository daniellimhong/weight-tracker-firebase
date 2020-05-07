import React from "react";
import Log from "./Log";

const TrackingLog = (props) => {
  const { data } = props;

  let mappedLogs = data.map((log) => {
    //! Add sort by date, most recent or latest ID assuming the date is most recent
    return (
      <Log
        key={`Date: ${log.date} & ID: ${log.id}`}
        props={{
          date: log.date,
          weight: log.weight,
          calories: log.calories,
          activity: log.activity,
          description: log.description,
        }}
      />
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tracking Log</h2>
      {mappedLogs}
    </div>
  );
};
export default TrackingLog;
