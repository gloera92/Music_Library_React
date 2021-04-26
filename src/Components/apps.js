import React, {Component} from 'react';
import axios from 'axios';
import Song from './songs';
import SongTable from './songTable';
import AddNewSong from './addSong';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
       
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
                deleteSongs={(id) => this.deleteSongs(id)}          
            />,
        );
    }

    async deleteSongs(id){
        await axios.delete('http://127.0.0.1:8000/music/'+id+'/');
        this.getAllSongs()  
    }

    printName = (name) => {
        console.log(name)
    }

    async addNewSong(song){
        await axios.post('http://127.0.0.1:8000/music/', song);
        this.getAllSongs()  
    }

  
     
    render(){
        console.log("this.state", this.state);
        return(
            <div>
                <SongTable songs={this.getAllSongs.bind(this)} song={() => this.getAllSongs()} mapSongs={() => this.mapSongs()} printName={(name) => this.printName(name)} name="george" />
                <AddNewSong addNewSong={this.addNewSong.bind(this)} />
            </div>
        );
    }
}


export default App;