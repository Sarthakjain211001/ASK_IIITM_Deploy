import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="container rounded bg-white mt-5 fontlink">
        <div className="row bg-light p-5 mb-5">
          <div
            className="col-md-5 border-right"
            style={{ marginRight: "10rem" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Personal Details</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="last name"
                />
              </div>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter phone number"
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Email ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter email id"
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter address"
              />
            </div>
            <br />
            <div className="row ">
              <div className="col-md-6">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="state"
                />
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-5 border-right">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Professional Details</h4>
            </div>

            <div className="col-md-12">
              <label className="labels">Current position</label>
              <textarea
                className="form-control"
                id="yourComment"
                rows="3"
                placeholder="example: SDE at Amazon(2017-present)"
              ></textarea>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Previous Work Experience</label>
              <textarea
                className="form-control"
                id="yourComment"
                rows="3"
                placeholder="example: SDE at TCS(2015-2016)"
              ></textarea>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Educational details</label>
              <textarea
                className="form-control"
                id="yourComment"
                rows="3"
                placeholder="enter your education details"
              ></textarea>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Skills</label>
              <textarea
                className="form-control"
                id="yourComment"
                rows="3"
                placeholder="enter your skills"
              ></textarea>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Achievements/Accomplishments</label>
              <textarea
                className="form-control"
                id="yourComment"
                rows="3"
                placeholder="enter your achievements"
              ></textarea>
            </div>
            <br />
          </div>
          <br />
          <div className="text-center mb-2">
            <button className="btn btn-primary profile-button" type="button">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
