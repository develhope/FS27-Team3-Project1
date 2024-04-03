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
];

team.sort((a, b) => a.age - b.age);

for (let i = 0; i < team.length; i++) {
    console.log(`${team[i].firstName} ${team[i].age}`);
}