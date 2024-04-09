const team = [
  {
    firstName: "Astrid",
    surname: "Zelaya",
    age: 26,
    city: "Bergamo",
    hobby: "Learning new languages",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Genshin Impact",
    favoriteFilm: "About Time",
    favoriteBook: "Pet Sematary",
    petName: "Yuki Tsunoda",
  },
  {
    firstName: "Vittoria",
    surname: "Tchotche",
    age: "26",
    city: "Cremona",
    hobby: "Play piano",
    favoriteFood: "Panino",
    favoriteVideoGame: "Scacchi",
    favoriteFilm: "ApocalypseNow",
    favoriteBook: "Bible",
    petName: "",
  },
];

const game = team.filter(gioco => gioco.favoriteVideoGame === "LOL" || gioco.favoriteVideoGame === "League of Legends");
console.log(game);
 
 

 