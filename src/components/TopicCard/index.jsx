import React from "react";
import {
  SearchActionTypes,
  useSearchContext,
} from "../../contexts/useSearchContext";

const TopicCard = ({ topic, active }) => {
  const { dispatch } = useSearchContext();

  const topicSelectHandler = () => {
    dispatch({
      type: SearchActionTypes.SELECT_TOPIC,
      topic: topic.key,
    });
  };

  return (
    <span
      className={`font-medium rounded-sm shadow-lg p-2 bg-gradient-to-b transition duration-700 hover:ease-in from-green-400 to-blue-400 
                  cursor-pointer hover:from-pink-400 hover:to-blue-500 ${
                    active && "from-red-500 to-blue-500"
                  }`}
      onClick={topicSelectHandler}
    >
      {topic.text}
    </span>
  );
};

export default TopicCard;
