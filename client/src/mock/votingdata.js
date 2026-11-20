//this file uses fake data but will changed to real data afterwards
export const round = {
  letter: "B",
  currentPlayerId: "pp1",
  players: [
    { id: "pp1", username: "maria" },
    { id: "pp2", username: "brie" },
    { id: "pp3", username: "van" },
    { id: "pp4", username: "ellie" },
  ],
  categories: [
    {
      id: 1,
      name: "A fruit",
      answers: [
        { playerId: "pp1", words: ["banana", "blueberry"] },
        { playerId: "pp2", words: ["banana", "breadfruit"] },
        { playerId: "pp3", words: ["blackberry", ""] },
        { playerId: "pp4", words: ["blood orange", "blueberry"] },
      ],
    },
    {
      id: 2,
      name: "A city",
      answers: [
        { playerId: "pp1", words: ["boston", "berlin"] },
        { playerId: "pp2", words: ["bali", "bogota"] },
        { playerId: "pp3", words: ["", "baecelona"] },
        { playerId: "pp4", words: ["budapest", "bangkok"] },
      ],
    },
  ],
};
