import './Addtourist.css';

const AddTouristsSpot = () => {
    return (
        <div className="addForm text-white pt-20 pb-5">
            <div className='pt-10 pb-2 px-10 shadow-md shadow-slate-300 w-1/2 mx-auto'>
                <h1 className='text-4xl'>Add Tourists</h1>
                <form className=' space-y-3'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label className='block'>Image URl</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Spot Name</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Country Name</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Location</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Short Description</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Average Cost</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Seasonality</label>
                            <select className='opacity-60 w-full p-2'>
                                <option value="">Seasonality</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Travel Time</label>
                            <select className='opacity-60 w-full p-2'>
                                <option value="">Travel Time</option>
                                <option value="1">1 days</option>
                                <option value="2">2 days</option>
                                <option value="3">3 days</option>
                                <option value="4">4 days</option>
                                <option value="5">5 days</option>
                                <option value="6">6 days</option>
                                <option value="7">7 days</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="" className='block'>Total Visitors</label>
                    <input type="number" className='opacity-60 w-full p-2' />

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>User Name</label>
                            <input type="text" className='opacity-60 w-full p-2' />
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>User Email</label>
                            <input type="email" className='opacity-60 w-full p-2' />
                        </div>
                    </div>

                    <input type="submit" value="Create" className='opacity-60 w-full p-2 mb-10 cursor-pointer btn text-[#bca44f]' />
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;