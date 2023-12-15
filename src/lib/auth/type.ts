import { FieldErrors } from "react-hook-form";
import { SignupFormType, SignInFormType } from "./schema";

type SignupInputFieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "confirmPassword";

type LoginInputFieldName = "email" | "password";

export interface InputErrorProps {
  name: SignupInputFieldName | LoginInputFieldName;
  errors: FieldErrors<SignupFormType | SignInFormType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type: "text" | "password" | "email";
  placeholder: string;
}
