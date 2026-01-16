import { Metadata } from "next";

export function constructMetadata({
    title = "BibleNote - Your Sanctuary for Study",
    description = "The ultimate note-taking experience for Bible students, teachers, and disciples.",
    image = "/logo.png",
    icons = "/logo.png",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@biblenote",
        },
        icons,
        metadataBase: new URL("https://biblenote.app"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
