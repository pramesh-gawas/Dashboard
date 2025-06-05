export const LogIn = () => {
  return (
    <div className="container-sm">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>{" "}
        <div class="form-floating">
          {" "}
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />{" "}
          <label for="floatingInput">Email address</label>{" "}
        </div>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />{" "}
          <label for="floatingPassword">Password</label>
        </div>{" "}
        <div className="form-check text-start my-3">
          {" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />{" "}
          <label className="form-check-label" for="checkDefault">
            Remember me
          </label>{" "}
        </div>{" "}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Log In
        </button>{" "}
      </form>
    </div>
  );
};
