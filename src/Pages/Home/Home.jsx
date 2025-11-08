import React from "react";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/PopularServices";
import ContentLayout from "../../Container/ContentLayout";
import WinterCare from "../../Components/WinterCare";
import ExpertVets from "../../Components/ExpertVets";
import WhyUs from "../../Components/WhyUs";
const Home = () => {
  return (
    <main>
      <section>
        <Hero></Hero>
      </section>
      <ContentLayout>
        <section className="my-20">
          <Services />
        </section>
        <section>
          <WinterCare/>
        </section>
        <section className="mb-20 mt-12">
          <ExpertVets/>
        </section>
      <section>
        <WhyUs/>
      </section>
      </ContentLayout>
    </main>
  );
};

export default Home;
