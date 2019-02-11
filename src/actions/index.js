/**
 * Action creator to select a song from a list
 * @param {*} song 
 */
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};