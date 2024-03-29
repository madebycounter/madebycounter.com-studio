export default {
    title: "Rich Text",
    name: "richText",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            // Styles let you set what your user can mark up blocks with. These
            // corrensponds with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [{ title: "Normal", value: "normal" }],
            lists: [],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Code", value: "code" },
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [],
            },
        },
    ],
};
