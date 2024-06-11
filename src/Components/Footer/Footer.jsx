import React from "react";
import NewsLetter from "./Newsletter/Newsletter";
import MainFooter from "./MainFooter/MainFooter";
import BottomFooter from "./MainFooter/BottomFooter";


function Footer() {
  return (
    <section className="Footer-Section flex flex-col gap-2 w-full py-4 pt-10">
      <NewsLetter />
      <div className="MainFooter mt-8 px-2">
        <MainFooter />
      </div>
      <div className="">
      <hr className="border border-gray-500 max-w-7xl mx-auto"/>
      </div>
      <BottomFooter/>
    </section>
  );
}

export default Footer;
