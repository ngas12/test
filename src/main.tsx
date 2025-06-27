import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";

// This will be generated when you deploy
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";
// Amplify.configure(outputs);

const client = generateClient<Schema>();


client.queries.sayHello({
  name: "Amplify",
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
