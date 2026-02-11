import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/resCardMocks.json" with { type: "json" };
import "@testing-library/jest-dom"
import UserContext from "../context/UserContext";


it("Should render restaurant card component with data", ()=> {
    const userData = { userInfo: "John Doe" };
    
    render(
        <BrowserRouter>
            <UserContext.Provider value={userData}>
                <RestaurantCard res={MOCK_DATA} />
            </UserContext.Provider>
        </BrowserRouter>
    )

    const name = screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument()
})