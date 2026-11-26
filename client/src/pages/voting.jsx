//allows the players to vote on the answer in that specific category. 
// base case is that if there is no vote then it displayes that 
// but if there is one it changes it to either valid or invalid.
import VoteCard from "../components/votecard";
import { round } from "../mock/votingdata";
import "../styles/voting.css";

export default function Voting() {
  const category = round.categories[0];

  //only shows other players answers
  const otherAnswers = category.answers.filter((answer) => {
    if (answer.playerId === round.currentPlayerId) {
      return false;
    } else return true;
  });

  const getUserName = (playerId) => {
    const player = round.players.find((p) => {
      if (p.id === playerId) {
        return true;
      } else return false;
    });
    if (!player) {
      return "unknown player";
    } else return player.username;
  };

  return (
    <div className="voting-page">
      <h1>Voting</h1>
      <p className="voting-subtitle">Vote on the other players' answers</p>

      <h2 className="category-title">
        <span className="category-number">
          {round.categories.indexOf(category) + 1}
        </span>
        {category.name}
      </h2>

      {otherAnswers.map((answer) =>
        answer.words
          .filter((word) => word !== "")
          .map((word) => (
            <VoteCard
              key={`${answer.playerId}-${word}`}
              word={word}
              username={getUserName(answer.playerId)}
            />
          )),
      )}

      <button type="button" className="submit-button">
        Submit votes
      </button>
    </div>
  );
}
