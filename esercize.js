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
    firstName: "Manuel",
    surname: "Cau",
    age: 26,
    city: "Gonnesa",
    hobby: "Painting",
    favoriteFood: "Carbonara",
    favoriteVideoGame: "Rachet&Clank",
    favoriteFilm: "Eternal Sunshine of a Spotless Mind",
    favoriteBook: "La Nausea",
    petName: "Casper",
  },
];

team.sort((a, b) => a.age - b.age);

for (let i = 0; i < team.length; i++) {
  console.log(`${team[i].firstName} ${team[i].age}`);
}


const middleAge = team.reduce(
  (a, media) => a + media.age / team.length,
  0
);
console.log(middleAge);