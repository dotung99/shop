import React from 'react';

function Book() {
    return (
        <div>
            <section className="md:absolute top-[33%] xl:top-[70%] mt-2 shadow-2xl w-full">
                <div className="m-auto bg-[#242e5a] py-2 xl:py-16 max-w-[100%] lg:mt-[10%] flex md:justify-center">
                <div className="grid grid-cols-2 xl:grid-cols-1 xl:flex px-2">
                    <div className="text-sm xl:text-xl md:mx-10">
                    <label className=' text-white xl:pr-2'>Check-in :</label>
                    <input className='text-base bg-[#263760] xl:p-4 text-white' type="date" placeholder="Check-in-Date"/>
                    </div>
                    <div className="text-sm xl:text-xl md:mx-10">
                    <label className=' text-white xl:pr-2'>Check-out:</label>
                    <input className='text-base bg-[#263760] xl:p-4 text-white' type="date" placeholder="Check-out-Date"/>
                    </div>
                    <div className="text-sm xl:text-xl md:mx-10 xl:flex">
                    <label className=' text-white xl:pr-2 xl:pt-4'>Adults:</label><br/>
                    <input className='text-sm bg-[#263760] xl:p-4 text-white' type="number" placeholder="0"/>
                    </div>
                    <div className="text-sm xl:text-xl md:mx-10 xl:flex">
                    <label className=' text-white xl:pr-2 xl:pt-4'>Children:</label> <br/>
                    <input className='text-sm bg-[#263760]  xl:p-4 text-white' type="number" placeholder="0"/>
                    </div>
                </div>
                <button className="bg-[#3f9cc1] hover:text-white hover:bg-slate-700 hidden md:block">
                    <input className='text-base mx-10 ' type="submit" value="SEARCH"/>
                </button>
                </div>
  </section>
        </div>
    );
}

export default Book;