import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import { getListPage } from "../lib/contentParser";
import WhyUs from "@layouts/partials/WhyUs";
import JoinUs from "@layouts/partials/JoinUs";
import { cookies } from "next/headers";
import { i18n } from "next.config";

const Home = async () => {
  const locale = cookies().get("locale") || i18n.defaultLocale;

  const homePage = await getListPage(`content/_index.${locale.value}.md`);
  const { frontmatter } = homePage;
  const {
    banner,
    feature,
    services,
    workflow,
    call_to_action,
    why_us,
    join_us,
  } = frontmatter;

  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* Cta */}
      <Cta cta={call_to_action} />

      {/* Features */}
      <HomeFeatures feature={feature} />

      {/* services */}
      <Services services={services} />

      {/* Why us */}
      <WhyUs why_us={why_us} />

      <JoinUs join_us={join_us} />
    </>
  );
};

export default Home;
