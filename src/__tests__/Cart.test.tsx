import { screen, render, fireEvent } from "@testing-library/react"
import ListItems from "../components/ListItems"
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import MOCK_DATA from "../mocks/resMenuListmock.json"
import Header from "../components/Header";
import "@testing-library/react"
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router";


it("Should update cart if user adds items to cart", () => {
    const userData = { userInfo: "John Doe" }

    render(
        <BrowserRouter>
        <UserContext.Provider value={userData}>
            <Provider store={appStore}>
                <Header />
                <ListItems category={MOCK_DATA} isOpen={true}/>
            </Provider>
        </UserContext.Provider>
        </BrowserRouter>
    )

    const button = screen.getAllByTestId("addBtn")
    // console.log(button)
    fireEvent.click(button[0])

    const after = screen.getByText("1")
    expect(after).toBeInTheDocument()
    
})