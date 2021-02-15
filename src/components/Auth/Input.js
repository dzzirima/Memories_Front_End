import React from 'react'

import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import {Visibility} from '@material-ui/icons/Visibility'
import {VisiblityOff} from '@material-ui/icons/VisibilityOff'


// doing this allows us to create a custimised inputs using props we cna control how it looks 
// we onlly pass the props of things that we want to be  dynamic


const Input = ({name,handleChange,label,half,autoFocus,type,handleShowPassword}) => (
        <Grid item xs ={12} sm ={half ? 6:12}>
            <TextField 
                name = {name}
                onChange = {handleChange}
                variant ="outlined"
                required
                fullWidth
                label ={label}
                autoFocus ={autoFocus}
                type = {type}
                InputProps = {name === 'password' ?{
                    endAdornment:(
                        <InputAdornment position = "end">
                            <IconButton onClick = {handleShowPassword}>
                                {type === 'password'?<Visibility/>:<VisiblityOff/>}

                            </IconButton>
                        </InputAdornment>
                    )
                }:null}
            
            />


        </Grid>
    )

export default Input
