import { useState } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import HeroContainer from "../components/HeroContainer";
import TripLowerContainer from "../Frame 764";
import TripUpperContainer from "../components/TripUpperContainer";
import MentorshipCards from "../components/MentorshipCards";

const Desktop = () => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);

  const onHomeClick = () => {
    const anchor = document.querySelector("[data-scroll-to='hero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const onTravelClick = () => {
    const anchor = document.querySelector("[data-scroll-to='trip']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const onMentorshipClick = () => {
    const anchor = document.querySelector("[data-scroll-to='mentor1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onHireClick = () => {
    const anchor = document.querySelector("[data-scroll-to='talents']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const openDropMenu = () => {
    setDropMenuOpen(true);
  };

  const closeDropMenu = () => {
    setDropMenuOpen(false);
  };

  return (
    <>
      <div className="w-full relative bg-warm-white flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border gap-[20px]">
        <header
          className="self-stretch bg-warm-white h-[60px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-4 box-border"
          id="navbar"
        >
          <div className="w-full h-[60px] flex flex-row items-center justify-between max-w-[1280px]">
            <img
              className="w-[116.7px] relative h-[30.2px] object-cover"
              alt="logo"
              src="/logo@2x.png"
            />
            <ul
              className="m-0 flex-1 flex flex-row items-center justify-between py-0 px-2.5 box-border max-w-[696px] md:hidden"
              id="menu "
            >
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 relative text-2xl leading-[150%] font-bold font-caption text-gray-100 text-left inline-block hover:text-2xl hover:text-extra-stuff-70-blak active:text-primary-black"
                onClick={onHomeClick}
              >
                Home
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 relative text-2xl leading-[150%] font-bold font-caption text-primary-black text-left inline-block hover:text-extra-stuff-70-blak active:text-primary-black"
                onClick={onTravelClick}
              >
                Travel
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 relative text-2xl leading-[150%] font-bold font-caption text-gray-100 text-left inline-block hover:text-extra-stuff-70-blak active:text-primary-black"
                onClick={onMentorshipClick}
              >
                Mentorship
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 relative text-2xl leading-[150%] font-bold font-caption text-primary-black text-left inline-block hover:text-extra-stuff-70-blak"
                onClick={onHireClick}
              >{`Hire `}</button>
            </ul>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[195px] flex flex-row items-center justify-end md:hidden"
              id="contactUs"
            >
              <button className="cursor-pointer [border:none] py-2.5 px-5 bg-buttons-primary rounded-6xl flex flex-row items-center justify-center hover:bg-white hover:box-border hover:border-[3px] hover:border-solid hover:border-buttons-primary">
                <b className="relative text-lg leading-[150%] font-caption text-warm-white whitespace-pre-wrap text-left hover:text-primary-black">
                  Contact US
                </b>
              </button>
            </button>
            <div
              className="hidden flex-col items-start justify-start cursor-pointer lg:hidden md:flex"
              onClick={openDropMenu}
            >
              <img
                className="w-[32.8px] relative h-6 object-cover"
                alt="burger"
                src="/burger@2x.png"
              />
            </div>
          </div>
        </header>
        <main
          className="self-stretch flex flex-col items-center justify-start pt-[19px] px-5 pb-0 gap-[100px]"
          id="body"
        >
          <HeroContainer />
          <section
            className="w-full flex flex-col items-center justify-center py-[9px] px-0 box-border relative gap-[30px] max-w-[1280px] text-left text-36xl text-black font-caption"
            id="discover"
            data-scroll-to="trip"
          >
            <h2 className="m-0 w-[1280px] relative text-inherit font-black font-inherit inline-block min-w-[360px] z-[0]">
              <span>
                <span className="leading-[140%]">Discover new</span>
                <span className="leading-[120%]">{` `}</span>
              </span>
              <span className="leading-[140%] text-orange-100">
                <span>{`places `}</span>
                <span className="text-gray-200">with</span>
                <span className="text-orange-100"> ANNA</span>
                <span className="text-black">{` `}</span>
              </span>
            </h2>
            <div className="w-[1280px] relative text-[14.1px] leading-[120%] text-right inline-block z-[1]">
              {" "}
              * Experience Unique Cultures, and create Lifetime Memories.
            </div>
            <img
              className="w-[1909.9px] absolute my-0 mx-[!important] top-[calc(50%_-_164.7px)] right-[-35.9px] max-w-full overflow-hidden h-[578.1px] shrink-0 object-cover z-[2]"
              alt="discovery-line"
              loading="eager"
              src="/discovery-line@2x.png"
            />
            <div className="w-[1280px] h-[662px] flex flex-row items-center justify-center p-2.5 box-border gap-[72px] z-[3]">
              <TripLowerContainer
                locationDescription="VI Annex"
                locationSubtitle="Lagos, Nigeria"
                priceRange="$20"
              />
              <TripUpperContainer />
              <TripLowerContainer
                locationDescription="Kgalagadi Annex"
                locationSubtitle="Kgalagadi, Botswana"
                priceRange="$60"
                propPadding="0px 0px 50px"
                propBorderRadius="487.82px 487.82px 15.98px 15.98px"
                propBackgroundImage="url('/frame-32@3x.png')"
                frameDivWidth="357.2px"
              />
            </div>
          </section>
          <section
            className="w-full flex flex-col items-start justify-start gap-[60px] max-w-[1280px] relative text-left text-36xl text-gray-200 font-caption"
            id="mentor"
          >
            <h2 className="m-0 w-full relative text-inherit leading-[140%] font-black font-inherit inline-block max-w-[674.739990234375px]">
              <span>How to connect with the right</span>
              <span className="text-primary-black">{` `}</span>
              <span className="text-orange-200">{`mentors `}</span>
              <span>?</span>
            </h2>
            <MentorshipCards
              imageDimensions="/text_img@2x.png"
              dimensionText="/text_icon@2x.png"
              answerMedia="Text Answer"
              businessMentorText="Connect instantly with top business mentors in Africa via text."
            />
            <MentorshipCards
              imageDimensions="/video-message-1@2x.png"
              dimensionText="/video-icon@2x.png"
              answerMedia="Video Answer"
              businessMentorText="Get personalized video answers from industry experts to your specific questions"
              propBorderRadius="unset"
              propFlexDirection="column"
              propFlex="unset"
              propWidth="100%"
              propOverflow="hidden"
            />
            <MentorshipCards
              imageDimensions="/video-call-1@2x.png"
              dimensionText="/video-call@2x.png"
              answerMedia="Live Meeting"
              businessMentorText="Get personalized answers in a one-on-one video call with our experts. "
              propBorderRadius="unset"
              propFlexDirection="column"
              propFlex="unset"
              propWidth="100%"
              propOverflow="hidden"
            />
            <div
              className="absolute left-[0] top-[-100px]"
              data-scroll-to="mentor1"
            />
          </section>
          <section
            className="w-full flex flex-col items-start justify-start py-[60px] px-0 box-border gap-[60px] max-w-[1280px] text-center text-36xl text-primary-black font-caption"
            id="stories"
          >
            <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
              <h2 className="m-0 w-full relative text-inherit leading-[140%] font-black font-inherit inline-block max-w-[865px]">
                <span>{`We've handpicked stories from our featured `}</span>
                <span className="text-orange-200">mentors</span>
                <span> to enhance your connection with them</span>
              </h2>
              <p className="m-0 w-full relative text-4xl leading-[170%] inline-block max-w-[865px]">
                Dive into the lives of your mentors through their captivating
                documentaries. Uncover the wisdom and experiences that shaped
                their paths. Let their stories inspire and guide you.
              </p>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center text-left text-16xl text-warm-white">
              <div className="self-stretch rounded-[36.53px] h-[617px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[255.52000427246094px] px-10 pb-10 box-border gap-[113px] bg-[url('/public/frame-43@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <img
                    className="w-[72.3px] relative h-[81.7px] object-cover"
                    alt="playIcon"
                    loading="eager"
                    src="/play-icon@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4.96px]">
                  <div className="flex flex-col items-start justify-start">
                    <h4 className="m-0 relative text-inherit leading-[140%] font-medium font-inherit">
                      Code to Corner Office
                    </h4>
                  </div>
                  <h6 className="m-0 relative text-4xl leading-[150%] font-normal font-inherit text-gray-500">
                    Jackson Mac | 30min+
                  </h6>
                </div>
              </div>
            </div>
          </section>
          <section
            className="w-full flex flex-row flex-wrap items-center justify-start gap-[30px_100px] max-w-[1280px] text-left text-36xl text-primary-black font-caption"
            id="payment"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-[43px] min-w-[320px]">
              <img
                className="w-full relative max-w-[440px] overflow-hidden h-[341.3px] shrink-0 object-cover min-w-[320px]"
                alt="cardIllustration"
                loading="lazy"
                src="/card-illustration-1@2x.png"
              />
              <div className="w-full relative rounded-[50%] [background:linear-gradient(-90deg,_rgba(6,_10,_5,_0.4),_rgba(6,_10,_5,_0))] [filter:blur(39.4px)] h-[31.4px] min-w-[320px] max-w-[440px]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 pr-[50px] pl-[45px] box-border gap-[30px] min-w-[320px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[140%] font-black font-inherit">
                <span>{`Smooth payments with `}</span>
                <span className="text-orange-200">ANNA</span>
              </h2>
              <p className="m-0 self-stretch relative text-4xl leading-[170%]">
                Effortlessly manage all your Anna-related transactions,
                including reservations and call bookings, with the versatile
                Anna token; and streamline your in-person payments through the
                added convenience and reliability of the Anna debit card.
              </p>
            </div>
          </section>
          <section
            className="w-full flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-[68px] box-border gap-[100px] max-w-[1280px] text-left text-36xl text-black font-caption"
            id="talent"
            data-scroll-to="talents"
          >
            <div className="flex-1 flex flex-col items-center justify-center py-0 pr-[50px] pl-[45px] box-border gap-[30px] min-w-[320px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[140%] font-black font-inherit whitespace-pre-wrap">
                <span className="text-primary-black">Connect with</span>
                <span>{` `}</span>
                <span className="text-orange-100">emerging talent</span>
                <span>{` `}</span>
              </h2>
              <p className="m-0 self-stretch relative text-4xl leading-[170%] text-primary-black">
                Join us in setting the bar higher in Africa. Our diverse and
                skilled professionals are reshaping the future. Discover
                excellence, hire African talent.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[30px] min-w-[440px] text-[13.9px] text-primary-black">
              <div className="w-[437.8px] h-[395.4px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="w-[342.7px] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="w-[342.7px] relative h-[384.7px] object-cover"
                    alt="talentImg"
                    loading="lazy"
                    src="/talent-img@2x.png"
                  />
                </div>
                <div className="w-[402.8px] flex flex-col items-end justify-center mt-[-84px]">
                  <div className="w-[219.6px] rounded-[9.06px] bg-warm-white shadow-[0px_8.6px_12.74px_rgba(0,_0,_0,_0.25),_0px_1.4px_12.74px_rgba(0,_0,_0,_0.25),_-8.6px_0px_12.74px_rgba(0,_0,_0,_0.25),_8.6px_0px_12.66px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start p-[12.08123779296875px] box-border gap-[9.06px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-between">
                        <b className="relative leading-[120%]">{`Web Development `}</b>
                        <div className="flex flex-row items-center justify-start gap-[4.83px] text-[12.1px]">
                          <img
                            className="w-[12.1px] relative h-[11.5px] object-cover"
                            alt="starIcon"
                            loading="eager"
                            src="/star-icon@2x.png"
                          />
                          <b className="relative leading-[120%]">4.9</b>
                        </div>
                      </div>
                      <div className="relative text-xs leading-[120%] text-extra-stuff-70-blak">
                        Gaborone, Botswana
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[9.06px] text-xs">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-[12.1px] relative h-[13.8px] object-cover"
                          alt="completeIcon"
                          loading="eager"
                          src="/vector-complete@2x.png"
                        />
                      </div>
                      <div className="relative leading-[120%]">
                        94% Job completion
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[50%] [background:linear-gradient(-90deg,_rgba(6,_10,_5,_0.4),_rgba(6,_10,_5,_0))] [filter:blur(39.4px)] h-[31.4px] min-w-[440px] max-w-[440px]" />
            </div>
          </section>
        </main>
        <footer
          className="self-stretch bg-buttons-primary flex flex-col items-center justify-center pt-9 px-5 pb-5 gap-[170px] text-left text-xs text-background font-caption"
          id="footer"
        >
          <div className="w-full overflow-hidden flex flex-row flex-wrap items-start justify-between max-w-[1280px]">
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] min-w-[152px]">
              <img
                className="w-[110px] relative h-[28.5px] object-cover"
                alt="logoAlt"
                src="/logo-alt@2x.png"
              />
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch relative leading-[150%]">
                  One-Stop Shop for All Things Africa
                </div>
                <ul
                  className="m-0 w-full flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-[462px]"
                  id="footerMenu"
                >
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[120%] font-bold font-caption text-white text-left inline-block hover:text-lightgray">
                    Home
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[120%] font-bold font-caption text-white text-left inline-block hover:text-lightgray">{`Travel `}</button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[120%] font-bold font-caption text-white text-left inline-block hover:text-lightgray">
                    Mentorship
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[120%] font-bold font-caption text-white text-left inline-block hover:text-lightgray">
                    Hire
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[120%] font-bold font-caption text-white text-left inline-block hover:text-lightgray">
                    Contact
                  </button>
                </ul>
              </div>
            </div>
            <div
              className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[152px] max-w-[522px] text-25xl"
              data-scroll-to="frameContainer"
            >
              <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit">{`Get in touch `}</h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg text-white">
                <p className="m-0 self-stretch relative leading-[170%] whitespace-pre-wrap">{`Stay in the loop.  Join our newsletter for the latest news and updates awaits! `}</p>
                <div className="self-stretch rounded-[51px] bg-background flex flex-row items-center justify-start py-0.5 pr-0.5 pl-5 gap-[30px] border-[1px] border-solid border-extra-stuff-dark-white">
                  <input
                    className="[border:none] [outline:none] font-caption text-mini bg-[transparent] self-stretch flex-1 relative leading-[150%] text-extra-stuff-70-blak text-left flex items-center"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="cursor-pointer [border:none] p-3 bg-primary-greeen rounded-[81px] flex flex-row items-center justify-start hover:bg-white hover:box-border hover:border-[3px] hover:border-solid hover:border-buttons-primary">
                    <b className="relative text-lg leading-[120%] font-caption text-background text-left hover:text-primary-black">
                      Subscribe
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-end justify-between max-w-[1280px] text-white">
            <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[20px] min-w-[152px]">
              <div className="relative leading-[150%]">ANNA © 2023</div>
              <div className="relative leading-[150%] hover:text-lightgray">
                Terms of Use
              </div>
              <div className="relative leading-[150%] hover:text-lightgray">
                Privacy Policy
              </div>
            </div>
            <div className="flex-1 flex flex-row flex-wrap items-center justify-end gap-[26px] min-w-[152px]">
              <img
                className="w-[22.4px] relative h-[22.4px] object-cover hover:bg-lightgray"
                alt="InstagramIcon"
                loading="eager"
                src="/Instagram@2x.png"
              />
              <img
                className="w-[22.4px] relative h-[22.4px] object-cover hover:bg-lightgray"
                alt="facebook"
                src="/facebook-icon@2x.png"
              />
              <img
                className="w-[22.4px] relative h-[22.4px] hover:bg-lightgray"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </footer>
      </div>
      {isDropMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropMenu}
        >
          <DropMenu onClose={closeDropMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop;
