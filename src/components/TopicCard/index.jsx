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
    <li className="relative h-40 cursor-pointer" onClick={topicSelectHandler}>
      <div
        className="absolute h-40 w-full bg-center bg-no-repeat bg-cover inline-block rounded-lg"
        style={{ backgroundImage: `url(${topic.image})` }}
      />
      <div className="absolute h-40 w-full rounded-lg backdrop-blur-sm" />
      <div className="absolute h-40 w-full rounded-lg bg-gradient-to-b opacity-50 from-gray-600 via-gray-700 to-black" />
      <div className={`absolute h-40 w-full rounded-lg transition duration-700 shadow-md ${active && "ring-2 ring-red-600"}`} />
      <article className="absolute h-full w-full transition duration-700 text-white flex items-center justify-center">
        <h2 className="font-bold text-xl">{topic.text}</h2>
      </article>
    </li>
  );
};

export default TopicCard;
