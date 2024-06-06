export default function RightSidebar() {
  return (
    <section className="sticky right-4 top-[10vh] z-20 flex h-[87vh] border-[1px] border-[#ff9500] rounded-3xl w-fit min-w-[150px] flex-col justify-between gap-10 overflow-auto text-white px-5 pb-6 pt-7 max-lg:hidden">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-[#ff9500]">Suggested people</h3>
      </div>
      <div className="flex flex-1 felx-col justify-start">
        <h3 className="text-[#ff9500]">Suggested Communities</h3>
      </div>
    </section>
  );
}
