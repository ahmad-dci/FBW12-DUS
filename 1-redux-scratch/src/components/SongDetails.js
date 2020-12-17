import { Component, createRef } from 'react'

// import connect from redux to connect this component to the main store
import { connect } from 'react-redux'

// import editSong action
import { editSong, selectSong } from "../actions";

class SongDetails extends Component {
    state = {
        songDescription: ''
    }

    onSaveBtnClick = () => {
        const savedSong = {
            title: this.props.selectedSong.song.title,
            description: this.state.songDescription
        }
        this.props.editSong(savedSong)
        // reset the state to make the input empty after saving
        this.setState({
            songDescription: ''
        })
        this.props.selectSong({
            song: savedSong,
            edit: false
        })
    }
    
    editOnChange = e => {
        this.setState({
            songDescription: e.target.value
        })
    }
    render() {
        console.log(this.props);
        if (this.props.selectedSong) {
            if (this.props.selectedSong.edit) {
                // I need to show the song to be edited

                return (
                    <div className="col-md-6">
                        <h3>Song Detail</h3>
                        <p>Song Title: {this.props.selectedSong.song.title} </p>
                        <p>
                            <div className="input-group mb-3">
                                <label className="input-group-text">Song Description:</label>
                                <input  
                                type="text" 
                                className="form-control" 
                                placeholder="Song Description" 
                                onChange={this.editOnChange} 
                                value={this.state.songDescription}  
                                />
                                <div className="input-group-append">
                                    <button onClick={this.onSaveBtnClick} className="btn btn-outline-secondary" type="button">Save</button>
                                </div>
                            </div>
                        </p>
                    </div>
                )

            } else {
                // show the song only
                return (
                    <div className="col-md-6">
                        <h3>Song Detail</h3>
                        <p>Song Title: {this.props.selectedSong.song.title} </p>
                        <p>Song Description: {this.props.selectedSong.song.description}</p>
                    </div>
                )
            }

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

export default connect(mapStateToProps, {editSong, selectSong})(SongDetails)