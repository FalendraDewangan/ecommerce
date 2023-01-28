import '../css/Register.css'

const Register = () => {
  return (
    <div className="register">
        <div className="wrapper">
            <h1 className="title">CREATE AN ACCOUNT</h1>
            <form action="" className="form">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Password'/>
                <span className="agreement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perspiciatis vitae inventore alias eos nihil odit. Veniam minima iusto suscipit?
                </span>
                <button type="submit">Create</button>
            </form>
        </div>
    </div>
  )
}

export default Register
