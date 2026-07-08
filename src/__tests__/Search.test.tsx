//this is a integration test
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../components/Body"
import { act } from "react"
import { BrowserRouter } from "react-router"
import MOCK_DATA from "../mocks/resListDataMock.json"
import { Provider } from "react-redux"
import appStore from "../store/appStore"
import * as api from "../store/restaurantApi"

jest.spyOn(api, "useGetRestaurantsQuery").mockReturnValue({
    data: MOCK_DATA,
    isLoading: false,
    isError: false,
    isUninitialized: false,
    refetch: jest.fn()
} as any)

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

    //Removed as we added search with debouncing
    // const searchBtn = screen.getByRole("button", { name: "Search" });
    // fireEvent.click(searchBtn);

    await waitFor(() => { //This checks for items after every 50ms until it finds it or throws error after 1000ms
        const divs = screen.getAllByTestId("items");
        expect(divs.length).toBe(1);
    });
})