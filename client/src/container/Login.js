import React, { useState } from "react";
import useForm from "./../Hooks/useForm";
import validate from "./../Helper/LoginFormValidationRules";
import { Redirect } from "react-router-dom";
import { fetchAxios } from './../Hooks/AxiosInter';
const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  async function login() {
    const apiDetails = {
      method: 'POST',
      url: 'user/isLoggedIn',
      headers: null,
      data: { empId: '14' },
    }
    const { response, error, loading } = await fetchAxios(apiDetails);
    //console.log(response)
    if (response && response.status === 200 && response.data.data) {
      setLoggedIn(true);
      props.parentCallback(true);
      return <Redirect to="/default" />;
    }

  }
  //console.log(loggedIn, "loggedIn")
  return (
    <div className="section is-fullheight">
      {loggedIn && <Redirect to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="login-page">
            <div className=" form-wrap">

              <form onSubmit={handleSubmit} noValidate id="survey-form">
                <div className="col-md-12 page-header" style={{ margin: '0', position: 'relative', top: '-30px' }}>
                  <h2 className="page-title">Troubles Logger</h2>
                </div>
                <div className='row'>

                  <div className={`col-md-12 ${errors.email ? "is-danger" : ''}`} >
                    <div className="form-group">
                      <label id="name-label" htmlFor="customerID">Email Address</label>
                      <input
                        onChange={handleChange}
                        value={values.email || ""} type="email" name="email" id="customerID" placeholder="Enter Customer Id" className="form-control" required />
                    </div>
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className={`col-md-12 ${errors.password && "is-danger"}`} >
                    <div className="form-group">
                      <label id="name-label" htmlFor="customerID">Password</label>
                      <input onChange={handleChange} value={values.password || ""}
                        type="password" name="password" id="customerID" placeholder="Enter Customer Id" className="form-control" required />
                    </div>
                    {errors.password && (
                      <p className="help is-danger">{errors.password}</p>
                    )}
                  </div>
                </div>


                {/* <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Leave Message</label>
                                <textarea id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
                            </div>
                        </div>
                    </div> */}

                <div className="row">
                  <div className="col-md-4">
                    <button type="submit" id="submit" className="btn btn-primary btn-block">Submit</button>
                  </div>
                </div>

              </form>
            </div>
            {/* <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
