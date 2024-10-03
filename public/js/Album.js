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
        //console.log(this.songs)
        // console.log(this.songs.filter(song => song.getPlay() === true))
        return this.songs.filter(song => song.getPlay() === true)
    }

    getSongByID(id){
        return this.songs.filter(song => song.getId(id) === id)
    }

    setAllFalse(){
        this.songs.forEach(song => {
            song.play = false;
        })
    }

    getIndexById(songId){
        return this.songs.findIndex(song => song.id == songId);
    }

    // setPlayTrue(songId) {
    //     let oldSongId = localStorage.getItem("songId"); // Get the previous song ID from localStorage
      
    //     // Find the index of the song with the specified ID
    //     console.log(songId)
    //     const index = this.songs.findIndex(song => song.id == songId);
    //     if (index === -1) {
    //       console.error("Song not found");
    //       return;
    //     }
      
    //     let playedSong = this.songs[index];
      
    //     if (oldSongId != null && oldSongId == songId) {
    //         console.log(songId,oldSongId)
    //       playedSong.play = !playedSong.play;
    //       //console.log("Toggled Play State for:", playedSong);
    //       return this.getSongByID(songId); // Assuming getSongByID returns the song with the given ID
    //     } else {
    //       this.setAllFalse();
    //       playedSong.play = true; // Play the current song
      
    //       localStorage.setItem("songId", songId); // Update localStorage with the current song ID
    //       //console.log("Playing Song:", playedSong);
    //       return this.getPlaySong(); // Assuming getPlaySong returns the currently playing song
    //     }
    //   }


      playSong(songId){
        console.log("play" ,songId)
        
        this.songs[this.getIndexById(songId)].play = true
        localStorage.setItem("songId",songId)
        
      }

      pauseSong(songId){
        console.log("pause",songId)
        
        this.songs[this.getIndexById(songId)].play = false
        localStorage.setItem("songId",songId)
      }
      
}