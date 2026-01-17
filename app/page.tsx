import Link from "next/link";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/features/categories/api";
import { ElementType } from "react";
import { cn } from "@/lib/utils";
import { getBlogs } from "@/features/blogs/api";

export default async function Home() {
  const categories = await getCategories();
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Your Gateway to Modern Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore comprehensive guides, documentation, and best practices for
            building modern web applications.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Explore Now
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-card px-8 py-6 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Blogs Section */}
      <section
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Latest Blogs
              </h2>
              <p className="text-muted-foreground mt-2">
                Stay updated with our latest articles and insights
              </p>
            </div>
            <Link
              href="/blogs"
              className="text-primary hover:text-accent transition flex items-center gap-2"
            >
              View All <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
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
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Categories
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover content organized by topic
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = Icons[category.icon] as ElementType;
              return (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug}`}
                  className="group bg-card border  border-blue-500/20 rounded-lg p-6 hover:border-primary transition hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="space-y-4">
                    <div
                      className={cn(
                        `w-12 h-12 rounded-lg bg-linear-to-br  flex items-center justify-center`,
                        category.style,
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {category.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition">
                      <span className="text-sm font-medium">Explore</span>
                      <Icons.ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* Docs Section */}
      <section
        id="docs"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Documentation
              </h2>
              <p className="text-muted-foreground mt-2">
                Everything you need to get started
              </p>
            </div>
            <Link
              href="/docs"
              className="text-primary hover:text-accent transition flex items-center gap-2"
            >
              View All <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* {allDocs.map((doc) => (
              <Link
                key={doc._id}
                href={`/${doc._id}`}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition hover:shadow-lg hover:shadow-primary/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {doc.desc}
                  </p>
                </div>
              </Link>
            ))} */}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-linear-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with our
            resources and guides.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Start Learning Today
          </Button>
        </div>
      </section>
    </div>
  );
}
