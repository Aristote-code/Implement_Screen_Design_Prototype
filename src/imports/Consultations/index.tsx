import svgPaths from "./svg-x3a5205hpj";
import imgAvatarWoman2 from "./2c5defa857752d861312dafce509849974415aaa.png";
import imgAvatarWoman1 from "./41928053fa7719b6b00ae5dd6af86aeae03535b5.png";
import imgAvatarMan1 from "./511638d3993b5229aa3369899d7c5297d97fcdbf.png";
import imgAvatarWoman4 from "./c11848aa68d8f8e28060b49ab196bee7b69eb694.png";
import imgAvatarMan3 from "./b7edcd72fe194b2ba67316b78a2a4804b3b8192c.png";
import imgAvatarMan4 from "./b76a564ea203db08ef07cf30985ce2a171f2f997.png";
import imgAvatarWoman3 from "./f49ce7fc8f36d4f5f9468e2f26e28e2854779681.png";

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#111827] text-[24px] whitespace-nowrap">Consultations (7)</p>
    </div>
  );
}

function Greeting() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Greeting">
      <Frame />
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#687588] text-[14px] w-full">Manage your consultations</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex h-full items-start justify-end relative shrink-0 w-[740px]" data-name="Tabs">
      <div aria-hidden className="absolute border-[#f1f2f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[40px] relative shrink-0" data-name="Tab Atom">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold h-[22px] leading-[1.6] overflow-hidden relative shrink-0 text-[#2f78ee] text-[14px] text-center text-ellipsis tracking-[0.2px] w-[200px] whitespace-nowrap">All pending</p>
        </div>
        <div aria-hidden className="absolute border-[#2f78ee] border-b-2 border-solid inset-0 pointer-events-none" />
      </div>
      <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative shrink-0" data-name="Tab Atom">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold h-[22px] leading-[1.6] overflow-hidden relative shrink-0 text-[#111827] text-[14px] text-center text-ellipsis w-[100px] whitespace-nowrap">{`Today `}</p>
      </div>
      <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative shrink-0" data-name="Tab Atom">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold h-[22px] leading-[1.6] overflow-hidden relative shrink-0 text-[#111827] text-[14px] text-center text-ellipsis w-[100px] whitespace-nowrap">This Week</p>
      </div>
      <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative shrink-0" data-name="Tab Atom">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold h-[22px] leading-[1.6] overflow-hidden relative shrink-0 text-[#111827] text-[14px] text-center text-ellipsis w-[100px] whitespace-nowrap">This Month</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Header">
      <Greeting />
      <div className="flex flex-row items-center self-stretch">
        <Tabs />
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Area">
      <div aria-hidden className="absolute border border-[#cbd5e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[10px] items-start px-[20px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#111827] text-[0px]">
          <p className="text-[14px]">
            <span className="leading-[1.6]">Visit department:</span>
            <span className="leading-[1.6]">{` `}</span>
            <span className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[1.6] text-[#2f78ee]">All</span>
          </p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputArea1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Area">
      <div aria-hidden className="absolute border border-[#cbd5e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[10px] items-start px-[20px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#525962] text-[14px]">
          <p className="leading-[1.6]">Search patient</p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="Search">
          <div className="absolute inset-[8.45%_7.12%_5.21%_8.45%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8869 17.2683">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p26896900} fill="var(--fill-0, #111827)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p6650100} fill="var(--fill-0, #111827)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] h-[54px] items-start relative shrink-0 w-full" data-name="CTA">
      <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[262px]" data-name="Field">
        <InputArea />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start min-w-px relative rounded-[10px]" data-name="Field">
        <InputArea1 />
      </div>
    </div>
  );
}

function Sort() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">04</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">06</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">07</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">08</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[53px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">#</p>
            </div>
            <Sort />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox1 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox2 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox3 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox4 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox5 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox6 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox7 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Jack Maa</p>
      </div>
    </div>
  );
}

