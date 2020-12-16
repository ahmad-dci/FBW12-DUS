import { Component } from 'react'

// import connect from react redux to connect the component to the main store
import {connect} from 'react-redux'

// import addsong action
import { addSong } from "../actions";

class AddSong extends Component {

    // declaring state in class component not neccassery to be inside the constructure even some developers 
    // prefer to add it inside the constructure
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
        if (this.state.songTitle !== '' && this.state.songDescription !== '') {
            this.props.addSong({
                title: this.state.songTitle,
                description: this.state.description
            })
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
                <button onClick={this.onAddSongClick}  className="btn btn-success" >ADD</button>

            </div>
        )
    }
}

export default connect(null, {addSong})(AddSong)