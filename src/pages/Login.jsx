import "./Login.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import instance from "../utils/api";
import { URLS } from "../constants";
import { useState } from "react";
import { setToken } from "../utils/session";
import Notify from "../components/Notify";

export const Login = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setIsDisabled(true);
      e.preventDefault();
      const result = await instance.Post(URLS.LOGIN, payload);
      if (result.data.data) {
        //store that token in the client LS
        setToken(result.data.data);
        //show the mssg user successfully logged in
        setMsg("User successfully registered");
        //send user to admin blogs section
        setTimeout(() => {
          navigate("/admin/blogs");
        }, 1500);
      }
    } catch (e) {
      const err = e?.response?.data?.msg || "something went wrong";
      setError("err");
    } finally {
      setIsDisabled(false);
      setPayload({ email: "", password: "" });
      setTimeout(() => {
        setError("");
        setMsg("");
      }, 3000);
    }
  };

  return (
    <div className=" base d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-sm-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="row d-flex justify-content-center align-items-center">
              <img src={Logo} style={{ maxWidth: "75px" }} />

              <h2 className="text-center mt-2">Login</h2>
              {(msg || error) && (
                <Notify type={msg ? "success" : "danger"} msg={msg || error} />
              )}
              <form className="mb-3" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    autoComplete="email"
                    value={payload.email}
                    onChange={(e) => {
                      setPayload((prev) => {
                        return { ...prev, email: e.target.value };
                      });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label to="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    autoComplete="current-password"
                  />
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isDisabled}
                  >
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
