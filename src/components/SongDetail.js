import React       from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    
    if (!selectedSong) {
        return <div>Select the song</div>
    }
    
    return (
        <div>
            <h3>Details for:</h3>
            <p><strong>Title:</strong> {selectedSong.title}</p>
            <p><strong>Duration:</strong> {selectedSong.duration}</p>
        </div>
    )
};

const mapStatetoProps = state => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStatetoProps)(SongDetail);

