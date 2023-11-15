import SideBard from "@/components/SideBard";
import "./styles.css"

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex h-screen w-screen">
        <SideBard />
        <div className="flex flex-col h-full w-[80%] pr-[112px] pl-[112px] pt-[40px] pb-[40px] justify-around">
          <div className="flex gap-[104px] items-center h-[10%]">
            <div className="flex flex-col">
              <span className="text-[34px] leading-[44px]">
                Olá, <strong>Graça</strong>
              </span>
              <div className="leading-[22px] text-[#808080]">
                Segunda-Feira, 11 de setembro de 2023
              </div>
            </div>
            <div>
              <div className="border-2 border-[#BBBDC9] rounded-[20px] p-2 pl-[15px]">
                <input
                  type="text"
                  placeholder="Pesquise aqui..."
                  className="bg-transparent active:border-none focus:border-none border-none outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>
          <main className="h-[85%]">{children}</main>
        </div>
      </div>
    </section>
  );
}
