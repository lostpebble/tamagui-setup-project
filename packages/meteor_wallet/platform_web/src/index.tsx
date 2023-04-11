import "@tamagui/web/reset.css";
import "@tamagui/polyfill-dev";
import { createRoot } from "react-dom/client";
import WebApp from "./WebApp";

console.log("Meteor Web platform");

createRoot(document.querySelector("#root")).render(<WebApp />);
