import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import TopicCard from "../components/TopicCard";
import {
  AppSearchContext,
  AppSearchProvider,
} from "../contexts/useSearchContext";

describe("TopicCard", () => {
  const mockTopic = {
    key: "mock-topic",
    text: "Mock Topic",
    image: "mockImage.jpeg",
  };

  it("should update topic properly on clicking card", () => {
    const mockComponent = render(
      <>
        <AppSearchProvider>
          <AppSearchContext.Consumer>
            {(value) => <span data-testid="topic">{value.state.topic}</span>}
          </AppSearchContext.Consumer>
          <TopicCard topic={mockTopic} active={false} />
        </AppSearchProvider>
      </>
    );

    const { getByTestId } = mockComponent;

    const topicText = getByTestId("topic");
    const mockTopicCard = getByTestId("card");

    // by default, topic is breaking news
    expect(topicText).toHaveTextContent("breaking-news");

    fireEvent.click(mockTopicCard);

    // topic should change after clicking the topic card
    expect(topicText).toHaveTextContent("mock-topic");
  });

  it("should have a ring(border) if the card is active", () => {
    const mockComponent = render(
      <>
        <AppSearchProvider>
          <TopicCard topic={mockTopic} active={true} />
        </AppSearchProvider>
      </>
    );

    const { getByTestId } = mockComponent;

    const activeRingDiv = getByTestId("active-ring");

    // As the card is active, it should have the ring class
    expect(activeRingDiv).toHaveClass("ring-2");
  });
});
