import { render, screen, cleanup } from "@testing-library/react";
import RandomJoke from "./RandomeJoke";

const fakeJoke = {
  icon_url: undefined,
  value: "Chuck Norris mocked joke",
};

afterEach(cleanup);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeJoke),
  })
);

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeJoke),
    })
  );
});

// global.fetch = jest.fn()
// jest.spyOn(global, "fetch").mockImplementation(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(fakeJoke),
//   })
// );

test("Show fetched joke", async () => {
  render(<RandomJoke />);

  const element = await screen.findByText(fakeJoke.value);

  expect(element).toBeInTheDocument();
});
