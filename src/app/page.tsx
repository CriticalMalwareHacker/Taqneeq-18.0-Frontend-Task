import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 mr-20">
      <div className="flex font-bold flex-row justify-end gap-4 mt-9">
            <button
              type="button"
              className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full w-14 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200"
              data-hs-theme-click-value="dark"
            >
              <span className="group inline-flex shrink-0 justify-center items-center size-9">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </span>
            </button>
            <button
              type="button"
              className="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full w-14 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200"
              data-hs-theme-click-value="light"
            >
              <span className="group inline-flex shrink-0 justify-center items-center size-9">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </span>
            </button>
        <button className="bg-[#222222] text-white p-4 rounded-full">Register Now!</button>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="flex">
          <h1 className="font-[PPMondwest] text-[6.25rem] text-[#222222]">Taqneeq 18.0 Is Back.</h1>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex justify-start max-w-6/12 text-sm leading-4">
            <p>Taqneeq is where aspiring tech enthusiasts, developers, and visionaries
              come together to compete, learn, and revolutionize the future. With a perfect
              blend of competitions, workshops, hackathons, and exhibitions, this year’s
              edition promises to be bigger and better than ever before.</p>
          </div>
          <div className="flex -rotate-45 w-33 h-33"><img className="rounded-3xl"src="asset4.png"></img></div>
          </div>
      </div>
      <div className="">
        <img className="rounded-3xl" src="asset2.webp"></img>
      </div>
    </div>
  );
}
