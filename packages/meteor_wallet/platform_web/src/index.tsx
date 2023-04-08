import "@tamagui/web/reset.css";
import "@tamagui/polyfill-dev";
import { createRoot } from "react-dom/client";
import { MeteorApp, tamaguiAppConfig } from "@meteorwallet/meteor-app";

console.log("Meteor Web platform");

createRoot(document.querySelector("#root")).render(<MeteorApp config={tamaguiAppConfig} />);
