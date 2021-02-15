import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import LockOutLinedIcon from "@material-ui/icons/LockOutlined"


import useStyles from './styles'
import Input from './Input';

const Auth = () => {
    const [ShowPassword, setShowPassword] = useState(false)
   
    const classes = useStyles();
    const handleSubmit = () =>{};
    const handleChange = ()=>{};
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
