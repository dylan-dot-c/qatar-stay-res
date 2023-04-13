import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import rooms from '../api/room';

import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';




const RoomsDetails = () => {
  const location = useLocation();
  const {id} = location.state
  console.log(id)

  const [currentSlide, setCurrentSlide] = useState(0)
   
   

const [selectedRoom, setSelectedRoom] = useState(rooms.filter((room) => room.id === id));

const roomInfo = selectedRoom[0]

// console.log(selectedRoom)
const [images,setImages] = useState(selectedRoom[0].images)
const [currentImage, setCurrentImage] = useState(images[0])

console.log(images[0])

const result = images.map( (image )=> {
    return (
        <SplideSlide>
            <img src={image} />
        </SplideSlide>
    )
})

const changeSlide = (value) => {
    setCurrentSlide(() => {
        console.log("SLIDE CHANGED", value )
        console.log(images[value])
        return (
             images
        )
    })
}

const imageCell = images.map( (image, index) => {
    return (
        <img src={image} width="200px" onClick={() => setCurrentImage(images[index])} />
    )
})



  return (
    <div className="mt-36 container mx-auto mb-16">
        <h2
            className='text-4xl text-center mb-6 text-blue-500 font-bold capitalize '
        >{selectedRoom[0].property_name}</h2>


     <div className='md:hidden block' >
     <Splide
        onMoved={() => setCurrentSlide(splideObject.index)}
        options={{
            width: 400,
            
            type: 'loop',
            
        }}
        start={currentSlide}
     >

            {result}

      </Splide>
      </div>

        <div className='hidden md:flex space-x-10 items-center'>
            <img src={currentImage} className='w-1/2' />
            
            <div className='grid grid-cols-2 gap-2 items-center'>
                {imageCell}
            </div>
        </div>

<div className=" shadow-3xl p-4 rounded">
    <h3
        className=''
    >
        Roomm
    </h3>
    <p>Available: {roomInfo.available ? "Yes" : "No"}</p>
    <p>  {roomInfo.amenities.map( (amenity) => <span>{amenity}</span>)}</p>
    <p>Price: {roomInfo.price}</p>
    <p>Type: {roomInfo.property_type}</p>
    <p>Rating: {roomInfo.rating}</p>
</div>

     </div>


  
  );
};



export default RoomsDetails
