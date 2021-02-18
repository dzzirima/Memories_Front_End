import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import LockOutLinedIcon from "@material-ui/icons/LockOutlined"
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'



import useStyles from './styles'
import Input from './Input';
import Icon from './Icon'
import {signin,sighup} from '../../actions/auth'
const initialstate = {firstName:'',lastName:'',email: '',password1:'',confirmPassword:''};

const Auth = () => {
    const [ShowPassword, setShowPassword] = useState(false)
    const [formData,setFormData] =  useState(initialstate)

    const dispatch = useDispatch()
    const history = useHistory()
   
    const classes = useStyles();
    const handleSubmit = (e) =>{
        // the form will refresh giving us an unwanted behaviour 
        e.preventDefault()
        
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signup(formData,history))
        }
        
    };
    const handleChange = (e)=>{
        // this function is called by eachform input 
        // by pasig the event which triggered it we come to see that we get the things wgich ares specific to the input which changed
        setFormData({...formData,[e.target.name]:e.target.value})

    };

    // this function should be async baba otherwise fire will rain..
    const googleSuccess = async (res) =>{
        // optioanl chain operator  allowing not to throw an error if the object doesnt exits
        const result = res?.profileObj
        const token = res?.tokenId
        try {
            dispatch({type:'AUTH',data:{result,token}})
            // Go back to home page  and history belongs to react-router-dom
            history.push('/')
            
        } catch (error) {
            console.log(error)
            
        }

    }
    const googleFailure =(error) =>{
        console.log(Error)
        console.log("Google Sign was unSuccessfull")
    }


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const [isSignUp, setisSignUp] = useState(false)
    const switchMode = () =>{
        setisSignUp((prevIsSignup) =>!prevIsSignup)
    }

    return (
        <Container component = "main" maxWidth ="xs">
            <Paper className = {classes.paper} elevation = {3}>
                <Avatar className = {classes.avatar}>
                    <LockOutLinedIcon/>
                </Avatar>
                <Typography variant = "h5">{isSignUp ? 'sign Up':'Sign In'}</Typography>

                <form className = {classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        {
                            isSignUp && (
                            <>
                                <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
                                <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half/>
                            </>
                            )}
                        
                            <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email"/>
                            <Input name = "password1" label = "Password" handleChange = {handleChange} type = "password"/>
                            {/* something amis is goinon when toglinng the show password button  handle it manuaally */}
                            {/* <Input name = "password" label = "Password" handleChange = {handleChange} type = {ShowPassword ? "text":"password"} handleShowPassword = {handleShowPassword}> </Input>  */}
                                {isSignUp && <Input name = "confirmPassword" label = "confirmPassword" handleChange = {handleChange} type = "passord"/>}

                    </Grid>

                    <Button type = "submit" fullWidth variant="contained" color ="primary" className ={classes.submit}>
                        {/* //again we want to do conditionl rendering based on wethe the user is signed in or not */}
                        {isSignUp ? 'Sign Up' : 'Sign In'}

                    </Button>

                    {/* <GoogleLoggin
                    clientid ="259564290437-624d94lrvd1k2q95ueun7b0591i25pig.apps.googleusercontent.com"
                    render = {(renderProps) =>(
                        // <Button className = {classes.googleButton} color ="primary"  fullWidth onClick = {renderProps.onClick} disabled = {renderProps.disabled} startIcon ={<Icon />} variant = "contained">
                            //  Google SignIn
                        // </Button>
                        <Button> sign in</Button>
                    )}
                    onSuccess ={googleSuccess}
                    onFailure ={googleFailure}
                    cookiePolicy = "single_host_origin"


                    />*/}
                    <GoogleLogin 
                        clientId={'259564290437-624d94lrvd1k2q95ueun7b0591i25pig.apps.googleusercontent.com'}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                    >
                        
                        <Button type = "submit" fullWidth variant="contained" color ="primary" > Login with Google</Button>
                    </GoogleLogin>




                    <Grid container justify ="flex-end">
                        <Grid item>
                            <Button onClick = {switchMode}>
                                {/* depending whether we are loged in or not the button is gonna display tittle dynamically */}
                                
                                {isSignUp ?"Already have an account? Sign In":"Dont have an account ? Sign Up"}

                            </Button>

                        </Grid>

                    </Grid>

                </form>
            </Paper>

        </Container>
    )
}

export default Auth;
