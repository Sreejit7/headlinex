import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import {
  AppSearchContext,
  AppSearchProvider,
} from "../contexts/useSearchContext";

describe("SearchContext", () => {
  it("should show proper initial state for context", () => {
    const mockComponent = render(
      <AppSearchProvider>
        <AppSearchContext.Consumer>
          {(value) => (
            <>
              <span data-testid="search">{value.state.search}</span>
              <span data-testid="topic">{value.state.topic}</span>
            </>
          )}
        </AppSearchContext.Consumer>
      </AppSearchProvider>
    );

    const { getByTestId } = mockComponent;

    const searchText = getByTestId("search");
    const topicText = getByTestId("topic");

    expect(searchText).toHaveTextContent("");
    expect(topicText).toHaveTextContent("breaking-news");
  });
});
