import React from "react";
import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  differenceInDays,
} from "date-fns";
const Task = ({ taskObj, onComplete }) => {
  const result = formatDistance(new Date(taskObj.deadline), new Date());
  const result1 = differenceInDays(new Date(taskObj.deadline), new Date());
  console.log(result1);
  let stil;
  if (result1 >= 3) {
    console.log("sa");
    stil = {
      color: "blue",
    };
  } else if (result1 >= 0 || result < 3) {
    stil = { color: "red" };
  } else {
    stil = { color: "green" };
  }
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <span style={stil}>
          {result1 >= 0 ? <p>{result}</p> : <p>{result1 * -1} days ago</p>}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
