import React from "react";
import NewsLetter from "./Newsletter/Newsletter";
import MainFooter from "./MainFooter/MainFooter";
import BottomFooter from "./MainFooter/BottomFooter";


function Footer() {
  return (
    <section className="Footer-Section flex flex-col p-3 gap-2 max-w-7xl mx-auto">
      <NewsLetter />
      <div className="mt-8">
        <MainFooter />
      </div>
      <hr className="border border-slate-950"/>
      <BottomFooter/>
    </section>
  );
}

export default Footer;
