// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";

import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";
import webShowcase from "../../assets/Website Image-1.png";
import appShowcase from "../../assets/Website Image-2.png";
import brandShowcase from "../../assets/Website Image-3.png";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  min-height: calc(34rem + 10vw);
  padding: clamp(5rem, 8vw, 8rem) 0 clamp(3.5rem, 6vw, 5rem);
  background:
    radial-gradient(circle at 12% 18%, rgba(192, 132, 252, 0.35), transparent 45%),
    radial-gradient(circle at 85% 10%, rgba(109, 40, 217, 0.32), transparent 40%),
    linear-gradient(145deg, #090f1f 0%, #111a38 50%, #1d1749 100%);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 7rem;
  @media only Screen and (max-width: 48em) {
    min-height: auto;
    padding-bottom: 4rem;
  }
`;

const MainContent = styled.div`
  width: min(78rem, 92vw);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  align-items: center;
  gap: clamp(2rem, 4vw, 5rem);
  position: relative;
  z-index: 2;
  @media only Screen and (max-width: 64em) {
    width: min(78rem, 90vw);
  }
  @media only Screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    width: min(78rem, 88vw);
    text-align: center;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    align-items: center;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #eef2ff;
  font-weight: 700;
  font-size: clamp(0.75rem, 0.5rem + 0.3vw, 0.95rem);
  padding: 0.55rem 1.15rem;
  border-radius: 999px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: linear-gradient(120deg, #c084fc 0%, #818cf8 100%);
  margin-right: 0.6rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 1.4rem + 2.2vw, 3.5rem);
  line-height: 1.1;
  padding: 1rem 0;
  max-width: 14ch;
`;

const SubText = styled.p`
  font-size: clamp(0.95rem, 0.82rem + 0.35vw, 1.15rem);
  color: var(--text-on-dark);
  max-width: 56ch;
`;

const CTA = styled.button`
  background: linear-gradient(120deg, #f8fafc 0%, #ddd6fe 100%);
  color: #1e1b4b;
  padding: 0.75rem 1.35rem;
  margin-top: 1.6rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: clamp(0.85rem, 0.74rem + 0.2vw, 1rem);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  box-shadow: 0 0.9rem 2rem rgba(129, 140, 248, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  img {
    width: 1.3rem;
  }
  &:hover {
    transform: translateY(-0.12rem);
    box-shadow: 0 1.2rem 2.1rem rgba(129, 140, 248, 0.4);
  }
  &:active {
    transform: translateY(0.08rem);
  }
`;

const VisualWrap = styled.div`
  position: relative;
  min-height: clamp(20rem, 24vw, 30rem);
  @media only Screen and (max-width: 48em) {
    width: min(30rem, 100%);
    margin: 0 auto;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 62%;
  aspect-ratio: 1;
  border-radius: 50%;
  right: 2%;
  top: 8%;
  background: radial-gradient(circle, rgba(192, 132, 252, 0.48) 0%, transparent 70%);
  filter: blur(4px);
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: clamp(15rem, 17vw + 12rem, 26rem);
  height: auto;
  position: absolute;
  right: 0;
  top: 6%;
  z-index: 3;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    position: relative;
    right: auto;
    top: auto;
    margin: 0 auto;
  }
`;

const ShowcaseCard = styled.div`
  width: clamp(8.5rem, 8vw + 4rem, 13rem);
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  z-index: ${(props) => props.$z};
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(15, 23, 42, 0.6);
  box-shadow: 0 1rem 2.2rem rgba(15, 23, 42, 0.4);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const CardTag = styled.span`
  position: absolute;
  bottom: 0.45rem;
  left: 0.45rem;
  right: 0.45rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.75);
  color: #f8fafc;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.25rem 0.45rem;
  text-align: center;
`;

const OverlayGrain = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 45%
  );
  pointer-events: none;
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Blobs>
        <OverlayGrain />
        <Glow />
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>Premium digital experiences</span>
          </Topic>
          <Title>Building digital products that create measurable business growth</Title>
          <SubText>
            At Trionox, we partner with startups, scaleups, and enterprises to design, launch, and grow polished digital platforms with clarity, speed, and long-term value.
          </SubText>
          <CTA>
            Start your project
            <img src={arrow} alt="cta" width="100" height="100" />
          </CTA>
        </Lb>

        <VisualWrap>
          <MobileSvg src={Mobile} alt="Mobile product showcase" width="400" height="400" />
          <ShowcaseCard $left="2%" $top="8%" $z="2">
            <img src={webShowcase} alt="Website interface preview" width="320" height="200" />
            <CardTag>Web Product</CardTag>
          </ShowcaseCard>
          <ShowcaseCard $left="8%" $top="58%" $z="2">
            <img src={appShowcase} alt="Application screen preview" width="320" height="200" />
            <CardTag>App Experience</CardTag>
          </ShowcaseCard>
          <ShowcaseCard $left="56%" $top="66%" $z="4">
            <img src={brandShowcase} alt="Brand interface mockup" width="320" height="200" />
            <CardTag>Brand Systems</CardTag>
          </ShowcaseCard>
        </VisualWrap>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
