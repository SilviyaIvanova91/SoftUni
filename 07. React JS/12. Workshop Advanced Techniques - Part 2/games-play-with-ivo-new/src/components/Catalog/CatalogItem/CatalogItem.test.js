import { CatalogItem } from "./CatalogItem";
import ReactDOM from "react-dom/client";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Catalog Item Component", () => {
  test("Show title", () => {
    const title = "Test Title";

    // const container = document.createElement("div");
    // document.body.append(container);
    // const root = ReactDOM.createRoot(container);
    // root.render(<CatalogItem title={title} />);
    render(
      <BrowserRouter>
        <CatalogItem title={title} />
      </BrowserRouter>
    );
    //BrouseRouter слагаме, когато в компонента, който извикваме има Link

    //const actualTitle = document.querySelector(".item-title").textContent;
    // const actualTitle = screen.queryByText(title)

    const tit = screen.queryByText(title);
    expect(tit).toBeInTheDocument();
    // expect(screen.queryByText(title)).toBeInTheDocument();
  });

  test("Click on details", async () => {
    global.window = { location: { pathname: null } };
    const itemId = "id";

    render(
      <BrowserRouter>
        <CatalogItem _id={itemId} />
      </BrowserRouter>
    );

    await userEvent.click(screen.queryByText("Details"));

    expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
  });
});
