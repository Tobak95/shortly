// import React, { useState } from "react";

// const url = "https://tinyurl.com/api-create.php?url=";
// const LinkSection = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [shortUrl, setShortUrl] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputValue) return;
//     try {
//       const response = await fetch(`${url}${encodeURIComponent(inputValue)}`);
//       const result = await response.text();
//       setShortUrl(result);
//     } catch (error) {
//       setShortUrl("Error shortening link");
//       console.error("Error fetching shortened link:", error);
//     }
//   };

//   return (
//     <div className="layout ">
//       <form onSubmit={handleSubmit}>
//         <div className="relative flex flex-row items-center gap-5 justify-center bg-[var(--Purple950)] rounded-2xl p-8 lg:p-15">
//           <input
//             type="text"
//             placeholder="Shorten a link here"
//             className="bg-white rounded-lg p-4 w-[85%] "
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-[var(--Blue400)] p-4  rounded-lg text-white font-semibold"
//           >
//             Shorten it!
//           </button>
//         </div>
//       </form>
//       {shortUrl && (
//         <div className="mt-6 text-center">
//           <span className="text-white bg-white">Shortened URL: </span>
//           <a
//             href={shortUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[var(--Blue400)] underline break-all"
//           >
//             {shortUrl}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LinkSection;
