
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

team.sort((a, b) => a.age - b.age);

for (let i = 0; i < team.length; i++) {
    console.log(`${team[i].firstName} ${team[i].age}`);
}

