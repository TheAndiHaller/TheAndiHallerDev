export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[700px] mx-auto min-h-screen flex flex-col ">
      {children}
    </div>
  );
}
