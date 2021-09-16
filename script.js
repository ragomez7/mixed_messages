
const heroes = ["Elon Musk", "Steve Jobs", "Bill Gates", "Peter Norvig", "Andrew Ng"];
const wishes = ["lots of creativity", "success", "global impact", "constant learning"];
const carreers = ["AI", "Software", "Machine Learning", "Deep Learning"];

const hero_index = Math.floor(Math.random() * heroes.length)
const hero_selection = heroes[hero_index]

const wish_index = Math.floor(Math.random() * wishes.length)
const wish_selection = wishes[wish_index]
console.log(hero_selection + " wishes you " + wish_selection)
//Elon Musk wishes you lots of creativity in your AI carreer