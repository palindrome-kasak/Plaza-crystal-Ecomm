import * as React from "react";

// function SocialMediaIcon({ src, alt }) {
//   return (
//     <img
//       loading="lazy"
//       src={src}
//       alt={alt}
//       className="shrink-0 w-6 aspect-square"
//     />
//   );
// }

function ContactUs() {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-start px-16 max-w-full min-h-[545px] w-[1474px] max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7d0f4dc094157db709b6dd4de92dc08777d1ccb9c71660bca2495458831aa61?apiKey=3c689012da024eba8a07718e5161ccbe&"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="flex relative flex-col justify-center p-20 max-w-full bg-zinc-700 w-[429px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/108ca149c76b2301465c00f4df7c686b3aaf66ec53901917af6438ddf8f90147?apiKey=3c689012da024eba8a07718e5161ccbe&"
          className="self-center mt-10 aspect-[1.06] w-[86px]"
          alt=""
        />
        <div className="mt-11 text-4xl font-bold tracking-widest leading-10 text-center text-white max-md:mx-2 max-md:mt-10">
          CONTACT US
        </div>
        <div className="flex flex-col py-8 mt-8 mb-4 border-t border-solid border-neutral-300 max-md:mx-2">
          <div className="text-sm font-semibold leading-5 text-center text-white">
            Follow us on social media
          </div>
          <div className="flex gap-4 justify-center self-center pr-1.5 mt-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8b1a6d5ab8b1852dfe6f92bb2b15b911082e141e917af0349e4b588b2e6aa00?apiKey=3c689012da024eba8a07718e5161ccbe&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f9e01370939ef98912229fb81c39dd879bdfe17d792dfb4d6ccdcf3e1461250?apiKey=3c689012da024eba8a07718e5161ccbe&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29204db264d399c2aa1d20957c3c4d021a8f53efb6a2fcfc853793790ef9f0be?apiKey=3c689012da024eba8a07718e5161ccbe&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dbba4bbb5f413cca6998aa9ace47340626f06b469ce346b9b4d0226ae6e3579?apiKey=3c689012da024eba8a07718e5161ccbe&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb96ea734f42c746db98eb32a4a992b8786c604ea3cb1d4b1bf929d4b59786cc?apiKey=3c689012da024eba8a07718e5161ccbe&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
      <section className="flex justify-center items-center self-stretch px-16 mt-12 w-full text-center max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[524px]">
          <h2 className="self-center text-4xl font-bold tracking-wider leading-10 uppercase text-zinc-700 max-md:max-w-full">
            Get in touch with us
          </h2>
          <p className="mt-3 text-base leading-6 text-zinc-600 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center self-stretch px-16 mt-12 w-full text-sm font-semibold leading-5 text-zinc-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[250px]">
          <p>Office Hours :</p>
          <p className="self-stretch mt-3 text-center text-stone-400">
            Monday - Friday 8:00 am to 5:00 pm
          </p>
          <p className="mt-8">Email:</p>
          <p className="mt-3 text-center text-stone-400">contact@company.com</p>
          <p className="mt-8">Phone :</p>
          <p className="mt-3 text-stone-400">(414) 687 - 5892</p>
          <p className="mt-8">Location :</p>
          <address className="mt-3 leading-5 text-center text-stone-400">
            59 Middle Point Rd <br /> San Francisco, 80412
          </address>
        </div>
      </section>
      <form className="flex flex-col gap-8 mt-12 max-w-full text-sm leading-5 w-[822px] max-md:flex-wrap max-md:mt-10">
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="flex flex-col flex-1 px-5">
            <label htmlFor="name" className="font-semibold text-zinc-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Samatha Clarken"
              className="justify-center items-start px-4 py-5 mt-3 bg-white border border-solid border-zinc-700 text-zinc-500 max-md:pr-5"
            />
          </div>
          <div className="flex flex-col flex-1 px-5 whitespace-nowrap">
            <label htmlFor="email" className="font-semibold text-zinc-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@youremail.com"
              className="justify-center items-start px-4 py-5 mt-3 bg-white border border-solid border-zinc-700 text-zinc-500 max-md:pr-5"
            />
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="flex flex-col flex-1 px-5">
            <label htmlFor="phone" className="font-semibold text-zinc-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="(123) 456 - 7890"
              className="justify-center items-start px-4 py-5 mt-3 bg-white border border-solid border-zinc-700 text-zinc-500 max-md:pr-5"
            />
          </div>
          <div className="flex flex-col flex-1 px-5 whitespace-nowrap">
            <label htmlFor="company" className="font-semibold text-zinc-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              placeholder="Moon"
              className="justify-center items-start px-4 py-5 mt-3 bg-white border border-solid border-zinc-700 text-zinc-500 max-md:pr-5"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mt-8 text-sm font-semibold leading-5 text-zinc-700 max-md:max-w-full"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            className="justify-center items-start p-4 mt-3 max-w-full text-sm leading-5 bg-white border border-solid border-zinc-700 text-zinc-500 w-[822px] max-md:pr-5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center px-6 py-3.5 mt-8 max-w-full text-xs font-semibold tracking-wider leading-5 text-center text-white uppercase shadow-sm bg-zinc-700 w-[822px] max-md:px-5"
        >
          <span className="flex gap-1">
            <span>Send message</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/197b63ae80d0ef8d5d7df5f4709dc5b934989046aa79ddcde1f3eee3dfcbf43c?apiKey=3c689012da024eba8a07718e5161ccbe&"
              alt=""
              className="shrink-0 w-3 aspect-square"
            />
          </span>
        </button>
      </form>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fad1c0d40df4835266fcf82e13e69abf9b09adf8426810251440e959e6d514d?apiKey=3c689012da024eba8a07718e5161ccbe&"
        alt=""
        className="self-stretch mt-12 w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

export default ContactUs;