function TitleCheckbox8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarWoman2} width="24" />
          </div>
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Manzi dider</p>
      </div>
    </div>
  );
}

function TitleCheckbox9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarWoman1} width="24" />
          </div>
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Gisa Arlette</p>
      </div>
    </div>
  );
}

function TitleCheckbox10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="bg-[#d8ffd3] overflow-clip relative rounded-[1000px] shrink-0 size-[24px]" data-name="Property 1=24px">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[12.5px] text-[#55c790] text-[10px] text-center top-[12.5px] tracking-[0.4px] uppercase whitespace-nowrap">
              <p className="leading-[1.5]">GA</p>
            </div>
          </div>
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Abraham Kamau</p>
      </div>
    </div>
  );
}

function TitleCheckbox11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarMan1} width="24" />
          </div>
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Abayizera Bertrand</p>
      </div>
    </div>
  );
}

function TitleCheckbox12() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarWoman4} width="24" />
          </div>
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Abayo Yvette</p>
      </div>
    </div>
  );
}

function TitleCheckbox13() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarMan3} width="24" />
          </div>
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Mushimiyimana Bertin</p>
      </div>
    </div>
  );
}

function TitleCheckbox14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Property 1=24px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarMan4} width="24" />
          </div>
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full">
        <p className="leading-[1.6]">Ngoga Frank</p>
      </div>
    </div>
  );
}

function TitleCheckbox15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative size-full">
          <div className="bg-[#96c2f7] overflow-clip relative rounded-[1000px] shrink-0 size-[24px]" data-name="Property 1=24px">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[12.5px] text-[#2f78ee] text-[10px] text-center top-[12.5px] tracking-[0.4px] uppercase whitespace-nowrap">
              <p className="leading-[1.5]">NF</p>
            </div>
          </div>
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative rounded-bl-[10px] rounded-tl-[10px] shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Patient</p>
            </div>
            <Sort1 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox8 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox9 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox10 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox11 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox12 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox13 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox14 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox15 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox16() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox17() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox18() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox19() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox20() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox21() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox22() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox23() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">GIKUN37353</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Identifier</p>
            </div>
            <Sort2 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox16 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox17 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox18 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox19 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox20 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox21 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox22 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox23 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox24() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox25() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox26() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox27() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox28() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox29() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox30() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox31() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Gender</p>
            </div>
            <Sort3 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox24 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox25 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox26 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox27 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox28 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox29 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox30 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox31 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox32() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox33() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox34() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox35() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox36() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox37() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox38() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox39() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">2024/08/06 09:32:21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Date</p>
            </div>
            <Sort4 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox32 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox33 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox34 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox35 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox36 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox37 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox38 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox39 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox40() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox41() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox42() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Gasabo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox43() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Nyarugenge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox44() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox45() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox46() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox47() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">Kicukiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Adress</p>
            </div>
            <Sort5 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox40 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox41 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox42 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox43 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox44 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox45 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox46 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox47 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sort6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sort">
          <g id="Vector">
            <path d={svgPaths.p6c5100} fill="var(--fill-0, #CBD5E0)" />
            <path d={svgPaths.p1b9f3900} fill="var(--fill-0, #CBD5E0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleCheckbox48() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox49() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox50() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox51() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox52() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox53() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox54() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox55() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#111827] text-[12px]">
            <p className="leading-[1.6]">0789650093</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[183px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] tracking-[0.2px]">
              <p className="leading-[1.6]">Phone</p>
            </div>
            <Sort6 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox48 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox49 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox50 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox51 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox52 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox53 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox54 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
        <TitleCheckbox55 />
        <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action2() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox56() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action />
          <Action1 />
          <Action2 />
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox56 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action3() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action4() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action5() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox57() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action3 />
          <Action4 />
          <Action5 />
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox57 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Notif() {
  return (
    <div className="absolute bg-[#e03137] right-[-3px] rounded-[12px] size-[8px] top-[-2.5px]" data-name="Notif">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Action6() {
  return (
    <div className="bg-[#ffd023] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Notif />
    </div>
  );
}

function Action7() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action8() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox58() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action6 />
          <Action7 />
          <Action8 />
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox58 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action9() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action10() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action11() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox59() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action9 />
          <Action10 />
          <Action11 />
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox59 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action12() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action13() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action14() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox60() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action12 />
          <Action13 />
          <Action14 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox60 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action15() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action16() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action17() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox61() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action15 />
          <Action16 />
          <Action17 />
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox61 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action18() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action19() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action20() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox62() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action18 />
          <Action19 />
          <Action20 />
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox62 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Action21() {
  return (
    <div className="bg-[#ffd023] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="file-text">
        <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p182bf200} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc0e3f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23177080} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d664470} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35978b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action22() {
  return (
    <div className="bg-[#fe964a] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3c269900} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd630d80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe337fb0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21046d00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3856e00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d71480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Action23() {
  return (
    <div className="bg-[#2f78ee] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Action">
      <div className="relative shrink-0 size-[16px]" data-name="edit">
        <div className="absolute inset-[12.5%_14.6%_12.08%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6637 12.0665">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2a9a1280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p24a7e480} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleCheckbox63() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Title & Checkbox">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[16px] py-[19px] relative size-full">
          <Action21 />
          <Action22 />
          <Action23 />
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Table Cell">
      <TitleCheckbox63 />
      <div className="bg-[#e9eaec] h-px relative shrink-0 w-full" data-name="Devider">
        <div className="flex flex-row items-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]" data-name="Column">
      <div className="bg-[#fafafa] h-[56px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="Table Cell">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#687588] text-[12px] text-right tracking-[0.2px]">
              <p className="leading-[1.6]">Action</p>
            </div>
          </div>
        </div>
      </div>
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
    </div>
  );
}

function Prev() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Prev">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-left">
          <div className="absolute inset-[20.83%_33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p12acfc80} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p12acfc80} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p12acfc80} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p12acfc80} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f2f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Selection() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-center justify-center overflow-clip px-[15px] py-[5px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Selection">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function Selection1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-name="Selection">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">2</p>
    </div>
  );
}

