import React, { useState, useEffect } from "react";
import "./Person.css";
function Person() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://refertest.pythonanywhere.com/user/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        // console.log(actualData);
        setDetails(actualData.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setDetails(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="personal_details">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="person_detail" id={details && details.id}>
        <img src={details && details.pictureUrl}></img>
        <p className="person_name">{details && details.name}</p>
        <p className="person_college">{details && details.college}</p>
      </div>
    </div>
  );
}

export default Person;
