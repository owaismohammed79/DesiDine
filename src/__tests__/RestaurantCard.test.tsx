import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/resCardMocks.json" with { type: "json" };
import "@testing-library/jest-dom"
import UserContext from "../context/UserContext";
import { withPromotedLabel } from "../components/RestaurantCard";


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

it("Should render the withPromotedLabel component", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    const userData = { userInfo: "John Doe" };

    render(
        <BrowserRouter>
            <UserContext.Provider value={userData}>
                <PromotedRestaurantCard res={MOCK_DATA}/>
            </UserContext.Provider>
        </BrowserRouter>
    )

    const name = screen.getByText("Promoted")

    expect(name).toBeInTheDocument();
})