function Selection2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-name="Selection">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function Selection3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[5px] relative shrink-0 size-[32px]" data-name="Selection">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">...</p>
    </div>
  );
}

function Selection4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative shrink-0 size-[32px]" data-name="Selection">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">10</p>
    </div>
  );
}

function Pages1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Pages">
      <Selection1 />
      <Selection2 />
      <Selection3 />
      <Selection4 />
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Number">
      <Selection />
      <Pages1 />
    </div>
  );
}

function Next() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Next">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
          <div className="absolute inset-[20.83%_33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path clipRule="evenodd" d={svgPaths.pf3bf470} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f2f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Pages">
      <Prev />
      <Number />
      <Next />
    </div>
  );
}

function Next1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Next">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">Show 8</p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-up">
          <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
              <path clipRule="evenodd" d={svgPaths.p3730b300} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f2f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ShowData() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Show Data">
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#687588] text-[12px] whitespace-nowrap">Showing 1 to 8 of 50 entries</p>
      <Next1 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white h-[835px] relative rounded-[16px] shrink-0 w-full" data-name="Table">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <Header />
          <Cta />
          <Table1 />
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Pagination">
            <Pages />
            <ShowData />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+63.5px)] px-[24px] top-[130px] w-[1215px]" data-name="Content">
      <Table />
    </div>
  );
}

function File() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file">
          <g id="Exclude">
            <path d={svgPaths.p2ec6000} fill="var(--fill-0, #2F78EE)" />
            <path d="M19 8H14V2L19 8Z" fill="var(--fill-0, #2F78EE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <File />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0 w-[113px]" data-name="Logo">
      <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0" data-name="Logo">
        <Group />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#111827] text-[24px] whitespace-nowrap">
          <p className="leading-[1.2]">eFiche</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-[54px] items-center min-w-px relative" data-name="Menu" />;
}

