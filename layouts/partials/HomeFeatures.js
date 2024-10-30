import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeFeatures = ({ feature }) => {
  return (
    <section className="section" id="our-solutions">
      <div className="container px-4 lg:px-0">
        <div className="text-center">
          <div className="mb-[30px]">
            <span className="badge">Our Solutions</span>
          </div>
          <h2>
            <span className="text-primary">Wide Variety</span> of Services
          </h2>
        </div>

        <div className="flex flex-col gap-[40px] items-stretch">
          <div className="mt-8 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {feature.features.map((item, i) => (
              <div
                className="relative feature-card rounded-xl bg-white mb-[140px]"
                key={`feature-${i}`}
              >
                {item.image && (
                  <Image
                    className="w-full"
                    src={item.image}
                    width={315}
                    height={491}
                    alt=""
                  />
                )}
                <div className="feature-card-content">
                  <p className="font-bold">{markdownify(item.name)}</p>
                  <p className="mt-5 leading-6">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {feature.button.enable && (
            <Link
              className="btn btn-primary self-center"
              href={feature.button.link}
              rel={feature.button.rel}
            >
              {feature.button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
