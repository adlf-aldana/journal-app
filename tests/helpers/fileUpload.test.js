import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "drfhtcvcn",
  api_key: "972673847792277",
  api_secret: "u2SJbaBCfFuGmaX_mtfcCh_kUUo",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://th.bing.com/th/id/OIP.uiXSA2yBTIn1rrVGfFfQMQHaE7?w=229&h=180&c=7&r=0&o=5&pid=1.7";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    await cloudinary.api.delete_resources(["journal-app/" + imageId]);
  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
