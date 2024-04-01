import React from "react";

export const Register = () => {
  return (
    <div className="  d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-sm-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="row d-flex justify-content-center align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Blogger_icon_2017.svg/2048px-Blogger_icon_2017.svg.png"
                style={{ maxWidth: " 75px" }}
              />

              <h2 className="text-center mt-2">Register</h2>
              <form className="mb-3">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    className="form-control"
                    placeholder="sumitray45@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">pictureUrl</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <div className="d-grid col-6 mx-auto">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-center">
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
