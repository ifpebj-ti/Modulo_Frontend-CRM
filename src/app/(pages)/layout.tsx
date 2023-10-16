import SideBard from "@/components/SideBard";

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex h-screen w-screen">
        <SideBard />
        <div className="h-full w-[80%] pr-[112px] pl-[112px] pt-[40px] pb-[40px]">{children}</div>
      </div>
    </section>
  );
}
