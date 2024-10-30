import config from "@config/config.json";
import Image from "next/image";

const Footer = () => {
  const { logo, description, contact, address } = config.footer;

  const contactArray = Object.keys(contact).map((key) => ({
    [key]: contact[key],
  }));
  const contactKeys = Object.keys(contact);
  const addressArray = Object.keys(address).map((key) => ({
    [key]: address[key],
  }));
  const addressKeys = Object.keys(address);

  return (
    <footer className="section bg-[#272727] py-0 px-4 xl:p-0 text-white">
      <div className="container py-[40px]">
        {/* footer menu */}
        <div className="flex flex-col gap-[20px]">
          <Image src={logo} alt="" width={262} height={40} />

          <div className="flex flex-col lg:flex-row lg:gap-[40px]">
            <div className="flex-1 max-w-[504px] flex flex-col gap-[10px] justify-between p-[10px] md:p-0">
              <span className="font-bold">{description}</span>
              <span>--------------------------------------</span>
              <div className="flex flex-col gap-[15px]">
                {contactArray.map((c, idx) => (
                  <div key={idx} className="flex gap-[20px]">
                    <Image
                      src={`/images/${contactKeys[idx]}.svg`}
                      alt=""
                      width={24}
                      height={24}
                    />
                    {c[contactKeys[idx]]}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-[640px]">
              {addressArray.map((address, idx) => (
                <div key={idx} className="gap-[4px] leading-8 font-normal">
                  <span className="font-bold mr-2">
                    {addressKeys[idx]} Office:
                  </span>
                  {address[addressKeys[idx]]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container h-[1px] w-full bg-[#5F5F5F]"></div>
      <div className="container flex-col md:flex-row flex justify-between py-[24px] gap-[20px]">
        <span className="md:order-1 order-2">
          © 2024 SellMonkey. All Rights Reserved.
        </span>
        <div className="md:order-2 order-1 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          We accept:
          <Image
            src="/images/accepted-payment.png"
            alt=""
            width={298}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
