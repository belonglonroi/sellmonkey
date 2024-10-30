import Image from 'next/image'
import Link from "next/link";

const JoinUs = ({ join_us }) => {
  return (
    <section className="section" id="join-us">
      <div className='container flex px-4 xl:px-0 flex-col md:gap-[40px] lg:gap-[50px] items-stretch'>
        <h2 className="font-bold text-center">Unlock Global Opportunities with <span className="text-primary">SellMonkey!</span></h2>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          {join_us.map(({ image, title, description, button }, idx) => (
            <div key={idx} className="rounded-[8px] shadow-[0px_0px_50px_0px_#00000012] p-[40px] flex flex-col gap-[40px] items-center">
              <Image src={image} alt="alt" height={160} width={276} />
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-center">{title}</span>
                <span className="font-medium text-center">{description}</span>
              </div>
              {button.enable && (
                <Link
                  className="btn btn-primary"
                  href={button.link}
                  rel={button.rel}
                >
                  {button.label}
                </Link>
              )}
            </div>))}
        </div>
      </div>
    </section>
  )
}

export default JoinUs
