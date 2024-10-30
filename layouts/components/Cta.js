import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section" id="about-us">
      <div className="container rounded-xl px-4 lg:px-0">
        <div className="row items-center justify-center">
          <div className="md:col-6 lg:col-6 order-2 md:order-1">
            <Image
              className="w-full md:pr-3"
              src={cta?.image}
              alt="about us image"
              width={640}
              height={408}
            />
          </div>
          <div className="mt-5 md:text-center md:col-6 lg:col-6 mb-[40px] md:mb-0 md:mt-0 md:text-left order-1 md:order-2">
            <div className="mb-3">
              <span className="badge">About us</span>
            </div>
            <h2><span className="text-primary">SellMonkey&apos;s</span> {markdownify(cta?.title)}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            <p className="mt-6 border-l border-black p-3 shadow-[0_0_20px_0_#00000026]">With a strategic focus on connecting manufacturers, sellers, sales channels, and support services, we offer a comprehensive and seamless process that maximizes efficiency and minimizes costs.</p>
            {cta.button.enable && (
              <Link
                className="btn btn-primary mt-6"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
