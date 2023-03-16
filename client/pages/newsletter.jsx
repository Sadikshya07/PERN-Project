import Head from "next/head";
import NewsletterCard from "../components/TermandAnalysisCard";
import Slider from "react-slick";
import HeroSectionCard from "../components/HeroSection";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionFinder from "./api/HeroSectionFinder";
import NewsLetterHeader from "../components/NewsLetterHeader";
import { useEffect, useState } from "react";

export default function TermSummary() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Newsletter");
        setHeroImage(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
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
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        <div className="m-6  px-9">
          <NewsLetterHeader title={"2079"} />
          <Slider {...settings}>
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
          </Slider>
          <NewsLetterHeader title={"2078"} />
          <Slider {...settings}>
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
            <NewsletterCard name="Newsletter- Falgun, 2079" />
          </Slider>
        </div>
      </HomeLayout>
    </>
  );
}
