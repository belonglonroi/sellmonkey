import Image from "next/image";

const WhyUs = ({ why_us }) => {
  return (
    <section className="section" id="why-us">
      <div className="container px-4 xl:px-0 flex flex-col gap-[40px] md:gap-[80px]">
        <div className="flex flex-col gap-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-0">
            <div className="flex flex-col items-start gap-[10px]">
              <span className="badge">Why us</span>
              <h2 className="">Why we are considered the <br /><span className='text-primary'>best in business</span></h2>
            </div>
            <div className=" self-end">{why_us.description}</div>
          </div>

          <div className="h-[1px] w-full bg-[#D1D1D1]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[40px]">
          {why_us.benefit.map(({ title, subtitle, image, description }, index) => (
            <div key={index} className="flex flex-col relative items-center">
              <Image className="translate-y-[32%]" src={image} alt="alt" width={70} height={70} />
              <div className="p-[40px_10px] flex flex-col gap-4 bg-[#FEF2F3] rounded-[6px] flex-1">
                <div className="flex flex-col gap-[4px] items-center justify-center">
                  <span className='text-[1.2rem] font-bold'>{title}</span>
                  <span className="text-primary font-medium">{subtitle}</span>
                </div>
                <div className="text-center tracking-[0.01rem] font-medium">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[9px] relative">
          <div className="absolute hidden xl:flex gap-[9px] bg-no-repeat bg-center w-full h-full -translate-x-[110px] z-0" style={{
            backgroundImage: "url(/images/our-expertise-bg.png)"
          }}></div>

          <Image className="z-10 order-2 lg:order-1" src={why_us.our_expertise.image} alt="" width={617.35} height={435} />
          {/* <Image src={why_us.our_expertise.image} alt="" width={617.35} height={435} /> */}
          <div className="flex-1 order-1 lg:order-2 z-10 flex flex-col gap-8 md:gap-[70px] bg-no-repeat bg-center" style={{ backgroundImage: `url(${why_us.our_expertise.content_background})` }}>
            {
              why_us.our_expertise.contents.map(({ image, title, description }, idx) => (
                <div key={idx} className={`flex gap-8 items-start md:items-center transition-all ${idx === 0 ? 'xl:translate-x-[8%] max-w-[620px]' : idx === 1 ? 'xl:translate-x-[13%] max-w-[610px]' : 'max-w-[620px]'}`}>
                  <Image src={image} alt="" width={70} height={70} />
                  <div className="flex flex-col">
                    <span className="text-[1.2rem] font-bold">{title}</span>
                    <span className="font-medium text-[#333333]">{description}</span>
                  </div>
                </div>))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
