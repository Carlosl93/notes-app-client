import { API } from "aws-amplify";

export const createNote = content =>
  API.post("notes", "dev/notes", {
    body: content
  });

export const loadNotes = content => API.get("notes", "dev/notes");
