export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center item-center w-full">{children}</div>
  );
}
