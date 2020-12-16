import React from 'react'
import ReactDOM from 'react-dom'

// redux dependencies
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import reducers, it is not a component
import reducers from './reducers'


// import songslist component
import SongsList from './components/SongsList'

// import songDetails component
import SongDetails from './components/SongDetails'

// import AddSong component
import AddSong from "./components/AddSong";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* Hello Redux */}
                    <SongsList />
                    <SongDetails />
                    <AddSong />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'))

