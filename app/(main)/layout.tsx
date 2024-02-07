import Navbar from "./_components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="w-full px-2 pt-20 pb-10 md:max-w-[80%] md:m-auto">
        {children}
      </div>
    </>
  );
}
