import { HttpResponse, http } from "msw";
import App from "../App";
import { server } from "../mocks/server";
import { render, screen, userEvent } from "../utils/test-utils";

describe("Test", () => {
  it("testing the vitests", () => {
    render(<App />);
    const titleValue = screen.getByText("Vite + React");
    //screen.getByText(/Vite + React/i)
    expect(titleValue).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("testing is 0")).toBeInTheDocument();
  });

  it("uses flexbox in app header", async () => {
    render(<App />);
    const element = screen.getByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(element.className).toEqual("read-the-docs");
    expect(getComputedStyle(element).display).toEqual("block");
  });

  it("API success scenario on load", async() => { 
    render(<App/>);
    expect(await screen.findByText("Todo List :1")).toBeInTheDocument();
  })

  it("API error scenario on load", async() => { 
    render(<App/>);
    server.use(http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, { status:401})
    }));
    expect(await screen.queryByText("Todo List")).not.toBeInTheDocument();
  })
});
