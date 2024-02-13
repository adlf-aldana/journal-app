import React, { useEffect, useState } from "react";

export const useForm = (initialState = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [formValidation, setformValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

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

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setformValidation(formCheckedValues);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
  };
};
