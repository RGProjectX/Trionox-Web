import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import designIllustration from "../../assets/Design.svg";
import developIllustration from "../../assets/Develope.svg";
import supportIllustration from "../../assets/Support.svg";
import rocketIllustration from "../../assets/rocket image.png";

const services = [
  {
    topic: "Design",
    title: "We design product experiences people remember",
    description:
      "From discovery to polished interfaces, we shape meaningful digital experiences that are visually distinctive and easy to use.",
    illustration: designIllustration,
  },
  {
    topic: "Develop",
    title: "We build reliable web and mobile products",
    description:
      "We engineer scalable platforms and apps with modern technology stacks, clean architecture, and performance-first delivery.",
    illustration: developIllustration,
  },
  {
    topic: "Support",
    title: "We support your product long after launch",
    description:
      "After go-live, we stay involved with enhancements, optimization, maintenance, and technical guidance to keep growth on track.",
    illustration: supportIllustration,
  },
];

const ServiceSection = styled.section`
  width: 100vw;
  padding: 8rem 0 6rem;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Glow = styled.span`
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(109, 40, 217, 0.2), transparent 70%);
  z-index: -1;

  &.top {
    top: -10rem;
    left: -7rem;
  }

  &.bottom {
    right: -8rem;
    bottom: -12rem;
    background: radial-gradient(circle at center, rgba(192, 132, 252, 0.2), transparent 70%);
  }
`;

const Inner = styled.div`
  width: min(76rem, 88vw);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Header = styled.div`
  width: min(44rem, 100%);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--nav);
  color: var(--white);
  padding: 0.45rem 1rem;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
`;

const Dot = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--pink);
`;

const Title = styled.h1`
  color: var(--black);
  font-size: calc(1.7rem + 0.9vw);
  line-height: 1.2;
  margin-top: 1rem;
`;

const Lead = styled.p`
  margin-top: 1rem;
  color: var(--nav2);
  font-size: calc(0.8rem + 0.3vw);
  line-height: 1.75;
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const ServiceCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  border-radius: 14px;
  border: 1px solid rgba(109, 40, 217, 0.12);
  box-shadow: 0 1.25rem 2.5rem rgba(15, 23, 42, 0.07);
  padding: 1.4rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(125deg, rgba(109, 40, 217, 0.06), transparent 42%, rgba(192, 132, 252, 0.08));
    pointer-events: none;
  }

  @media only Screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    padding: 1.15rem;
    gap: 0.35rem;
  }
`;

const ServiceText = styled.div`
  position: relative;
  z-index: 1;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(49, 46, 129, 0.07);
  color: var(--nav);
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.35rem 0.8rem;
  margin-bottom: 0.8rem;
`;

const ServiceTitle = styled.h2`
  color: var(--black);
  font-size: calc(1.15rem + 0.5vw);
  line-height: 1.28;
`;

const ServiceDescription = styled.p`
  margin-top: 0.85rem;
  color: var(--nav2);
  line-height: 1.7;
  font-size: calc(0.78rem + 0.23vw);
`;

const IllustrationWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 16rem;

  @media only Screen and (max-width: 48em) {
    min-height: 12.5rem;
  }
`;

const Illustration = styled.img`
  width: min(18.5rem, 90%);
  max-height: 17rem;
  object-fit: contain;
  filter: drop-shadow(0 1rem 1.8rem rgba(109, 40, 217, 0.16));
`;

const Rocket = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  object-fit: contain;
  position: absolute;
  right: 5%;
  bottom: 8%;
  filter: drop-shadow(0 1rem 1.3rem rgba(15, 23, 42, 0.2));

  @media only Screen and (max-width: 48em) {
    width: 4.2rem;
    height: 4.2rem;
    right: 2%;
    bottom: 4%;
  }
`;

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const cards = cardRefs.current;

    const ctx = gsap.context(() => {
      if (!cards.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 64, scale: 0.98 });

      cards.forEach((card) => {
        const illustration = card.querySelector(".service-illustration");
        const chip = card.querySelector(".service-chip");
        const rocket = card.querySelector(".service-rocket");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "bottom 58%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.82,
            ease: "power3.out",
          })
          .fromTo(
            chip,
            { x: -18, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            0.08
          )
          .fromTo(
            illustration,
            { y: 26, rotation: -3, opacity: 0 },
            { y: 0, rotation: 0, opacity: 1, duration: 0.88, ease: "power2.out" },
            0.1
          )
          .fromTo(
            rocket,
            { y: 18, x: 6, rotate: -10, opacity: 0 },
            { y: 0, x: 0, rotate: 0, opacity: 1, duration: 0.65, ease: "back.out(1.5)" },
            0.24
          );
      });

      gsap.to(".services-glow.top", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".services-glow.bottom", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <ServiceSection id="services" ref={sectionRef}>
      <Glow className="services-glow top" aria-hidden="true" />
      <Glow className="services-glow bottom" aria-hidden="true" />

      <Inner>
        <Header>
          <Eyebrow>
            <Dot />
            What We Do
          </Eyebrow>
          <Title>Design, development, and support tailored for real business growth</Title>
          <Lead>
            We combine strategy, engineering, and delivery support to help teams launch faster, scale confidently, and keep product quality high at every stage.
          </Lead>
        </Header>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.topic} ref={addToRefs}>
              <ServiceText>
                <Chip className="service-chip">
                  <Dot />
                  {service.topic}
                </Chip>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceText>

              <IllustrationWrap>
                <Illustration
                  className="service-illustration"
                  src={service.illustration}
                  alt={`${service.topic} service illustration`}
                />
                <Rocket className="service-rocket" src={rocketIllustration} alt="Rocket illustration" />
              </IllustrationWrap>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Inner>
    </ServiceSection>
  );
};

export default Services;
