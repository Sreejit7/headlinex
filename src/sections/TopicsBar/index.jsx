import React from "react";
import TopicCard from "../../components/TopicCard";
import { useSearchContext } from "../../contexts/useSearchContext";
import { topics } from "../../data/topics";

const TopicsBar = () => {
  const {
    state: { topic: newsTopic },
  } = useSearchContext();

  return (
    <ul className="bg-gray-600 flex justify-center gap-x-4 gap-y-4 px-4 py-5 flex-wrap">
      {topics.map((topic) => (
        <li key={topic.key}>
          <TopicCard topic={topic} active={newsTopic === topic.key} />
        </li>
      ))}
    </ul>
  );
};

export default TopicsBar;
