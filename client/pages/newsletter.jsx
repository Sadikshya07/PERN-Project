import Head from "next/head";
import NewsletterCard from "../components/TermandAnalysisCard";
import Slider from "react-slick";
import HeroSection from "../components/HeroSection";
import HomeLayout from "../components/Layouts/HomeLayout";
import NewsLetterHeader from "../components/NewsLetterHeader";

export default function TermSummary() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSection title="Newsletter" />
        <div className="m-6  px-9">
          <NewsLetterHeader title={"2079"} />
          <Slider {...settings}>
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
          </Slider>
          <NewsLetterHeader title={"2078"} />
          <Slider {...settings}>
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
            <NewsletterCard />
          </Slider>
        </div>
      </HomeLayout>
    </>
  );
}
