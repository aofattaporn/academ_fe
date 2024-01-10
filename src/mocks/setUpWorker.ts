import { HttpResponse, http } from "msw";

// Define a handler for the unhandled request
const unhandledRequestSVGHandler = http.get(
  "/src/assets/svg/academ_icon.svg",
  () => {
    return HttpResponse.json(
      { message: "Mocked SVG response" },
      { status: 200 }
    );
  }
);

const unhandledRequesPNGtHandler = http.get(
  "/src/assets/pdf/company-icon.png",
  () => {
    return HttpResponse.json(
      { message: "Mocked PNG response" },
      { status: 200 }
    );
  }
);

// Define a handler for the unhandled POST request
const unhandledPostRequestHandler = http.post(
  "https://identitytoolkit.googleapis.com/v1/accounts:lookup",
  () => {
    return HttpResponse.json(
      { message: "Mocked response for accounts:lookup" },
      { status: 200 }
    );
  }
);

const setup = {
  unhandledRequestSVGHandler,
  unhandledRequesPNGtHandler,
  unhandledPostRequestHandler,
};

export default setup;
