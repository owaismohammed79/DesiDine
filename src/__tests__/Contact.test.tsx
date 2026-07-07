import {render, screen} from "@testing-library/react"
import Contact from "../components/Contact"              //We're testing contact page
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => { //We can group multiple test cases
	test("Should load contact component", () => {
		render(<Contact />)
		
		//Query
		const heading = screen.getByRole("heading") //We can select according to tag names
		
		//Assertion
		expect(heading).toBeInTheDocument();
	})
	
	it("Should button inside contact component", () => { //test or it are simply aliases
		render(<Contact />)
		
		//Query
		const button = screen.getByText("Send Message") //Any comp should have Submit inside it
		
		//Assertion
		expect(button).toBeInTheDocument();
	})
	
	test("Should load input component inside Contact", () => {
		render(<Contact />)
		//Can also do screen.getByRole("textbox")  This is for input boxed
		const input = screen.getByPlaceholderText("John Doe") //Name input box is present or not
		
		expect(input).toBeInTheDocument();
	})
	
	test("Should have 2 input boxes", () => {
		render(<Contact />)
		
		//Query
		const inputBoxes = screen.getAllByRole("textbox") //We also have many get function types
		
		//Assertion
		expect(inputBoxes.length).toBe(2); //We have many toBe functions

    })
})