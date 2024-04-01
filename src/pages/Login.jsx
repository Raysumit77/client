import "./Login.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div class=" base d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-sm-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="row d-flex justify-content-center align-items-center">
              <img src={Logo} style={{ maxWidth: "75px" }} />

              <h2 className="text-center mt-2">Login</h2>
              <form className="mb-3">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input className="form-control" autoComplete="email"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" autoComplete="current-password"/>
                </div>
                <div className="mb-3">
                  <div className="mb-3I d-flex flex-row-reverse">
                    <Link
                      to="/Forget Password"
                      className="text-decoration-none"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>
                <div className="d-grid col-6 mx-auto">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-center">
                <Link to="/register" className="text-decoration-none">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
