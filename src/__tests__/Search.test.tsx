//this is a integration test
import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react"
import Body from "../components/Body"
import { act } from "react"
import { BrowserRouter } from "react-router"
import MOCK_DATA from "../mocks/resListDataMock.json"
import { Provider } from "react-redux"
import appStore from "../store/appStore"

jest.mock("../utils/useFetchRestaurants", () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(MOCK_DATA))
}));

it("Should render Body component", async() => {
    //So we won't be able to render body simply as it makes use of fetch fn, and the functionality is from browser API and our tests run 
    //in JSDOM which isn't exactly browser, so we'd mimic the fnality of it
   await act(async () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        </Provider>
    )
   })

     //We need to make use of findBy because it would load shimmer and we'd not be able to find this, so we use a async fn findByTestId
    const search = await screen.findByTestId("search-input");
    
    fireEvent.change(search, { target: { value: "pizza" } });

    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchBtn);

    const divs = screen.getAllByTestId("items");
    expect(divs.length).toBe(1);
})