import { SectionHeader } from "@/components/SectionHeader";
import { getBlogs } from "@/features/blogs/api";
import Link from "next/link";
import React from "react";

const page = async () => {
  const blogs = await getBlogs();

  return (
    <main className="gap-20 flex flex-col">
      <SectionHeader
        title="Blog & Insights"
        description="Discover in-depth articles, technical guides, and industry perspectives from our team."
      />
      <div className="grid md:grid-cols-3 gap-6">
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
                  <span>{new Date(blog.date).toDateString()}</span>
                  <span>{blog.readingTime}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default page;
