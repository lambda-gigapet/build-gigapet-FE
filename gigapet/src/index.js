import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker'
import App from './App'
import rootReducer from './ReduxState/reducers'
import './index.css'

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c9da6'
    }
  },
  typography: {
    useNextVariants: true
  }
})

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={MuiTheme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
