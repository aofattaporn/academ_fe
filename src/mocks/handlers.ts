import { http, HttpResponse } from "msw";
import { test_api } from "./testAPI";

export const handlers = [test_api];
