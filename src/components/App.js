import React      from 'react';
import SongList   from './SongList';
import SongDetail from './SongDetail';

const App = props => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div className="ui segment">
                        <h1 className="ui header">Songs</h1>
                    </div>
                </div>
            </div>
            <div className="ui row">
                <div className="column eight wide">
                    <div className="ui segment">
                        <SongList />
                    </div>
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;