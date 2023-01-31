import { AxiosResponse } from "axios";
import { FormEvent, useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppLoodingContext } from "../../components/app-loading/app_loading";
import Breadcrumb, {
  BreadcrumbItemType,
} from "../../components/breadcrumb/breadcrumb";
import useApi from "../../hooks/useApi";
import { setToken } from "../../redux/authSlice";

export default function LoginPage() {
  const breadcrumbItems: BreadcrumbItemType[] = [
    { title: "Home", url: "/" },
    { title: "Login" },
  ];
  const appLoadingContextData = useContext(AppLoodingContext);

  const api = useApi();
  const dispatch = useDispatch();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formValues: any = Object.fromEntries(formData.entries());
    console.log(">>>FORM VALUE", formValues);

    appLoadingContextData.setLoading(true);

    api
      .post("/shop/authentication-token", formValues)
      .then((response: AxiosResponse<any>) => {
        console.log(">>>AUTH RESP", response);
        dispatch(setToken(response.data.token));

        setTimeout(() => {
          document.location.href = "/";
        }, 5);
        appLoadingContextData.setLoading(false);
      });
  }

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
                    <form onSubmit={onSubmit}>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          />
                          <div className="login-input">
                            <input
                              name="email"
                              type="text"
                              className="form-control"
                              placeholder="Enter your email"
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
                          <label className="control-label sr-only" />
                          <div className="login-input">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="Password"
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
                        <button
                          type={"submit"}
                          className="btn btn-primary btn-block mb10"
                        >
                          Login
                        </button>
                        <div>
                          <p>
                            Need an account ?{" "}
                            <Link to={"/auth/register"}>Register</Link>
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
