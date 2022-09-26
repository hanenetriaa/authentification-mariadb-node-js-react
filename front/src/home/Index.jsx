/** @format */

import React from "react";
import { accountService } from "@/_services";
import "./styles.less";
function Home() {
  const user = accountService.userValue;

  return (
    <section className="landing-page">
      <div className="container">
        <div className="content">
          <div className="text-cont">
            <h1 className="header">
              <span className="first-clr">Hello</span>
              <br />
              <span className="first-clr">Bienvenu sur la page de</span>{" "}
              {user.firstName}{" "}
              <span>
                <br />
              </span>
              {user.lastName}
            </h1>
            <p className="description">Application Auth</p>
          </div>
          <div className="img-cont">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Home };
