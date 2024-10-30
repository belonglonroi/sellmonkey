import Image from "next/image";

const Services = ({ services }) => {
  return (
    <section className="section" id="our-values" style={{
      backgroundImage: "url(/images/home-background-our-value.png)"
    }}>
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-[896px] mx-auto">
          <div className="mb-[30px]">
            <span className="badge bg-white">Our Values</span>
          </div>
          <h2 className="text-white"><span className="text-primary">Empowering Vietnamese</span> Businesses for Sustainable Global Growth</h2>
        </div>
        <div className="mt-[50px] grid gap-[60px] grid-cols-1">
          {services.map((item, index) => {
            const isOdd = index % 2 > 0;
            return (
              <div
                className="our-card"
                key={`our-values-${index}`}
              >
                <div className="row items-center justify-center">
                  <div className={`md:col-6 lg:col-6 ${isOdd && "order-2"}`}>
                    <div className="">
                      <p className="font-bold">{item.title}</p>
                      <p className="mt-5 leading-6">{item.content}</p>
                    </div>
                  </div>
                  <div className={`md:col-6 lg:col-6 ${isOdd && "order-1"}`}>
                    {item.image && (
                      <Image
                        className="w-full"
                        src={item.image}
                        width={534}
                        height={397}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
