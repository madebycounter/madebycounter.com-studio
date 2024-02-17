import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";

export default {
    name: "default",
    title: "madebycounter.com",

    projectId: "ff27s74x",
    dataset: "production",

    plugins: [structureTool(), visionTool(), cloudinarySchemaPlugin()],

    schema: {
        types: schemaTypes,
    },
};
