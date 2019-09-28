import React from 'react';
import './BackButton.css';
import { Link } from 'react-router-dom';

const BackHomeButton = (props) => {
  const platformClass = props.platform === "mobile" ? "back-mobile" : "back-desk";
  return (
    <Link to="/" className={platformClass}>
      <div className="ui animated button" tabIndex="0">
        <div className="visible content">Home</div>
          <div className="hidden content">
            <i className="left arrow icon"></i>
          </div>
      </div>
    </Link>
 );
}


export default BackHomeButton;