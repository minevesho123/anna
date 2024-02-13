const DropMenu = () => {
  return (
    <div className="w-[834px] relative bg-warm-white h-[1194px] flex flex-col items-start justify-between pt-[27px] px-0 pb-0 box-border max-w-full max-h-full overflow-auto text-left text-2xl text-gray-200 font-caption">
      <div className="self-stretch bg-warm-white h-[60px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-4 box-border">
        <div className="w-full h-[60px] flex flex-row items-center justify-between max-w-[1280px]">
          <img
            className="w-[116.7px] relative h-[30px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/african-nations-narrative-authority-2@2x.png"
          />
          <div className="flex flex-row items-start justify-start">
            <img
              className="w-[25.6px] relative h-[25.6px]"
              alt=""
              src="/frame-755.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-between p-8">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[60px]">
          <b className="relative leading-[150%] text-primary-black">Home</b>
          <b className="relative leading-[150%]">Travel</b>
          <b className="relative leading-[150%]">Mentorship</b>
          <b className="relative leading-[150%]">{`Hire `}</b>
          <div className="self-stretch rounded-6xl bg-darkslategray flex flex-row items-center justify-center py-2.5 px-5 text-[14px] text-warm-white">
            <b className="relative leading-[150%] whitespace-pre-wrap">
              Contact US
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-xs">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="relative leading-[150%]">ANNA © 2023</div>
            <div className="relative leading-[150%]">Terms of Use</div>
            <div className="relative leading-[150%]">Privacy Policy</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[26px]">
            <img
              className="w-[22.4px] relative h-[22.4px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[22.4px] relative h-[22.4px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[22.4px] relative h-[22.4px]"
              alt=""
              src="/group.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
