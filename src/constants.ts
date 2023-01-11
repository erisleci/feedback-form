export const errorMessages = {
  name: {
    min: "Name must have at least 2 characters",
    required: "Name is required",
  },
  email: {
    email: "Email must be valid",
    required: "Email is required",
  },
  rating: {
    required: "Rating is required",
  },
} as const;

export const successMessage = "Your feedback has been successfully submitted";
