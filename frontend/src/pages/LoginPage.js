import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = (props) => {
  let {loginUser} = useContext(AuthContext)
  const pageTitle = 'Login';

  return (
    <div class="row w-100 m-0">
          <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div class="card col-lg-4 mx-auto">
              <div class="card-body px-5 py-5">
                <h2 class="text-left mb-3">Login</h2>

                <form onSubmit={loginUser}>
                  <div class="form-group">
                    <label>Username *</label>
                    <input type="text" name="username" class="form-control p_input" />
                  </div>
                  <div class="form-group">
                    <label>Password *</label>
                    <input type="password" name="password" class="form-control p_input" />
                  </div>
                  <div class="text-center my-4">
                    <button type="submit" class="btn btn-primary btn-block enter-btn">Login</button>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-facebook mr-2 col">
                      <i class="mdi mdi-facebook"></i> Facebook </button>
                    <button class="btn btn-google col">
                      <i class="mdi mdi-google-plus"></i> Google plus </button>
                  </div>
                  <p class="sign-up my-2">Don't have an Account?<a href="#"> Sign Up</a></p>
                </form>

              </div>
            </div>
          </div>
        </div>
  )
}

export default LoginPage
