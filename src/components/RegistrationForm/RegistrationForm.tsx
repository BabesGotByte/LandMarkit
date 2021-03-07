import React, {useState} from 'react';
function RegistrationForm(props: any) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmpassword : ""
    })
    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            // axios.post(API_BASE_URL+'/user/register', payload)
            //     .then(function (response) {
            //         if(response.status === 200){
            //             setState(prevState => ({
            //                 ...prevState,
            //                 'successMessage' : 'Registration successful. Redirecting to home page..'
            //             }))
            //             redirectToHome();
            //             props.showError(null)
            //         } else{
            //             props.showError("Some error ocurred");
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const handleSubmitClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(state.password === state.confirmpassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
             
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword2">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                            value={state.confirmpassword}
                            onChange={handleChange} 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}>
                        Register
                    </button>
                </form>
            </div>
        )
}
export default RegistrationForm;