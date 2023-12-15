import React, { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { InputErrorProps } from "@/lib/auth/type";

const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="form_error">{message}</p>}
    />
  );
};

export default InputErrorMessage;
