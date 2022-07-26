import React from 'react';

function Book() {
    return (
        <div>
            <section className="absolute my-[-5%] w-full h-[20vh]">
                <div className="m-auto bg-[#242e5a] p-12 max-w-[80%] flex">
                <div className="flex">
                    <div className="box">
                    <label className='text-2xl text-white'>Check-in:</label>
                    <input className='py-5 border-2 px-12 bg-[#263760] text-white mx-5' type="date" placeholder="Check-in-Date"/>
                    </div>
                    <div className="box">
                    <label className='text-2xl text-white'>Check-out:</label>
                    <input className='py-5 border-2 px-12 bg-[#263760] text-white mx-5' type="date" placeholder="Check-out-Date"/>
                    </div>
                    <div className="box">
                    <label className='text-2xl text-white'>Adults:</label> <br/>
                    <input className='py-5 border-2 px-12 bg-[#263760] text-white mx-5' type="number" placeholder="0"/>
                    </div>
                    <div className="box">
                    <label className='text-2xl text-white'>Children:</label> <br/>
                    <input className='py-5 border-2 px-12 bg-[#263760] text-white mx-5' type="number" placeholder="0"/>
                    </div>
                </div>
                <div className="search bg-[#3f9cc1]">
                    <input className='m-10 px-16' type="submit" value="SEARCH"/>
                </div>
                </div>
  </section>
        </div>
    );
}

export default Book;