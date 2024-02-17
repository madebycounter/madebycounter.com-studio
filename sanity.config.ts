import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
    name: "default",
    title: "madebycounter.com",

    projectId: "ff27s74x",
    dataset: "production",

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
