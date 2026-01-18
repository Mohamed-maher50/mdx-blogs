import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-10 px-10 max-w-6xl">
      <Head>
        <meta name="apple-mobile-web-app-title" content="DevHub" />
      </Head>
      {children}
    </div>
  );
}
