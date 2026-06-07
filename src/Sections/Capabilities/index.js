import { useState } from "react";
import styled from "styled-components";
import worldMap from "../../assets/world-map-outline.svg";
import fintechIcon from "../../assets/industry-fintech.svg";
import insurtechIcon from "../../assets/industry-insurtech.svg";
import retailIcon from "../../assets/industry-retail.svg";
import realEstateIcon from "../../assets/industry-realestate.svg";

// Tool stack logos
import figmaLogo from "../../assets/logos/figma.svg";
import sketchLogo from "../../assets/logos/sketch.svg";
import adobexdLogo from "../../assets/logos/adobexd.svg";
import photoshopLogo from "../../assets/logos/photoshop.svg";
import illustratorLogo from "../../assets/logos/illustrator.svg";
import lightroomLogo from "../../assets/logos/lightroom.svg";
import wordpressLogo from "../../assets/logos/wordpress.svg";
import shopifyLogo from "../../assets/logos/shopify.svg";
import framerLogo from "../../assets/logos/framer.svg";
import webflowLogo from "../../assets/logos/webflow.svg";
import reactLogo from "../../assets/logos/react.svg";
import nextjsLogo from "../../assets/logos/nextjs.svg";
import tailwindLogo from "../../assets/logos/tailwind.svg";
import bootstrapLogo from "../../assets/logos/bootstrap.svg";
import radixuiLogo from "../../assets/logos/radixui.svg";
import htmlLogo from "../../assets/logos/html.svg";
import cssLogo from "../../assets/logos/css.svg";
import javascriptLogo from "../../assets/logos/javascript.svg";
import flutterLogo from "../../assets/logos/flutter.svg";
import flutterflowLogo from "../../assets/logos/flutterflow.svg";
import nodejsLogo from "../../assets/logos/nodejs.svg";
import expressLogo from "../../assets/logos/express.svg";
import mongodbLogo from "../../assets/logos/mongodb.svg";
import postgresqlLogo from "../../assets/logos/postgresql.svg";
import firebaseLogo from "../../assets/logos/firebase.svg";
import midjourneyLogo from "../../assets/logos/midjourney.svg";
import claudeLogo from "../../assets/logos/claude.svg";
import geminiLogo from "../../assets/logos/gemini.svg";
import chatgptLogo from "../../assets/logos/chatgpt.svg";
import copilotLogo from "../../assets/logos/copilot.svg";
import v0Logo from "../../assets/logos/v0.svg";
import n8nLogo from "../../assets/logos/n8n.svg";
import perplexityLogo from "../../assets/logos/perplexity.svg";
import aftereffectsLogo from "../../assets/logos/aftereffects.svg";
import riveLogo from "../../assets/logos/rive.svg";
import splineLogo from "../../assets/logos/spline.svg";
import gsapLogo from "../../assets/logos/gsap.svg";
import threejsLogo from "../../assets/logos/threejs.svg";
import lenisLogo from "../../assets/logos/lenis.svg";
import googlemeetLogo from "../../assets/logos/googlemeet.svg";
import zoomLogo from "../../assets/logos/zoom.svg";
import slackLogo from "../../assets/logos/slack.svg";
import notionLogo from "../../assets/logos/notion.svg";
import jiraLogo from "../../assets/logos/jira.svg";
import discordLogo from "../../assets/logos/discord.svg";

