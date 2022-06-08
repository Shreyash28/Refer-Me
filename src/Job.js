import React from "react";
import "./Job.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

function Job({ id, company, designation, location, min_experience, skills }) {
  return (
    <div className="job_description" id={id}>
      <div className="job_header">
        <div className="job_title">
          <h4> {designation}</h4>
        </div>
        <div className="job_company">
          <p className="job_company">{company}</p>
        </div>
        <div className="job_info">
          <div className="job_location">
            <LocationOnIcon className="job_location_icon" />
            <p className="job_location_info">{location}</p>
          </div>
          <div className="job_min_experience">
            <WorkIcon className="job_min_experience_icon" />
            <p className="job_min_experience_info">{min_experience}yrs</p>
          </div>
        </div>
      </div>

      <div className="job_skills">
          <p>Skills Required:</p>
        <ul className="job_skills_list">{skills && skills.map((skill) => <li>{skill}</li>)}</ul>
      </div>
    </div>
  );
}

export default Job;
