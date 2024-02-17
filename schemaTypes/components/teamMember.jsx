// Full Name
// Profile Picture
// Full Body
// Full Body Extra
// Footer Bust
// Signature
// Pointing Photo

export default {
    name: "teamMember",
    title: "Team Member",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string",
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string",
        },
        {
            name: "profilePicture",
            title: "Profile Picture",
            type: "cloudinary.asset",
        },
        {
            name: "fullBody",
            title: "Full Body",
            type: "cloudinary.asset",
        },
        {
            name: "fullBodyExtra",
            title: "Full Body Extra",
            type: "cloudinary.asset",
        },
        {
            name: "footerBust",
            title: "Footer Bust",
            type: "cloudinary.asset",
        },
        {
            name: "signature",
            title: "Signature",
            type: "cloudinary.asset",
        },
        {
            name: "pointingPhoto",
            title: "Pointing Photo",
            type: "cloudinary.asset",
        },
    ],
    preview: {
        select: {
            firstName: "firstName",
            lastName: "lastName",
            pfp: "profilePicture.secure_url",
        },
        prepare(selection) {
            if (selection.firstName && selection.lastName) {
                return {
                    title: `${selection.firstName} ${selection.lastName}`,
                    media: <img src={selection.pfp} />,
                };
            }

            return {
                title: selection.firstName,
                media: <img src={selection.pfp} />,
            };
        },
    },
};