function InputArea2() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Area">
      <div aria-hidden className="absolute border border-[#e9eaec] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[10px] items-start px-[20px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#111827] text-[14px]">
          <p className="leading-[1.6]">Nurse</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0 size-[32px]" data-name="Message" />;
}

function Notif1() {
  return (
    <div className="absolute bg-[#e03137] right-0 rounded-[12px] size-[8px] top-0" data-name="Notif">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="message">
        <div className="absolute inset-[17.71%_13.54%_9.37%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2d8fa5c0} fill="var(--fill-0, #111827)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19176e00} fill="var(--fill-0, #111827)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p31e87900} fill="var(--fill-0, #111827)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Notif1 />
    </div>
  );
}

function Message1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0 size-[32px]" data-name="Message">
      <Icon />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Profile">
      <div className="relative shrink-0 size-[32px]" data-name="Avatar/Woman/1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgAvatarWoman3} width="32" />
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
        <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.66667">
            <path clipRule="evenodd" d={svgPaths.p3d779700} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightBlock() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[115px]" data-name="Right block">
      <Message />
      <Message1 />
      <Profile />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[36px] h-[96px] items-center px-[64px] py-[24px] right-0 top-0 w-[1312px]" data-name="Navigation">
      <div aria-hidden className="absolute border-[#e9eaec] border-b border-solid inset-0 pointer-events-none" />
      <Logo />
      <Menu />
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[150px]" data-name="Field">
        <InputArea2 />
      </div>
      <RightBlock />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[24px]" data-name="Name">
      <div className="relative shrink-0 size-[24px]" data-name="layout-grid">
        <div className="absolute inset-[13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p330f8dc0} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p330f8dc0} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p330f8dc0} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p330f8dc0} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27461f80} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27461f80} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27461f80} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27461f80} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p66aca80} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p66aca80} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p66aca80} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p66aca80} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p34ae0d00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p34ae0d00} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p34ae0d00} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p34ae0d00} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Menu1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <Name />
        </div>
      </div>
    </div>
  );
}

function UserPlus() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]" data-name="user-plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-plus">
          <path d={svgPaths.p35d24540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21b3b180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.667 6.6659V11.6659" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M19.167 9.1659H14.167" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <UserPlus />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[11.765px] items-start justify-center relative shrink-0 w-[23.529px]" data-name="Name">
      <Group1 />
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative rounded-[10px]" data-name="Menu">
      <Name1 />
    </div>
  );
}

function Checklist() {
  return (
    <div className="bg-[#2f78ee] h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Checklist">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Menu2 />
        </div>
      </div>
    </div>
  );
}

function Image10Traced() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image 10 - traced">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1534)" id="image 10 - traced">
          <g id="Vector">
            <path d={svgPaths.pbc98040} fill="var(--fill-0, #A0AEC0)" />
            <path d={svgPaths.pbc98040} fill="var(--fill-1, black)" fillOpacity="0.2" />
            <path d={svgPaths.pbc98040} fill="var(--fill-2, black)" fillOpacity="0.2" />
            <path d={svgPaths.pbc98040} fill="var(--fill-3, black)" fillOpacity="0.2" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2e17b800} fill="var(--fill-0, #A0AEC0)" />
            <path d={svgPaths.p2e17b800} fill="var(--fill-1, black)" fillOpacity="0.2" />
            <path d={svgPaths.p2e17b800} fill="var(--fill-2, black)" fillOpacity="0.2" />
            <path d={svgPaths.p2e17b800} fill="var(--fill-3, black)" fillOpacity="0.2" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p122c8d80} fill="var(--fill-0, #A0AEC0)" />
            <path d={svgPaths.p122c8d80} fill="var(--fill-1, black)" fillOpacity="0.2" />
            <path d={svgPaths.p122c8d80} fill="var(--fill-2, black)" fillOpacity="0.2" />
            <path d={svgPaths.p122c8d80} fill="var(--fill-3, black)" fillOpacity="0.2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1534">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative rounded-[10px]" data-name="Menu">
      <Image10Traced />
    </div>
  );
}

