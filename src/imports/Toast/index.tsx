function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.4] min-w-px relative whitespace-nowrap" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[#111827] text-[14px] text-ellipsis w-full">AI processing consultation...</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#687588] text-[12px] text-ellipsis w-full">Analyzing consultation data: Re-identifying, Running query gets</p>
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.12)] flex gap-[12px] items-center p-[16px] relative rounded-[12px] size-full" data-name="Toast">
      <div aria-hidden className="absolute border border-[#e9eaec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#14b8a6] h-full relative rounded-[2px] shrink-0 w-[4px]" data-name="accent-bar" />
      </div>
      <Text />
    </div>
  );
}