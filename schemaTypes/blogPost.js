// Title
// Date
// Author
// Banner
// Slug
// Content

export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "datetime",
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "teamMember" },
        },
        {
            name: "banner",
            title: "Banner",
            type: "cloudinary.asset",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "content",
            title: "Content",
            type: "richText",
        },
        // {
        //     name: "title",
        //     title: "Title",
        //     type: "string",
        // },
        // {
        //     name: "slug",
        //     title: "Slug",
        //     type: "slug",
        //     options: {
        //         source: "title",
        //         maxLength: 96,
        //     },
        // },
        // {
        //     name: "publishedAt",
        //     title: "Published at",
        //     type: "datetime",
        // },
        // {
        //     name: "mainImage",
        //     title: "Main image",
        //     type: "cloudinary.asset",
        //     description: "This asset is served from Cloudinary",
        // },
        // {
        //     name: "excerpt",
        //     title: "Excerpt",
        //     type: "string",
        // },
        // {
        //     name: "body",
        //     title: "Body",
        //     type: "richText",
        // },
    ],
};
