"use client"

import grapesjs, { Editor } from "grapesjs";
import GjsEditor, {Canvas} from "@grapesjs/react";
import gjsblocksBasic from "grapesjs-blocks-basic";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsTailwind from "grapesjs-tailwind";
import gjsBgStyle from "grapesjs-style-bg";
import gjsForms from "grapesjs-plugin-forms";
// import gjsRTE from "grapesjs-rte-extensions";
import "grapick/dist/grapick.min.css";
// import "grapesjs-rte-extensions/dist/grapesjs-rte-extensions.min.css";

export default function DefaultEditor() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
  };

  return (
    <GjsEditor
      // Pass the core GrapesJS library to the wrapper (required).
      // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
      grapesjs={grapesjs}
      // Load the GrapesJS CSS file asynchronously from URL.
      // This is an optional prop, you can always import the CSS directly in your JS if you wish.
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      // GrapesJS init options
      options={{
        height: "100vh",
        storageManager: false,
      }}
      onEditor={onEditor}
      plugins={[
        gjsblocksBasic,
        gjsForms,
        gjsPresetWebpage,
        gjsBgStyle,
        // gjsRTE,
        gjsTailwind,
      ]}
    />
  );
}
