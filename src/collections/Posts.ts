import AlertBox from "@/components/AlertBox";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "banner",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
    },
  ],
};
