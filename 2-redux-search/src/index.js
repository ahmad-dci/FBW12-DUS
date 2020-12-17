import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css';


import reducers from './reducers'

import SearchBar from './components/SearchBar'
class App extends React.Component {
    render() {
        return(
            <div className="container">
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>, document.querySelector('#root'))