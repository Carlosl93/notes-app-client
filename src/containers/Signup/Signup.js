import React, { useState } from "react";

import SignupForm from "./components/SignupForm";
import SignupConfirmation from "./components/SignupConfirmation";

export default function Signup() {
  const [newUser, setNewUser] = useState(null);

  console.log("newUser", newUser);

  return newUser === null ? (
    <SignupForm setNewUser={setNewUser} />
  ) : (
    <SignupConfirmation newUser={newUser} />
  );
}
