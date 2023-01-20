import GameSavingLoader from './gamesavingloader';

// eslint-disable-next-line no-console
GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
