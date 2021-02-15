import React,{useState,useEffect} from 'react'
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './Styles'
import memories from '../../images/memories.png'


const Navbar = () => {
    const classes = useStyles()
    //gettig the user profile
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)



    return (
        <AppBar className = {classes.appBar} position ="static" color = "inherit">
            <div className ={classes.brandContainer}>
                <Typography component = {Link} to = "/" className = {classes.heading} variant = "h2" align ="center">Our Memories</Typography>
                <img   className ={classes.image} src ={memories} alt = "memories" height ="60"/>

            </div>
            <Toolbar className = {classes.toolbar}>
                {/* // conditional rendering based on if the user is logged in or not .......
                // sow something if the user is logged in or not */}
                {user?(
                    <div className = {classes.profile}>
                        <Avatar className = {classes.purple} alt = {user.result.name} src = {user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className = {classes.userName} variant = "h6">{user.result.name}</Typography>
                        <Button variant ="contained" className = {classes.logout} color = "secondary">Logout</Button>
                    </div>

                ):(
                    // this is show when you are logged in 
                    <Button component ={Link} to ="./auth" variant = "contained" color ="primary"> Sign In</Button>
                    
                )}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
