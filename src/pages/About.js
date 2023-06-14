import React, { Component } from 'react';
import "./About.css";
import cody from "/Users/jacicotaquispe/to-do-list_week1-jaci-cotaquispe/src//assets/cody.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
            <div className="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  src = "cody.jpg"
                  alt ="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title"> Jaci Cotaquispe </div>
                <div className="brief_description">
                  // Details about you goes here
                </div>
              </div>
            </div>
  </div> 
      </div>
    )
  }
}