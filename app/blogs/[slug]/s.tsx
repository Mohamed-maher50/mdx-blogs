import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-neutral w-full! grow block dark:prose-invert prose-xl">
      {children}
    </div>
  );
}

export default Layout;
