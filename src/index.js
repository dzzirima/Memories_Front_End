// this is the file we are goin to connet the react app to the html file

import reactDom from 'react-dom'

import {Provider} from 'react-redux'
import{createStore,applyMiddleware,compose} from 'redux'
import  thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const store = createStore(reducers,compose(applyMiddleware(thunk)))

reactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>,
 document.getElementById('root'));