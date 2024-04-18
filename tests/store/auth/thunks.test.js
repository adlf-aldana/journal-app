import {
  checkingAuthentication,
  checkingCredentials,
} from "../../../src/store/auth";

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
});
