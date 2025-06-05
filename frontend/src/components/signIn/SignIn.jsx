import { useFetchData } from "../../dataFetch/useFetchData";

export const SignIn = () => {
  URL =
    "https://dashboard-blue-tau.vercel.app/?vercelToolbarCode=pxw1WNrQcivIn-B";

  const userSignIn = useFetchData(URL);

  return (
    <div className="container-sm">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />{" "}
          <label htmlFor="floatingInput">Email address</label>{" "}
        </div>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />{" "}
          <label htmlFor="floatingPassword">Password</label>
        </div>{" "}
        <div className="form-check text-start my-3">
          {" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />{" "}
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>{" "}
        </div>{" "}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign In
        </button>{" "}
      </form>
    </div>
  );
};
