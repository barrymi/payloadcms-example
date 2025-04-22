import type { NextPage } from "next";

import React from "react";
import Image from "next/Image";
import { getPayload as gP } from "payload";
import config from "../../payload.config";
import PageClient from "./page.client";

const Page: NextPage = async () => {
  const payload = await gP({ config });

  const res = await payload.find({
    collection: "posts",
  });

  console.log("res:", res.docs[0]);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">All Posts</h1>
      <div>
        <ul>
          {res.docs.map((item) => (
            <li key={item.id}>
              <div>
                <h2>{item.title}</h2>
                <div>
                  <Image
                    className="w-full h-full object-crop"
                    src={item.banner.url}
                    alt={item.banner.alt}
                    width={item.banner.width}
                    height={item.banner.height}
                  />
                </div>
                <div>
                  <PageClient data={item.content} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