const toolStack = [
  {
    category: "Design",
    tools: [
      { name: "Figma", logo: figmaLogo },
      { name: "Sketch", logo: sketchLogo },
      { name: "Adobe XD", logo: adobexdLogo },
      { name: "Photoshop", logo: photoshopLogo },
      { name: "Illustrator", logo: illustratorLogo },
      { name: "Lightroom", logo: lightroomLogo },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "WordPress", logo: wordpressLogo },
      { name: "Shopify", logo: shopifyLogo },
      { name: "Framer", logo: framerLogo },
      { name: "Webflow", logo: webflowLogo },
      { name: "ReactJS", logo: reactLogo },
      { name: "NextJS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Radix UI", logo: radixuiLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Flutter", logo: flutterLogo },
      { name: "FlutterFlow", logo: flutterflowLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    category: "Artificial Intelligence",
    tab: "AI",
    tools: [
      { name: "Midjourney", logo: midjourneyLogo },
      { name: "Claude", logo: claudeLogo },
      { name: "Gemini", logo: geminiLogo },
      { name: "ChatGPT", logo: chatgptLogo },
      { name: "Copilot", logo: copilotLogo },
      { name: "v0 Vercel", logo: v0Logo },
      { name: "n8n", logo: n8nLogo },
      { name: "Perplexity", logo: perplexityLogo },
    ],
  },
  {
    category: "Animation",
    tools: [
      { name: "After Effects", logo: aftereffectsLogo },
      { name: "Rive", logo: riveLogo },
      { name: "Spline", logo: splineLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Three JS", logo: threejsLogo },
      { name: "Lenis", logo: lenisLogo },
    ],
  },
  {
    category: "Project Management",
    tab: "Project Mgmt",
    tools: [
      { name: "Google Meet", logo: googlemeetLogo },
      { name: "Zoom", logo: zoomLogo },
      { name: "Slack", logo: slackLogo },
      { name: "Notion", logo: notionLogo },
      { name: "Jira", logo: jiraLogo },
      { name: "Discord", logo: discordLogo },
    ],
  },
];

const locations = [
  { country: "India", code: "IN", note: "Delivery and product engineering", x: 72, y: 38 },
  { country: "United Arab Emirates", code: "AE", note: "Business and startup partnerships", x: 65, y: 37 },
  { country: "United States", code: "US", note: "Scaleup and enterprise support", x: 23, y: 29 },
  { country: "United Kingdom", code: "UK", note: "Consulting and digital delivery", x: 49, y: 20 },
];

const industries = [
  { name: "Fintech", icon: fintechIcon, text: "Secure platforms for payments, wallets, lending, and digital finance." },
  { name: "InsurTech", icon: insurtechIcon, text: "Customer-first products for policy journeys, claims, and comparison engines." },
  { name: "Retail", icon: retailIcon, text: "Commerce, loyalty, POS, and operational tools for modern retail brands." },
  { name: "Real Estate", icon: realEstateIcon, text: "Listing, CRM, booking, and property workflow systems that scale." },
];

const Section = styled.section`
  width: 100vw;
  padding: 8rem 0 4rem;
  scroll-margin-top: 8rem;
  background: var(--background);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Inner = styled.div`
  width: min(74rem, 86vw);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media only Screen and (max-width: 40em) {
    width: 88vw;
    gap: 3rem;
  }
`;

const Header = styled.div`
  width: min(44rem, 100%);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: var(--nav);
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 20px;
`;

const Dot = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--pink);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  color: var(--black);
  font-size: calc(1.7rem + 1vw);
  line-height: 1.2;
  margin: 1rem 0;
`;

const Lead = styled.p`
  color: var(--nav2);
  font-size: calc(0.85rem + 0.35vw);
  line-height: 1.7;
`;

const Block = styled.div`
  position: relative;
`;

const BlockTitle = styled.h2`
  color: var(--black);
  display: inline-block;
  font-size: calc(1.1rem + 0.7vw);
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 55%;
    position: absolute;
    left: 0;
    bottom: -0.45rem;
    border-bottom: 3px solid var(--purple);
    border-radius: 10px;
  }
`;

const ToggleBar = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  background: var(--white);
  border: 1px solid rgba(128, 59, 236, 0.18);
  border-radius: 999px;
  padding: 0.4rem;
  margin-bottom: 1.75rem;
  box-shadow: 0 1rem 2.5rem rgba(10, 11, 16, 0.06);

  @media only Screen and (max-width: 40em) {
    width: 100%;
    border-radius: 16px;
  }
`;

const TabButton = styled.button`
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 1.15rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.$active ? "var(--white)" : "var(--nav)")};
  background: ${(props) => (props.$active ? "var(--purple)" : "transparent")};
  transition: background 0.2s, color 0.2s;

  span {
    font-size: 0.7rem;
    font-weight: 700;
    color: ${(props) =>
      props.$active ? "rgba(255, 255, 255, 0.8)" : "rgba(53, 53, 63, 0.4)"};
  }

  &:hover {
    color: ${(props) => (props.$active ? "var(--white)" : "var(--purple)")};
  }

  @media only Screen and (max-width: 40em) {
    flex: 1 1 auto;
    justify-content: center;
    padding: 0.6rem 0.75rem;
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.85rem;

  @media only Screen and (max-width: 64em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media only Screen and (max-width: 40em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
  }
`;

const TechItem = styled.div`
  min-height: 6.5rem;
  background: var(--white);
  border: 2px solid rgba(229, 161, 248, 0.45);
  border-radius: 8px;
  color: var(--nav);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 1.1rem 0.5rem;
  text-align: center;
  box-shadow: 0 1.25rem 2.5rem rgba(10, 11, 16, 0.07);
  transition: transform 0.2s, border-color 0.2s;

  span {
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-0.3rem);
    border-color: var(--pink);
  }
`;

const TechLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    display: block;
  }
`;

const PresencePanel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  gap: 1rem;
  background-color: var(--black);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1.5rem 3rem rgba(10, 11, 16, 0.16);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    background-color: var(--purple);
    opacity: 0.16;
    position: absolute;
    right: -5rem;
    top: -7rem;
  }

  &::after {
    content: "";
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    background-color: var(--pink);
    opacity: 0.11;
    position: absolute;
    left: -5rem;
    bottom: -6rem;
  }

  @media only Screen and (max-width: 64em) {
    grid-template-columns: 1fr;
  }
`;

const MapStage = styled.div`
  min-height: 28rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media only Screen and (max-width: 40em) {
    min-height: 22rem;
    background-size: 2.5rem 2.5rem;
  }
`;

const MapViewport = styled.div`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 8rem;
  aspect-ratio: 2 / 1;
  z-index: 1;

  @media only Screen and (max-width: 40em) {
    left: 1rem;
    right: 1rem;
    top: 8.5rem;
  }
`;

const ActualMap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  opacity: 0.28;
  filter: invert(1);
`;

const RouteMap = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  z-index: 2;

  path {
    fill: none;
    stroke: var(--pink);
    stroke-width: 0.35;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 1.4 1.6;
    opacity: 0.85;
  }

  .route-strong {
    stroke: var(--purple);
    opacity: 0.95;
  }
`;

const MapTitle = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  color: var(--white);
  z-index: 2;

  h3 {
    font-size: calc(1rem + 0.7vw);
    margin-bottom: 0.4rem;
  }

  p {
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 18rem;
  }
`;

const MapPin = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background-color: var(--white);
  border: 0.3rem solid var(--purple);
  position: absolute;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 0 0 0 0.45rem rgba(128, 59, 236, 0.18), 0 0 1.5rem rgba(229, 161, 248, 0.65);

  &::after {
    content: attr(data-code);
    position: absolute;
    left: 50%;
    bottom: 1.05rem;
    transform: translateX(-50%);
    background-color: var(--white);
    color: var(--black);
    font-size: 0.68rem;
    font-weight: 800;
    padding: 0.25rem 0.45rem;
    border-radius: 20px;
    white-space: nowrap;
  }
`;

const PresenceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
`;

const PresenceItem = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 8px;
  padding: 1rem;
  color: var(--white);

  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  span {
    color: var(--pink);
    font-size: 0.8rem;
    font-weight: 800;
    margin-right: 0.65rem;
  }

  p {
    color: rgba(255, 255, 255, 0.68);
    line-height: 1.5;
  }
`;

const PresenceSummary = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.25rem;

  strong {
    color: var(--black);
    display: block;
    font-size: 2rem;
    line-height: 1;
  }

  p {
    color: var(--nav2);
  font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 0.4rem;
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;

  @media only Screen and (max-width: 64em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only Screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  border: 2px solid rgba(229, 161, 248, 0.45);
`;

const Icon = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;

  img {
    width: 1.6rem;
    height: 1.6rem;
    display: block;
  }
`;

const IndustryName = styled.h3`
  color: var(--black);
  font-size: 1.05rem;
  margin: 1.25rem 0 0.5rem;
`;

const IndustryText = styled.p`
  color: var(--nav2);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = toolStack[activeTab];

  return (
    <Section id="capabilities">
      <Inner>
        <Header>
          <Eyebrow>
            <Dot />
            Built to scale
          </Eyebrow>
          <Title>Technology, reach, and domain focus for serious product work</Title>
          <Lead>
            We combine modern engineering tools with practical delivery experience across global markets and high-growth industries.
          </Lead>
        </Header>

        <Block>
          <BlockTitle>Our Tech Stack</BlockTitle>
          <ToggleBar>
            {toolStack.map((group, index) => (
              <TabButton
                key={group.category}
                type="button"
                $active={index === activeTab}
                onClick={() => setActiveTab(index)}
              >
                {group.tab || group.category}
                <span>{group.tools.length}</span>
              </TabButton>
            ))}
          </ToggleBar>
          <StackGrid>
            {activeGroup.tools.map((tool) => (
              <TechItem key={tool.name}>
                <TechLogo>
                  <img src={tool.logo} alt={`${tool.name} logo`} />
                </TechLogo>
                <span>{tool.name}</span>
              </TechItem>
            ))}
          </StackGrid>
        </Block>

        <Block>
          <BlockTitle>Global Presence</BlockTitle>
          <PresencePanel>
            <MapStage>
              <MapTitle>
                <h3>Connected delivery across markets</h3>
                <p>Teams and partnerships positioned around major product and business hubs.</p>
              </MapTitle>
              <MapViewport>
                <ActualMap src={worldMap} alt="World map" />
                <RouteMap viewBox="0 0 100 50" aria-hidden="true">
                  <defs>
                    <marker
                      id="presence-arrow-pink"
                      markerHeight="4"
                      markerWidth="4"
                      orient="auto"
                      refX="3.5"
                      refY="2"
                      viewBox="0 0 4 4"
                    >
                      <path d="M0 0L4 2L0 4Z" fill="var(--pink)" />
                    </marker>
                    <marker
                      id="presence-arrow-purple"
                      markerHeight="4"
                      markerWidth="4"
                      orient="auto"
                      refX="3.5"
                      refY="2"
                      viewBox="0 0 4 4"
                    >
                      <path d="M0 0L4 2L0 4Z" fill="var(--purple)" />
                    </marker>
                  </defs>
                  {/* India -> US (y values are pin% / 2 to match the 0 0 100 50 viewBox) */}
                  <path
                    className="route-strong"
                    d="M69.5 18.8C58 11 38 9 26 14.8"
                    markerEnd="url(#presence-arrow-purple)"
                  />
                  {/* India -> UK */}
                  <path
                    d="M69.7 18.1C63 11 56 9 51.8 11.1"
                    markerEnd="url(#presence-arrow-pink)"
                  />
                  {/* India -> UAE */}
                  <path
                    d="M69.5 18.8C69 18 68.2 18.2 67.5 18.7"
                    markerEnd="url(#presence-arrow-pink)"
                  />
                </RouteMap>
                {locations.map((location) => (
                  <MapPin
                    key={location.country}
                    $x={location.x}
                    $y={location.y}
                    data-code={location.code}
                    title={location.country}
                  />
                ))}
              </MapViewport>
            </MapStage>
            <PresenceList>
              <PresenceSummary>
                <strong>4+</strong>
                <p>active regions supported by remote-first product teams.</p>
              </PresenceSummary>
              {locations.map((location) => (
                <PresenceItem key={location.country}>
                  <h3>
                    <span>{location.code}</span>
                    {location.country}
                  </h3>
                  <p>{location.note}</p>
                </PresenceItem>
              ))}
            </PresenceList>
          </PresencePanel>
        </Block>

        <Block>
          <BlockTitle>Industries We Serve</BlockTitle>
          <IndustryGrid>
            {industries.map((industry) => (
              <IndustryCard key={industry.name}>
                <Icon>
                  <img src={industry.icon} alt={`${industry.name} icon`} />
                </Icon>
                <IndustryName>{industry.name}</IndustryName>
                <IndustryText>{industry.text}</IndustryText>
              </IndustryCard>
            ))}
          </IndustryGrid>
        </Block>
      </Inner>
    </Section>
  );
};

export default Capabilities;
