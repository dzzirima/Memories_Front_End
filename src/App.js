import React from 'react'
import {Container} from '@material-ui/core'


import {BrowserRouter,Switch,Route} from 'react-router-dom' // these we need them for routing the applictaion
// when dealing with routing everything should be wrapped  inside the BroswerRouter
//N.B : The navabr is outside the switch hence its gonna always show ...

import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'


const App = () =>{



    return(
        <BrowserRouter>
            <Container maxidth = "lg"  >
                <Navbar/>
                <Switch>
                    <Route path ="/" exact component = {Home}/>
                    <Route path ="/auth" exact component = {Auth}/>
                </Switch>
            </Container>
       </BrowserRouter>
    );
}

export  default App