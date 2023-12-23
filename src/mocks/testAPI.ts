import { HttpResponse, http } from "msw";

const test_api = http.get("/autha", () => {
  return HttpResponse.json({
    status: 200,
    Headers: {
      "Set-Cookie": "mySecret=abc-123",
      "X-Custom-Header": "yes",
    },
    ReportBody: {
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    },
  });
});

export { test_api };
