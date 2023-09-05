import { useState } from "react";
import { patchArticleVote } from "../../../utils/api";

function VoteButtons({ votes, id, parent }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [isError, setIsError] = useState(false);

  const handleClick = (inc) => {
    setIsError(false);
    setVoteCount((count) => count + inc);
    patchArticleVote(id, inc, parent).catch((err) => {
      setVoteCount((count) => count - inc);
      setIsError(true);
    });
  };

  return (
    <p>
      Votes:
      <button onClick={(e) => handleClick(-1)} className="vote-button">
        -
      </button>
      {voteCount}
      <button onClick={(e) => handleClick(1)} className="vote-button">
        +
      </button>
      <span className="vote-failed">{isError && "Failed "}</span>
    </p>
  );
}

export default VoteButtons;
