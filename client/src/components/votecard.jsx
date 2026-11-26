//layout for the voting

import { useState } from "react";

export default function VoteCard({ word, username }) {
  const [vote, setVote] = useState(null);

  let badgetText = "Not voted";

  if (vote === "valid") badgetText = "Valid";
  if (vote === "invalid") badgetText = "Invalid";

  return (
    <div className="vote-card">
      <div className="vote-card-top">
        <div>
          <p className="vote-word">{word}</p>
          <p className="vote-user">{username}</p>
        </div>
        <span className={`vote-badge ${vote || ""}`}>{badgetText}</span>
      </div>
      <div className="vote-buttons">
        <button
          type="button"
          className={vote === "valid" ? "selected" : ""}
          onClick={() => setVote("valid")}
        >
          {" "}
          Valid{" "}
        </button>
        <button
          type="button"
          className={vote === "invalid" ? "selected" : ""}
          onClick={() => setVote("invalid")}
        >
          {" "}
          Invalid{" "}
        </button>
      </div>
    </div>
  );
}
