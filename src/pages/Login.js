import '../css/Login.css'

const SignIn = () => {
  return (
    <div className="login">
        <div className="wrapper">
            <h1 className="title">SIGN IN</h1>
            <form action="" className="form">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button type="submit">LOGIN</button>
                <a href="/">Forgot Password</a>
                <a href="/">Create New Account</a>
            </form>
        </div>
    </div>
  )
}

export default SignIn
