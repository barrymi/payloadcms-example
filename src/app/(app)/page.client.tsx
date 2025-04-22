"use client";

import * as React from "react";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export default function PageClient({ data }: { data: SerializedEditorState }) {
  const html = convertLexicalToHTML({ data });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
