import React, {Component} from 'react';
import axios from 'axios';
import Song from './songs';
import SongTable from './songTable';
import DeleteSong from './deleteSong';

class App extends Component {
    state = {
        songs: []
    }


    componentDidMount(){
        console.log("component did mount");
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
        console.log("get songs")
    }

    mapSongs(){
        return this.state.songs.map(song =>
        <Song
            key={song.id}
            song={song}
            />
        );
    }

    async deleteSong(id){
        let response = axios.delete('http://127.0.0.1:8000/music/'+id+'/');
        this.setState({
            songs: response.data
        });
    }
  
    render(){
        console.log("this.state", this.state);
        return(
            <div>
                <SongTable mapSongs={() => this.mapSongs()}/>
                <DeleteSong deleteSong={this.deleteSong.bind(this)} />
            </div>
        );
    }
}


export default App;