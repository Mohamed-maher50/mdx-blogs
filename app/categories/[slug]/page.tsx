import { getBlogsByCategory } from "@/features/blogs/api";
import { getCategoryBySlug } from "@/features/categories/api";
import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug?: string }> }) => {
  const { slug } = await params;
  if (!slug) notFound();
  const category = await getCategoryBySlug(slug);
  if (!slug) notFound();
  const blogs = await getBlogsByCategory(slug);
  return (
    <div className="flex flex-wrap flex-col gap-10 items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {category.name}
        </h2>
        <p className="text-muted-foreground mt-2">
          {category.desc
            ? `Stay updated with the latest articles and insights about ${category.desc}.`
            : "Stay updated with our latest articles and insights."}
        </p>
      </div>
      <div className="grid gap-5 grow px-4 w-full grid-cols-1 md:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground">{blog.title}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="">{new Date(blog.date).toDateString()}</span>
                  <span className="flex gap-1 items-center">
                    {blog.readingTime}
                    <Icons.Clock size={14} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
