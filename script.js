
//Function that generates a random index based on the passed array
const generateRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
};

//Object containing the message components
const messageComponents = {
    heroes: ["Elon Musk", "Steve Jobs", "Bill Gates", "Peter Norvig", "Andrew Ng"],
    wishes: ["lots of creativity", "success", "global impact", "constant learning"],
    carreers: ["AI", "Software", "Machine Learning", "Deep Learning"]
}
//Selecting a hero
const hero_index = generateRandomIndex(messageComponents.heroes);
const hero_selection = messageComponents.heroes[hero_index];

//Selecting a wish
const wish_index = generateRandomIndex(messageComponents.wishes);
const wish_selection = messageComponents.wishes[wish_index];

//Selecting a carreer
const carreer_index = generateRandomIndex(messageComponents.carreers);
const carreer_selection = messageComponents.carreers[carreer_index];

//Logging the full message
console.log(hero_selection + " wishes you " + wish_selection + " " + carreer_selection + "!");

//End of script