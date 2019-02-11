import { combineReducers } from 'redux';

/**
 * Reducers
 */
const songsReducer = () => {
    return [
        { title: 'Speak Of Dreams', duration: '1:39' },
        { title: 'Crossroad Of Nowhere', duration: '4:06' },
        { title: 'Dream Her Way', duration: '3:41' },
        { title: 'Giving My Smile', duration: '8:05' },
        { title: 'Man Tales', duration: '5:55' },
        { title: 'Hard Life', duration: '3:12' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})