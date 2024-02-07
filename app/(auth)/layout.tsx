export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex justify-center pt-20 px-2">
      {children}
    </div>
  );
}
