import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section relative bg-cover bg-center bg-no-repeat pb-[100px] h-[60dvh] md:h-[80dvh] md:mb-[150px]" id="home-banner" style={{
      backgroundImage: "url(" + banner.background + ")"
    }}>
      <div className="container">
        <div className="text-center">
          <h1 className="font-primary font-bold text-white">
            Comprehensive <span className="text-primary">Cross-Border</span> E-Commerce Solution
          </h1>
          <p className="mt-4 text-white">{markdownify(banner.content)}</p>
          {banner.button.enable && (
            <Link
              className="btn btn-secondary mt-4"
              href={banner.button.link}
              rel={banner.button.rel}
            >
              {banner.button.label}
            </Link>
          )}
        </div>
      </div>
      <Image
        className="md:absolute left-[50%] -bottom-[20%] md:-translate-x-[50%] mx-auto p-3 pt-[70px]"
        src={banner.image}
        alt="banner image"
        width={878}
        height={440}
      />
    </section>
  );
};

export default HomeBanner;
