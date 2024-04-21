import { signInWithGoogle } from "../../../src/firebase/providers";
import {
  checkingAuthentication,
  checkingCredentials,
  login,
  logout,
  startGoogleSignIn,
} from "../../../src/store/auth";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThuks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);

    // expect(dispatch).toHaveBeenCalledWith({
    //   payload: undefined,
    //   type: "auth/checkingCredentials",
    // });

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };

    await signInWithGoogle.mockResolvedValue(loginData);

    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: false, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);

    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
