import React, { useState } from "react";

export const useForm = (initialState = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
