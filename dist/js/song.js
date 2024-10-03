class Song {
    constructor(id,name, artist, album,img,movieName,duration){
        this.id = id
        this.name = name
        this.artist = artist
        this.album = album
        this.img = img
        this.movieName = movieName
        this.duration =duration
        this. play = false
        this. selected = false
    }

    playsong(){
        this.play = true;

        // if(this.play){
        //     this.play = false;
        // }else{
        //     this.play = true;
        // }
    
    }

    pauseSong(){
        this.play =false
    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }

    getArtist(){
        return this.artist
    }

    getAlbum(){
        return this.album
    }

    getImg(){
        return this.img
    }

    getMovieName(){
        return this.movieName
    }

    getDuration(){
        return this.duration
    }

    getPlay(){
        return this.play
    }

    getSelected(){
        return this.selected
    }

    setSelected(state){
        this.selected = state
    }
}