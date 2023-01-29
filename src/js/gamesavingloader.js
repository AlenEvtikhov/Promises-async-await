import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      return new GameSaving(JSON.parse(jsonData));
    } catch (error) {
      return error;
    }
  }
}
