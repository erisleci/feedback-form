import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import { errorMessages, successMessage } from "@constants";
import { FeedbackForm } from "./FeedbackForm";

const setup = () => {
  const button = screen.getByRole("button", { name: "Submit" });
  const nameInput = screen.getByTestId("name");
  const emailInput = screen.getByTestId("email");
  const radioInput = screen.findByTestId("3");

  return { button, nameInput, emailInput, radioInput } as const;
};

describe("<FeedbackForm />", () => {
  it("shows error when required fields are empty", async () => {
    render(<FeedbackForm />);

    const { button } = setup();

    fireEvent.submit(button);
    expect(
      await screen.findByText(errorMessages.name.required)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(errorMessages.email.required)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(errorMessages.rating.required)
    ).toBeInTheDocument();
  });

  it("shows error when Name is less than 2 characters", async () => {
    render(<FeedbackForm />);

    const { button, nameInput } = setup();

    fireEvent.input(nameInput, { target: { value: "E" } });
    fireEvent.submit(button);
    expect(await screen.findByText(errorMessages.name.min)).toBeInTheDocument();
  });

  it("shows error when Email is not entered in proper format", async () => {
    render(<FeedbackForm />);

    const { button, emailInput } = setup();

    fireEvent.input(emailInput, { target: { value: "test@" } });
    fireEvent.submit(button);

    expect(
      await screen.findByText(errorMessages.email.email)
    ).toBeInTheDocument();
  });
  it("shows a confirmation message when form is submitted successfully", async () => {
    render(<FeedbackForm />);

    const { button, emailInput, nameInput } = setup();

    fireEvent.input(nameInput, { target: { value: "Eris" } });
    fireEvent.input(emailInput, { target: { value: "test@gmail.com" } });

    const radio = screen.getByTestId("3");
    fireEvent.click(radio);

    await waitFor(async () => {
      fireEvent.submit(button);
      expect(await screen.findByText(successMessage)).toBeInTheDocument();
    });
  });
});
