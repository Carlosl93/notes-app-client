import React from "react";

import { useAppContext } from "../../libs/contextLib";
import Landing from "./components/Landing";
import NotesList from "./components/NotesList";

export default function Home() {
  const { isAuthenticated } = useAppContext();

  // return isAuthenticated ? <NotesList /> : <Landing />;
  return <NotesList />;
}
