import React, { useState, useEffect } from "react";
import Job from "./Job";

function Jobs() {
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/job/openings")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        // console.log(actualData.data);
        setVacancy(actualData.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setVacancy(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="jobs">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {vacancy &&
        vacancy.map(
          ({ id, company, designation, location, min_experience, skills }) => (
            <Job
              id={id}
              designation={designation}
              company={company}
              location={location}
              min_experience={min_experience}
              skills={skills}
            />
          )
        )}
      {/* <ul>
        {vacancy &&
          vacancy.map(({ id, company, designation }) => (
            <li key={id}>{company}</li>
          ))}
      </ul>
      <ul>
        {vacancy &&
          vacancy.map(({ id, designation }) => <li key={id}>{designation}</li>)}
      </ul> */}
    </div>
  );
}

export default Jobs;
