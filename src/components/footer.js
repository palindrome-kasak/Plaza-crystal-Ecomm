import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "About us",
      links: ["Mission", "Our team", "Awards", "Testimonials", "Privacy policy"],
    },
    {
      title: "Services",
      links: ["Web design", "Web development", "Mobile design", "UI/UX design", "Branding design"],
    },
    {
      title: "Portfolio",
      links: ["Corporate websites", "E-commerce", "Mobile apps", "Landing pages", "UI/UX projects"],
    },
  ];

  return (
    <footer className="flex justify-center items-center px-14 border border-solid shadow-sm bg-zinc-700 border-neutral-200 py-3">
      <div className="flex flex-col w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 justify-between px-20 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col self-start pt-12 text-neutral-200">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/210fa3b635e21bf9f5810bddc08ed3339365fe375d3aa839742d7591975d1a92?apiKey=3c689012da024eba8a07718e5161ccbe&" alt="Company logo" className="max-w-full aspect-[3.85] w-[145px]" />
            <p className="mt-6 text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </p>
            <div className="flex gap-1 justify-center px-5 py-3 mt-8 text-xs font-semibold tracking-wider leading-5 text-center uppercase border border-solid border-neutral-100 max-md:px-5">
              <div>Get started</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbde8f0a79633ef5c5ebe4e04bbfff6cc263582e0e42048f3e4a3e727fdc80bf?apiKey=3c689012da024eba8a07718e5161ccbe&" alt="" className="shrink-0 aspect-square w-[11px]" />
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40840b5ef8b09e1928244962b3d825f55a7d1587de5e72e2dd21d6e260783cf2?apiKey=3c689012da024eba8a07718e5161ccbe&" alt="" className="shrink-0 w-px border border-solid aspect-[0] border-neutral-300 stroke-[1px] stroke-neutral-300" />
          <div className="my-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm leading-5 text-neutral-200 max-md:mt-10">
                    <div className="text-base font-semibold tracking-wider leading-6 text-white uppercase">{section.title}</div>
                    {section.links.map((link, idx) => (
                      <div key={idx} className="justify-center mt-6 text-center text-neutral-200">{link}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="justify-center items-center p-8 text-base leading-6 text-center underline border-t border-solid border-neutral-300 text-zinc-500 max-md:px-5 max-md:max-w-full">
          <span className="leading-6 text-neutral-400">Copyright © 2023 Moon</span>
          <span className="leading-6 text-neutral-300">|</span>
          <span className="leading-6 text-neutral-400"> All Rights Reserved </span>
          <span className="leading-6 text-neutral-300">|</span>
          <span className="leading-6 underline text-zinc-500">Terms and Conditions</span>
          <span className="leading-6 text-neutral-300">|</span>
          <span className="leading-6 underline text-zinc-500">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
