import { API } from "aws-amplify";

export const createNote = content =>
  API.post("notes", "notes", {
    body: content
  });
