import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SuggestionList from "./SuggestionList";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    const data = await axios.get("https://randomuser.me/api/?results=5");
    return data.data.results;
  };

  const { data, isLoading, error } = useQuery("suggestions", fetchSuggestions);

  useEffect(() => {
    setSuggestions(data);
  }, [data]);
  return (
    <div className="mt-10 ml-6">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold">Suggestions for you</h3>
        <button className="text-sm font-semibold text-blue-500">See All</button>
      </div>

      <SuggestionList suggestions={suggestions} />
    </div>
  );
};

export default Suggestions;
