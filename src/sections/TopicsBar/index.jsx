import React from "react";
import TopicCard from "../../components/TopicCard";
import { useSearchContext } from "../../contexts/useSearchContext";
import { topics } from "../../data/topics";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopicsBar = () => {
  const {
    state: { topic: newsTopic },
  } = useSearchContext();

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1368 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1368, min: 1024 },
      items: 6,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="px-10 py-2 bg-gray-800">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="py-4"
        itemClass="px-4"
        autoPlaySpeed={3000}
        partialVisible={false}
      >
        {topics.map((topic) => (
          <TopicCard
            key={topic.key}
            topic={topic}
            active={newsTopic === topic.key}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default TopicsBar;
