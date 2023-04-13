import React, { useState } from 'react'

const BookingForm = () => {const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [totalPrice, setTotalPrice] = useState(1);
    const [totalNights,setTotalNights] = useState(1)

    function calculateTotalPrice() {
        // Calculate total price based on your pricing logic
        const pricePerNight = 100; // Example price per night
       const totalNights = Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
        setTotalNights(totalNights)
        console.log(pricePerNight, totalNights, guests)
        const totalPrice = parseInt(guests) * pricePerNight * totalNights;
        setTotalPrice(totalPrice);
      }

      function handleSubmit(event) {
        event.preventDefault();
        calculateTotalPrice();
        // Submit form data to server or perform other actions
        console.log(guests, checkIn, checkOut, totalPrice)
      }


  return (
    <section className='mt-32 h-screen w-screen flex justify-center '>

        <form onSubmit={handleSubmit} className="shadow-lg rounded-md w-3/5 h-3/4 bg-white border-gray-100 
         border-4 center overflow-x-hidden  ">

            <h2 className=' my-4 text-2xl heading-text'>Book Your Dream Stay!</h2>

           
          <div>
            <label className='font-semibold'>Number of guest</label>
          <input type="number" value={guests} onChange={event => setGuests(event.target.value)} className=' border-2 p-2 text-lg w-5/6 appearance-none focus:outline-none focus:shadow-outline' placeholder='Enter num of guest' />
          </div>

           <div className='flex space-x-5 w-5/6 my-4 justify-between'>

<div >
<label htmlFor='check-in'
className='font-semibold'>Check in</label>

<input  value={checkIn} onChange={event => setCheckIn(event.target.value)} type="date" id="check-in" className=' border-2 p-2 text-lg w-5/6 appearance-none focus:outline-none focus:shadow-outline' placeholder='Check in' />
</div>

            <div>
            <label htmlFor='check-out' className='font-semibold'>Check Out</label>
           <input type="date" 
           value={checkOut} onChange={event => setCheckOut(event.target.value)} 
           id="check-out" className=' border-2 p-2 text-lg w-5/6 leading-tight focus:outline-none focus:shadow-outline' placeholder='Check out' />
            </div>

           </div>


         <div className='flex flex justify-between w-full px-10 text-lg'>
            <p className='text-gray-700'>{parseInt(guests) * 100 * totalNights}</p>
   
            
            </div>  

           <div className='flex items-end ml-20 my-4 w-full'>
           <p className="text-2xl font-semibold   ">Subtotal: <b>$560</b></p>

           </div>

           <button className='py-2 px-4
           primary-color font-bold mt-4 rounded-md text-2xl text-white'>
            Book Now
           </button>

        </form>

    </section>
  )
}

export default BookingForm