interface AudioPlayer{
    audioVolumen:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details {
    author:string;
    year:number;
}
 


const autoPlayer: AudioPlayer={
    audioVolumen: 90,
    songDuration: 36,
    song:"Mes" ,
    details: {
        author:"Briant Maldonado Macias",
        year:2015
    }
}


const song ="New Song";

const {song:anotherSong,songDuration,details} =autoPlayer;
const{author}=details

console.log("Author",author)
console.log("Song",anotherSong)
console.log("Duracion",songDuration)

export{}