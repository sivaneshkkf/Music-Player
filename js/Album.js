class Albums {
    constructor(){
        this.songs=[]
    }

    pushSong(song){
        this.songs.push(song)
    }

    getallSong(){
        return this.songs
    }

    getAlbumSongs(albumName){
        return this.songs.filter(song => song.album === albumName)
    }

    getPlaySong(){
        return this.songs.filter(song => song.play === true)
    }

    setAllFalse(){
        this.songs.forEach(song => {
            song.play = false;
        })
    }

    setPlayTrue(id){
        this.setAllFalse();
    // Find the index of the song with the specified id
        const index = this.songs.findIndex(song => song.id == id);
    
        if (index !== -1) {
            this.songs[index].play = true;
            return this.getPlaySong();
            
        } else {
            console.log(`Song with id ${id} not found`);
        }
    }
}