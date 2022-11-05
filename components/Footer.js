import React from "react";
import FooterSession from "./FooterSession";

const Footer = () => {
  return (
    <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4  gap-y-10 px-32 py-14">
      <FooterSession
        title="ABOUT"
        p1="Accessibility"
        p2="This is not a real site"
        p3="Its a pretty awesome clone"
        p4="Raferrals accepted"
        p5="papafam"
      />
      <FooterSession
        title="COMMUNITY"
        p1="Accessibility"
        p2="This is not a real site"
        p3="Its a pretty awesome clone"
        p4="Raferrals accepted"
        p5="thanks"
      />
      <FooterSession
        title="HOST"
        p1="Accessibility"
        p2="Presents"
        p3="Its a pretty awesome clone"
        p4="Raferrals accepted"
        p5="thanks"
      />
      <FooterSession
        title="SUPPORT"
        p1="Accessibility"
        p2="This is not a real site"
        p3="Its a pretty awesome clone"
        p4="Raferrals accepted"
        p5="thanks"
      />
    </div>
  );
};

export default Footer;
