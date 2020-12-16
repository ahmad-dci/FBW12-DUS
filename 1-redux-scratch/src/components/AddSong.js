import { Component } from 'react'

// import connect from react redux to connect the component to the main store
import {connect} from 'react-redux'

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
                <button className="btn btn-success" >ADD</button>

            </div>
        )
    }
}

export default connect(null)(AddSong)