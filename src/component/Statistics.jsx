import React from "react";
import { useState, useEffect } from "react";
import iconFully from "../assets/icon-fully-customizable.svg";
import iconDetailed from "../assets/icon-detailed-records.svg";
import iconBrand from "../assets/icon-brand-recognition.svg";

const url = "https://tinyurl.com/api-create.php?url=";

const Statistics = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState("");
  const [copy, setCopy] = useState({});

  const clearAllFields = () => {
    setInputValue(""), setShortUrls([]);
  };

  const isValidUrl = (urlString) => {
    // Regex: optional http(s), optional www, must end with .com
    const pattern =
      /^(https?:\/\/)?(www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/;

    try {
      new URL(urlString);
      return pattern.test(urlString);
    } catch {
      return false;
    }
  };

  const isEmpty = inputValue.trim() === "";

  // Function to handle form submission and fetch the shortened URL and the form validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setError("Please add a link");
      return;
    } else if (!isValidUrl(inputValue)) {
      setError("Please enter a valid URL");
      return;
    } else if (shortUrls.some((link) => link.original === inputValue)) {
      setError("This URL has already been shortened.");
      return;
    } else {
      setError("");
    }

    try {
      const response = await fetch(`${url}${encodeURIComponent(inputValue)}`);
      const result = await response.text();
      const newLink = { original: inputValue, shortened: result };
      setShortUrls((prev) => {
        const updated = [newLink, ...prev];
        localStorage.setItem("shortUrls", JSON.stringify(updated));
        return updated;
      });
      setInputValue("");
    } catch (error) {
      setError("Error shortening link");
      console.error("Error fetching shortened link:", error);
    }
  };

  // Function to handle copying the short URL to (clipboard copy & paste)

  const handleCopy = (url, index, e) => {
    e.preventDefault();
    navigator.clipboard.writeText(url).then(() => {
      setCopy((prev) => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopy((prev) => ({ ...prev, [index]: false }));
      }, 2000);
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("shortUrls");
    if (stored) setShortUrls(JSON.parse(stored));
  }, []);

  return (
    <div className="bg-[var(--Gray400)]">
      <div className="layout p-3  mt-20 py-30 ">
        <div className="px-3">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="-mt-50  lg:flex lg:flex-row items-center justify-between gap-5 bg-[var(--Purple950)] background rounded-2xl p-7 lg:p-15 text-black">
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  className={`bg-white p-5 w-full  lg:p-4  lg:w-[80%] rounded-lg
                  ${
                    isEmpty
                      ? "placeholder:text-black"
                      : "placeholder:text-red-500"
                  }`}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full lg:w-[20%] bg-[var(--Blue400)] p-4 text-[16px]  lg:p-4 mt-10 lg:mt-0  text-white font-semibold cursor-pointer lg:rounded-lg hover:bg-[var(--Blue200)]"
                >
                  Shorten it!
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-sm -mt-28 lg:-mt-12 px-10 lg:px-15 italic">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
        {shortUrls && (
          <div className="mt-30 px-3 lg:mt-15 space-y-4">
            {shortUrls.map((link, index) => (
              <div
                key={index}
                className="text-center  bg-white p-4 rounded-lg lg:flex justify-between lg:px-10 cursor-pointer"
              >
                <span className="text-black text-[20px] lg:text-[24px]">
                  {link.original}
                </span>
                <div className="lg:flex justify-between gap-5 items-center">
                  <a
                    href={link.shortened}
                    className="text-[var(--Blue400)] text-[20px] lg:text-[18px] underline break-all "
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.shortened}
                  </a>
                  <button
                    onClick={(e) => handleCopy(link.shortened, index, e)}
                    className={`w-full p-3 lg:p-3 px-5 rounded-lg  hover:bg-[var(--Blue200)] font-semibold lg:w-[120px] cursor-pointer focus:bg-[var(--Purple950)] ${
                      copy[index]
                        ? "bg-[var(--Blue400)]"
                        : "bg-[var(--Blue400)]"
                    }`}
                  >
                    {copy[index] ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <div className="">
                <button onClick={clearAllFields} className="p-4 bg-[var(--Blue400)] hover:bg-[var(--Blue200)] font-bold rounded-lg ">
                  CLEAR ALL FIELDS
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-30 lg:mt-40 ">
          <h1 className="text-[30px] lg:text-[60px] font-bold text-center">
            Advanced Statistics
          </h1>
          <div className="mt-5 lg:w-[60%] mx-auto">
            <p className="lg:text-[30px] px-10 text-center mt-3">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>

        <div className=" p-4 lg:p-0 lg:flex flex-row justify-between gap-4  mt-20 relative">
          {/* This div carries the statistics cards */}

          <hr className="bg-[var(--Blue400)] border border-[var(--Blue400)] h-2 w-[80%] absolute left-1/2 lg:top-1/2 -translate-x-1/2 z-0" />

          <div className="bg-white rounded-lg shadow-lg h-[300px] flex flex-col justify-center  text-start relative">
            <div className="bg-[var(--Purple950)] w-20 h-20 flex items-center justify-center rounded-full shadow-lg absolute -top-10 left-30 lg:left-8">
              <img src={iconBrand} alt="" className="w-10 h-10" />
            </div>
            <div className="mt-15 mt:mt-0 p-5 mb-10 ">
              <h1 className="text-center lg:text-start font-bold text-[24px] ">
                Brand Recognition
              </h1>
              <p className="text-center lg:text-start mt-3 text-[var(--Gray600)] text-[19px]  ">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div className="my-25 lg:my-0 bg-white rounded-lg h-[300px] flex flex-col justify-center text-start  relative lg:mt-15">
            <div className="bg-[var(--Purple950)] w-20 h-20 flex items-center justify-center rounded-full  shadow-lg absolute -top-10 left-30 lg:left-8 ">
              <img src={iconDetailed} alt="" className="" />
            </div>
            <div className="mt-15 mt:mt-0 p-5 mb-10">
              <h1 className="text-center lg:text-start font-bold text-[24px]">
                Detailed Records
              </h1>
              <p className="text-center lg:text-start mt-3 text-[var(--Gray600)] text-[19px] ">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg h-[300px] flex flex-col justify-center text-start  relative lg:mt-30">
            <div className="bg-[var(--Purple950)] w-20 h-20 flex items-center justify-center rounded-full shadow-lg absolute -top-10 left-30 lg:left-8">
              <img src={iconFully} alt="" />
            </div>
            <div className="mt-15 mt:mt-0 p-5 mb-10">
              <h1 className="text-center lg:text-start font-bold text-[24px]">
                {" "}
                Fully Customizable
              </h1>
              <p className="text-center lg:text-start mt-3 text-[var(--Gray600)] text-[19px]">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
