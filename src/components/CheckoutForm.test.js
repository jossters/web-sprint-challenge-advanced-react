import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const  first = screen.getByLabelText(/first name/i);
    const  last = screen.getByLabelText(/last name/i);
    const  address = screen.getByLabelText(/address/i);
    const  city = screen.getByLabelText(/city/i);
    const  state = screen.getByLabelText(/state/i);
    const  zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button",/checkout/i);

    userEvent.type(first, "Johnny");
    userEvent.type(last, "Murillo");
    userEvent.type(address, "1234 W Arrow");
    userEvent.type(city, "Covina");
    userEvent.type(state, "CA");
    userEvent.type(zip, "12345");
    userEvent.click(button);

        const sucsses = screen.getByTestId(/successMessage/i);
        expect(sucsses).toBeTruthy();
        
});
