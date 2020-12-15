import React from 'react'
import ReactDOM from 'react-dom'

// redux dependencies
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// import reducers, it is not a component
import reducers from './reducers'


// import songslist component
import SongsList from './components/SongsList'

// import songDetails component
import SongDetails from './components/SongDetails'

class App extends React.Component{
    render() {
        return( <div className="row">
            {/* Hello Redux */}
            <SongsList />
            <SongDetails />
            {/* <AddSong /> */}
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.querySelector('#root'))

