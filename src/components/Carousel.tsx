// 'use client '

// import React, { useState } from "react";
// import image1 from "/2.jpg";
// import image2 from "/1.png";
// import image3 from "/3.jpg";
// import image4 from "/1.png";
// import image5 from "/1.png";

// const Carousel: React.FC = () => {

//     interface StateInterface {
//         showImage: string;
//         startSlide:number
//       }

//   const [state, setState] = useState<StateInterface>({
//     showImage: image1,
//     startSlide: 0
//   });

//   setInterval(() => {
//     const images = [image1, image2, image3, image4, image5]
//     let currentIndex = state.startSlide
//     if (state.startSlide < 4) currentIndex++;
//     else currentIndex = 0;
//     setState({ ...state, showImage: images[currentIndex], startSlide: currentIndex }); 
//   }, 3000);

//   return (
//     <div className="carousel">
//       <img src={state.showImage} alt="Carousel Image" />
//     </div>
//   );
// };

// export { Carousel };
