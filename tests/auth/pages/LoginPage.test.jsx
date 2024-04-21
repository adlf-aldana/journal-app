import { configureStore } from "@reduxjs/toolkit";
import { authSlice, startGoogleSignIn } from "../../../src/store/auth";
import { Provider } from "react-redux";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
jest.mock("../../../src/store/auth/thunks.js", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Pruebas en <LoginPage />", () => {
  test("debe de mostrar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("boton de google debe de llamar el startGoogleSignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });
});
