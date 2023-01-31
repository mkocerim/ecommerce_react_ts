import { Link } from "react-router-dom";
import Breadcrumb, {
  BreadcrumbItemType,
} from "../../components/breadcrumb/breadcrumb";

export default function RegisterPage() {
  const breadcrumbItems: BreadcrumbItemType[] = [
    { title: "Home", url: "/" },
    { title: "Register" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* login-form */}
      <div className="content">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Login</h3>
                    </div>
                    {/* form */}
                    <form>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="lastname"
                          />
                          <div className="login-input">
                            <input
                              name="lastName"
                              type="text"
                              className="form-control"
                              placeholder="Lastname"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-user" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="firstName"
                          />
                          <div className="login-input">
                            <input
                              name="firstName"
                              type="text"
                              className="form-control"
                              placeholder="Firstname"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-user" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          />
                          <div className="login-input">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              placeholder="Enter your email"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-envelope" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only" />
                          <div className="login-input">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="******"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-lock" />
                            </div>
                            <div className="eye-icon">
                              <i className="fa fa-eye" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
                        <button className="btn btn-primary btn-block mb10">
                          Register
                        </button>
                        <div>
                          <p>
                            Do you have an account?{" "}
                            <Link to={"/auth/login"}>Login</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <h4 className="mb20">Login With</h4>
                      <div className="social-media">
                        <a
                          href="#"
                          className="btn-social-rectangle btn-facebook"
                        >
                          <i className="fa fa-facebook" />
                          <span className="social-text">Facebook</span>
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-twitter"
                        >
                          <i className="fa fa-twitter" />
                          <span className="social-text">Twitter</span>{" "}
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-googleplus"
                        >
                          <i className="fa fa-google-plus" />
                          <span className="social-text">Google Plus</span>
                        </a>
                      </div>
                    </div>
                    {/* /.form */}
                  </div>
                </div>
              </div>
              {/* features */}
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="../assets/images/feature_icon_1.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Loyalty Points</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="../assets/images/feature_icon_2.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Instant Checkout</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="../assets/images/feature_icon_3.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Exculsive Offers</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.features */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
