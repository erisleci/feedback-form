import { TextInput } from "@components/FieldInputs/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextAreaInput } from "@components/FieldInputs/TextAreaInput";
import { RadioInputGroup } from "@components/FieldInputs/RadioInputGroup";
import { errorMessages, successMessage } from "@constants";
import { useState } from "react";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required(errorMessages.name.required)
    .min(2, errorMessages.name.min),
  email: yup
    .string()
    .required(errorMessages.email.required)
    .email(errorMessages.email.email),
  rating: yup.string().required("Rating is required"),
});

export const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSuccess(false);
    try {
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setSuccess(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <h1 className="text-secondary-100 mb-8 text-3xl text-center">
        Share your thoughts!
      </h1>
      <div className="px-6 py-5 bg-primary-90 md:min-w-[400px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <TextInput
            label="Name"
            placeholder="Name"
            register={register}
            name="name"
            error={
              typeof errors["name"]?.message === "string"
                ? errors["name"]?.message
                : undefined
            }
          />
          <TextInput
            label="Email"
            placeholder="Email"
            register={register}
            name="email"
            error={
              typeof errors["email"]?.message === "string"
                ? errors["email"]?.message
                : undefined
            }
          />
          <RadioInputGroup
            label="Rating"
            options={[
              { label: "1", name: "rating", value: "1" },
              { label: "2", name: "rating", value: "2" },
              { label: "3", name: "rating", value: "3" },
              { label: "4", name: "rating", value: "4" },
              { label: "5", name: "rating", value: "5" },
            ]}
            name="rating"
            register={register}
            error={errors["rating"] && errorMessages.rating.required}
          />
          <TextAreaInput
            label="Comment"
            placeholder="Comment"
            register={register}
            name="comment"
          />
          <button
            type="submit"
            className="p-2 border-secondary-100 border hover:opacity-80 active:opacity-60"
            name="submit"
          >
            Submit
          </button>
          {success && <p className="text-green-500">{successMessage}</p>}
        </form>
      </div>
    </>
  );
};
