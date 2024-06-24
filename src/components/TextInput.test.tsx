import { userEvent } from "@testing-library/user-event";
import TextInput from "./TextInput";
import { render, screen } from "@testing-library/react";

test("TextInput Component Test", async() => {
    const user = userEvent.setup();
    render(<TextInput />);

    const textElement = screen.getByText("entered text:");
    expect(textElement).toBeInTheDocument();

    const inputElement = screen.getByLabelText("text input");
    await user.type(inputElement, "Hello World");
    expect(screen.getByText("entered text: Hello World")).toBeInTheDocument();
});