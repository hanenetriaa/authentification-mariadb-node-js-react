/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";
import { accountService } from "@/_services";

function Details({ match }) {
  const { path } = match;
  const user = accountService.userValue;

  return (
    <div className="body">
      <div className="card">
        <div className="container1">
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="profile-img"
          />
          <h2>
            {user.title} {user.firstName} {user.lastName}
          </h2>
          <small>{user.email}</small>
          <div className="bar">
            <button className="btn">
              <i className="fas fa-pen" />
              <span>
                <Link to={`${path}/update`}>Edit Profile</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Details };
