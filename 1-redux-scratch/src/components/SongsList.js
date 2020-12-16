import {Component} from 'react'

//import dependencies to connect the component to the main store
import {connect} from 'react-redux'
// import selectSong from the actions so we can change the selected song
import {selectSong, deleteSong} from '../actions'
class SongsList extends Component{
    btnSelectClick = (song) => {
        // call the action as prop so it will change the main store value
        this.props.selectSong(song)
    }
    btnDeleteClick = (song) => {
        this.props.deleteSong(song)
    }
    render() {
        console.log('show songlist props', this.props);
        const songsItems = this.props.songs.map((song, idx) => {
            return (
            <li key={idx} className="list-group-item">{song.title} 
            
            <button onClick={() => {this.btnSelectClick(song)} } className="btn btn-primary float-right">Show</button>
            <button onClick={() => {this.btnDeleteClick(song)} } className="btn btn-danger float-right mr-3">Delete</button>
            </li>
            )
        })
        return(
            <div className="col-md-6">
                <ul className="list-group">
                    {songsItems}
                </ul>
            </div>
        )
    }
}
// convert data from main store to props
const mapStateToProps = (state) => {
    return ({
        songs: state.songs
    })
}
export default  connect(mapStateToProps, {selectSong, deleteSong})(SongsList)  