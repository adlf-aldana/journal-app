import { fileUpload } from "../../src/helpers/fileUpload";

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://th.bing.com/th/id/OIP.uiXSA2yBTIn1rrVGfFfQMQHaE7?w=229&h=180&c=7&r=0&o=5&pid=1.7";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
  });
});
