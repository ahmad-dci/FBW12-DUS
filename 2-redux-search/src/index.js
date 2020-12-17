import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


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

ReactDOM.render(<App />, document.querySelector('#root'))