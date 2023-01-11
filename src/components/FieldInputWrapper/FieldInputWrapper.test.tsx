import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { FieldInputWrapper } from "./FieldInputWrapper";

const label = "Test label";
const errorMessage = "something went wrong";

describe("<FieldInputWrapper />", () => {
  it("renders the component correctly", () => {
    render(<FieldInputWrapper label={label} error={errorMessage} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
