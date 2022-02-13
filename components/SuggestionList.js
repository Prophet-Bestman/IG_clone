import React from "react";
import Suggestion from "./Suggestion";

const SuggestionList = ({ suggestions }) => {
  return (
    <div>
      {!!suggestions &&
        suggestions.map((suggestion, i) => (
          <Suggestion key={i} data={suggestion} />
        ))}
    </div>
  );
};

export default SuggestionList;
