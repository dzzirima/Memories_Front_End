// this is the file we are goin to connet the react app to the html file
import react from 'react'
import reactDom from 'react-dom'

import App from './App'

reactDom.render(<App />, document.getElementById('root'));