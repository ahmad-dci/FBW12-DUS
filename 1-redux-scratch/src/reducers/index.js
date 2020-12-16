import {combineReducers} from 'redux'

let songsList = [
    {title: '1973', description: 'song by James Blunt'},
    {title: 'Girl Like You', description: 'song by Maroon 5'},
    {title: 'Hello', description: 'song by  Adel'}
]

const songsReducer = (songs = songsList, action) => {
    
    if(action.type === 'ADD_SONG') {
        songsList.push(action.payload)
        return [...songsList]
    } 

    return songs;
    


    
}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}



export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})