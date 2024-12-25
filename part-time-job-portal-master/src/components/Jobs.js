import React from "react";
import { Link } from "react-router-dom";
import './Jobs.css'; // Import CSS for styling

function Jobs(props) {
  return (
    <div className="main">
      <Link to={`/job/${props.id}`}>
        <div className="job-card">
          <img src={props.image} alt={props.title} />
          <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Jobs;
