import BulbasaurPNG from "../assets/images/bulbasaur.png";
import CharmanderPNG from "../assets/images/charmander.png";
import SquirtlePNG from "../assets/images/squirtle.png";

export const initialState = {
  title: "",
  description: "",
  loading: true,
  percent: 0,
};

const steps = [
  {
    id: 1,
    title: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    checked: false,
    weight: 50,
    linkAcess: "https://www.pokemon.com/us/pokedex/bulbasaur",
    linkTrainig: "https://www.pokemon.com",
    image: BulbasaurPNG,
  },
  {
    id: 2,
    title: "Charmander",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    checked: false,
    weight: 25,
    link: "#",
    type: "payment",
    linkAcess: "https://www.pokemon.com/us/pokedex/charmander",
    linkTrainig: "https://www.pokemon.com",
    image: CharmanderPNG,
  },
  {
    id: 3,
    title: "Squirtle",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    checked: false,
    weight: 25,
    link: "#",
    type: "support",
    linkAcess: "https://www.pokemon.com/us/pokedex/squirtle",
    linkTrainig: "https://www.pokemon.com",
    image: SquirtlePNG,
  },
];

export const populateState = {
  title: "Learn more about starter pokemons",
  description:
    "Starter Pokémon, or Starters, are the Pokémon a Trainer chooses at the beginning of their Pokémon journey and the main protagonists of the Pokémon series of games",
  loading: false,
  percent: 0,
  steps: [...steps],
};
