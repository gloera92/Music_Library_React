import React from 'react';
import Song from './songs';

function DeleteSong(props){
    return(
        <div> 
            <Song song={props} /> 
            <button onClick={() => props.deleteSong()}> Delete Song</button>
        </div>
    )
}

export default DeleteSong;