function Checklist1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Checklist">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Menu3 />
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[24px]" data-name="Name">
      <div className="relative shrink-0 size-[24px]" data-name="calendar">
        <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 19.5">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p50b380} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p50b380} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p50b380} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p50b380} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p373d4700} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p373d4700} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p373d4700} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p373d4700} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p8b7100} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p8b7100} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p8b7100} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p8b7100} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c954e70} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c954e70} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c954e70} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c954e70} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p36d3ef00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p36d3ef00} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p36d3ef00} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p36d3ef00} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf898280} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf898280} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf898280} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf898280} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Menu4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative rounded-[10px]" data-name="Menu">
      <Name2 />
    </div>
  );
}

function Checklist2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Checklist">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Menu4 />
        </div>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[21.6px]" data-name="Name">
      <div className="relative shrink-0 size-[24px]" data-name="clipboard-list">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <g id="Vector">
              <path d={svgPaths.p199b5900} fill="var(--fill-0, #A0AEC0)" />
              <path d={svgPaths.p199b5900} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p199b5900} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p199b5900} fill="var(--fill-3, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3d6d1d40} fill="var(--fill-0, #A0AEC0)" />
              <path d={svgPaths.p3d6d1d40} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3d6d1d40} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3d6d1d40} fill="var(--fill-3, black)" fillOpacity="0.2" />
              <path d={svgPaths.p28696b80} fill="var(--fill-0, #A0AEC0)" />
              <path d={svgPaths.p28696b80} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p28696b80} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p28696b80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              <path d={svgPaths.p13ac540} fill="var(--fill-0, #A0AEC0)" />
              <path d={svgPaths.p13ac540} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p13ac540} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p13ac540} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Menu5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative rounded-[10px]" data-name="Menu">
      <Name3 />
    </div>
  );
}

function Checklist3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Checklist">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Menu5 />
        </div>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[24px]" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="users">
        <div className="absolute inset-[9.38%_9.37%_9.38%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3a2c7880} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3a2c7880} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3a2c7880} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3a2c7880} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p341a1c00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p341a1c00} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p341a1c00} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p341a1c00} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1457b200} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1457b200} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1457b200} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1457b200} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e277c00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e277c00} fill="var(--fill-1, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e277c00} fill="var(--fill-2, black)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e277c00} fill="var(--fill-3, black)" fillOpacity="0.2" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Menu6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative rounded-[10px]" data-name="Menu">
      <Name4 />
    </div>
  );
}

function Checklist4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Checklist">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Menu6 />
        </div>
      </div>
    </div>
  );
}

function Menu7() {
  return <div className="h-[49px] relative rounded-[10px] shrink-0 w-full" data-name="Menu" />;
}

function Attendance() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Attendance">
      <Menu7 />
    </div>
  );
}

function Menu8() {
  return <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Menu" />;
}

function Employees() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Employees">
      <Menu8 />
    </div>
  );
}

function ListMenu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]" data-name="List Menu">
      <Menu1 />
      <Checklist />
      <Checklist1 />
      <Checklist2 />
      <Checklist3 />
      <Checklist4 />
      <Attendance />
      <Employees />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Top">
      <ListMenu />
    </div>
  );
}

export default function Consultations() {
  return (
    <div className="bg-[#f1f2f4] relative size-full" data-name="Consultations">
      <Content />
      <Navigation />
      <div className="absolute bg-white h-[991px] left-0 top-0" data-name="Sidebar">
        <div className="content-stretch flex flex-col items-start overflow-clip px-[32px] py-[24px] relative rounded-[inherit] size-full">
          <Top />
        </div>
        <div aria-hidden className="absolute border-[#e9eaec] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}