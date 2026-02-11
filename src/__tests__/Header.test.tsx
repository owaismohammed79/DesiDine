import {fireEvent, render, screen} from "@testing-library/react"
import Header from "../components/Header"
import { BrowserRouter } from "react-router"
import { Provider } from "react-redux"
import appStore from "../store/appStore"
import "@testing-library/jest-dom"

it("Should render Header component", () => {
    //Realize that we'd need to wrap the component with browserRouter, Redux provider so that our component can get the values while rendering and can make use of reat-router things like Link tag  
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button")

    // const searchInput = screen.getByTestId("searchInput")
    //If you aren't able to extrcct the component using any usual get fns then make use of the getByTestId()
    //const textInput = screen.getByTestId("textInput")    This should be given in your respective input box as data-testid= "searchInput" as a attribute 
    //console.log(searchInput) This returns a React component (the JS object)
    //We can also make use of regex inside of getBytext if we want to compare a part of the text instead of complete thing
    //const cartItems = screen.getByText(/Cart/)   will match for cart keyword

    expect(loginButton).toBeInTheDocument();
})

it("Should change login to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    //Simulating click event on the button
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();

})