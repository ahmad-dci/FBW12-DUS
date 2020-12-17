import {Component} from 'react'

// import connect from redux to connect this component to the main store
import {connect} from 'react-redux'

class SongDetails extends Component{
    render() {
        console.log(this.props);
        if (this.props.selectedSong) {
            return(
                <div className="col-md-6">
                    <h3>Song Detail</h3>
                    <p>Song Title: {this.props.selectedSong.song.title} </p>
                    <p>Song Description: {this.props.selectedSong.song.description}</p>
                </div>
            )
        } else {
            return (
                <div className="col-md-6">
                    <h3>no song is selected</h3>
                    
                </div>
            )
        }
        
    }
}


const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails)