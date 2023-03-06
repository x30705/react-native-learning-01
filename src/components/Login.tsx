export const Login = () => {

    // useState is similiar to the Redux concept
    // useful for managing elaborated states

  return (
    <>
        <h3>Login</h3>
        <div className="alert alert-info">
            Authenticating...
        </div>

        <div className="alert alert-danger">
            Failed Authentication...
        </div>

        <div className="alert alert-success">
            Successful Authentication...
        </div>

        <button className="btn btn-primary">
            Login
        </button>
        
        <button className="btn btn-danger">
            Logout
        </button>
    </>
  )
}
