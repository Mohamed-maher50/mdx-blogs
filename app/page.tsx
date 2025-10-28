import PostCard from "@/components/PostCard";
import { contentfulClient } from "@/lib/contentful";

export default async function Home() {
  const entries = await contentfulClient.getEntries({
    content_type: "blog",
  });

  return (
    <div className="">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {entries.items.map((item) => {
        return (
          <div key={item.sys.id}>
            <h1>{item.fields.title}</h1>
            <span>{item.fields.slug}</span>
            <img
              src={"https:" + item.fields.thumbnail.fields.file.url}
              alt="sdf"
            />
          </div>
        );
      })}
    </div>
  );
}
