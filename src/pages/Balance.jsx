import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Balance = () => {

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { maxLength, value, nextSibling, previousSibling } = e.target;
        if (value.length >= maxLength && nextSibling) {
            nextSibling.focus();
        } 
        else if (value.length === 0 && previousSibling) {
            previousSibling.focus();
        }
    };

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [four, setFour] = useState("");
    const [error, setError] = useState("");

    const SubmitHandler = (e) =>{
        e.preventDefault();
        const pin = `${first}${second}${third}${four}`;
        
        if(pin == "1234") {
            setError("");
            navigate("/last");
        }

        setError("Please enter the currect pin");
    }

    return (
        <div className='bg-white min-h-screen text-black'>
            <div className='w-full flex items-center justify-between px-5 py-2'>
                <div>
                    <h1 className='text-black'>Bank of Maharashtra</h1>
                    <h1 className='text-black'>XXXX7898</h1>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
                    className='w-20' />
            </div>
            <div className=' bg-gray-300 w-full py-3 flex items-center justify-between px-5'>
                <h1 className='text-black'>XXXXXXXXX7898</h1>
                <i className="ri-arrow-drop-down-line text-gray-500 text-2xl"></i>
            </div>

            <div className='w-full py-3 flex flex-col gap-4 items-center justify-between px-5'>
                <p className='text-black mt-2'>Enter 4-DIGIT UPI PIN</p>
                <form onSubmit={SubmitHandler}>

                    <div className='flex items-center justify-center mt-4 gap-4'>
                        <input
                        className='text-black border-b-2 border-gray-500 focus:outline-none text-center w-12' 
                        type="number" 
                        maxLength={1} 
                        value={first}
                        onChange={(e)=> setFirst(e.target.value)}
                        onInput={handleInput} />

                        <input
                        className='text-black border-b-2 border-gray-500 focus:outline-none text-center w-12' 
                        type="number" 
                        maxLength={1} 
                        value={second}
                        onChange={(e)=> setSecond(e.target.value)}
                        onInput={handleInput} />

                        <input
                        className='text-black border-b-2 border-gray-500 focus:outline-none text-center w-12' 
                        type="number" maxLength={1} 
                        value={third}
                        onChange={(e)=> setThird(e.target.value)}
                        onInput={handleInput} />

                        <input
                        className='text-black border-b-2 border-gray-500 focus:outline-none text-center w-12' 
                        type="number" maxLength={1} 
                        value={four}
                        onChange={(e)=> setFour(e.target.value)}
                        onInput={handleInput} />
                    </div>

                    {error && 
                        <p className='text-red-600 text-center mt-5'>
                            {error}</p>
                    }

                    <p className='text-gray-500 px-10 text-center mt-14 text-sm '>
                        UPI PIN will keep your account secure
                        from unauthorized access.
                        Do not share this PIN with anyone
                    </p>

                    <button type='submit'></button>

                </form>
            </div>
        </div>
    )
}

export default Balance;