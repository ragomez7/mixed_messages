
const generateRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
};

const messageComponents = {
    heroes: ["Elon Musk", "Steve Jobs", "Bill Gates", "Peter Norvig", "Andrew Ng"],
    wishes: ["lots of creativity", "success", "global impact", "constant learning"],
    carreers: ["AI", "Software", "Machine Learning", "Deep Learning"]
}

const hero_index = generateRandomIndex(messageComponents.heroes);
const hero_selection = messageComponents.heroes[hero_index];

const wish_index = generateRandomIndex(messageComponents.wishes);
const wish_selection = messageComponents.wishes[wish_index];

const carreer_index = generateRandomIndex(messageComponents.carreers);
const carreer_selection = messageComponents.carreers[carreer_index];

console.log(hero_selection + " wishes you " + wish_selection + " " + carreer_selection + "!");
//Elon Musk wishes you lots of creativity in your AI carreer