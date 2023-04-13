// import React, { useState } from "react";


export default function Banner(){
  return(
    <h1>This is a banner</h1>
  )
}

// const Banner = () => {
//   const [num, setNum] = useState(1);


//   const renderVideo = () => {
//     if (num === 1) {
//       return (
//         <video
//           src={vid4}
//           autoPlay
//           muted
//           loop
//           className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
//         />
//       );
//     } else if (num === 2) {
//       return (
//         <video
//           src={vid2}
//           autoPlay
//           muted
//           loop
//           className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
//         />
//       );
//     }
//     if (num === 3) {
//       return (
//         <video
//           src={vid3}
//           autoPlay
//           muted
//           loop
//           className="w-full h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
//         />
//       );
//     }
//     if (num === 4) {
//       return (
//         <video
//           src={vid1}
//           autoPlay
//           muted
//           loop
//           className="w-full h-full brightness-90 overflow-hidden object-cover -z-10 absolute top-0 left-0 "
//         />
//       );
//     } else {
//       return (
//         <video
//           src={vid5}
//           autoPlay
//           muted
//           loop
//           className="w-full brightness-50 h-full overflow-hidden object-cover -z-10 absolute top-0 left-0 "
//         />
//       );
//     }
//   };

//   return (
//     <section className="height w-screen overflow-hidden">
//       <div className=" h-screen">
//         {renderVideo()}
//         <div className="flex  justify-center ml-28  ">
//           <input
//             name="vid"
//             onClick={() => setNum(1)}
//             type="radio"
//             className="z-5 input-custom   absolute bottom-24 mr-64"
//           />
//           <input
//             name="vid"
//             onClick={() => setNum(2)}
//             type="radio"
//             className="z-5 input-custom    absolute bottom-24 mr-48"
//           />
//           <input
//             name="vid"
//             onClick={() => setNum(3)}
//             type="radio"
//             className="z-5  input-custom  absolute bottom-24 mr-32"
//           />
//           <input
//             name="vid"
//             onClick={() => setNum(4)}
//             type="radio"
//             className="z-5  input-custom  absolute bottom-24 mr-16"
//           />
//           <input
//             name="vid"
//             onClick={() => setNum(5)}
//             type="radio"
//             className="z-5  input-custom  absolute bottom-24 mr-0"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center h-4/5 px-8">
//         <h2 className=" text-6xl pb-4 mt-48 text-center text-white font-bold">Book Your Dream Stay Today</h2>
//         <p className=" text-xl text-center text-white font-bold pb-4">Don't settle for anything less than the best - book your stay with Qatar Stay and experience Qatar like never before.</p>
//         <button className="primary__button px-8 py-4 text-2xl mt-8">Discover More </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
