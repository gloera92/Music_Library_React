import React from 'react';



const SongTable = (props) => {
    console.log(props)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>                  
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
                
                
                
                 
            </thead>           
           {props.mapSongs()}
        </table>
    );
}

export default SongTable;