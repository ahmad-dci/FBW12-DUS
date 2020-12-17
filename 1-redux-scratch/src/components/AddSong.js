import { Component, createRef } from 'react'

// import connect from react redux to connect the component to the main store
import {connect} from 'react-redux'

// import addsong action
import { addSong } from "../actions";

class AddSong extends Component {

    // declaring state in class component not neccassery to be inside the constructure even some developers 
    // prefer to add it inside the constructure
    warningRef = createRef()
    state = {
        songTitle: '',
        songDescription: ''
    }
    // onTitleChange = e => {
    //     this.setState({songTitle: e.target.value})
    // }
    // onDescriptionChange = e => {
    //     this.setState({songDescription: e.target.value})
    // }
    onAddSongClick = () => {
        if (this.state.songTitle.trim() !== '' && this.state.songDescription.trim() !== '') {
            // here you need to check if the song is already exist

            // get the song with the same title
            const foundSong = this.props.songs.find(song => song.title === this.state.songTitle)
            if(foundSong){
                // show warning message
                this.warningRef.current.classList.remove('d-none')
            } else {
                // hide warning message
                this.warningRef.current.classList.add('d-none')
                // save the song to main store list 
                this.props.addSong({
                    title: this.state.songTitle,
                    description: this.state.songDescription
                })
                this.setState({songTitle: '', songDescription: ''})
            }
            
        }
        
    }
    render() {
        console.log(this.state);
        return (
            <div className="col-md-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Song Title" 
                    value={this.state.songTitle} 
                    onChange={(e) => {this.setState({songTitle: e.target.value})}}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Song Description" 
                    value={this.state.songDescription} 
                    onChange={(e) => {this.setState({songDescription: e.target.value})}}
                    />
                </div>


                <div ref={this.warningRef} className="alert alert-danger d-none" role="alert">
                    A song with the same title is already exist
                </div>

                <button onClick={this.onAddSongClick}  className="btn btn-success " >ADD</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps, {addSong})(AddSong)