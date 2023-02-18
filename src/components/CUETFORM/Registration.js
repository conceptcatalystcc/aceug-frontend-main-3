import { range } from "mathjs";
import React from "react";
import { Form } from "react-bootstrap";

const Registration = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row mt-25">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <center>
                <b className="text-bold">Registration Form</b>
                <hr />
              </center>
              <h5 className="text-muted">Personal Details</h5>
              <hr />
              <form>
                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>
                        Candidate's Name (As per class X or Equivalent
                        Certificate)
                      </b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Father's Name</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Mother's Name</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Guardian's Name</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Candidate's Date of Birth</b>
                    </h6>
                  </div>
                  <div className="col-sm-2">
                    <select className="form-input">
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Gender</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Nationality</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Identity Type</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>

                <div className="row mt-25">
                  <div className="col-sm-4">
                    <h6>
                      <b>Valid Identification Number</b>
                    </h6>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
