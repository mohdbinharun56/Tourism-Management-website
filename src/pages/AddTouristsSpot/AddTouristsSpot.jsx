import { useForm } from 'react-hook-form';
import './Addtourist.css';
import Swal from 'sweetalert2';

const AddTouristsSpot = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleAddForm = (data,e) => {
        e.preventDefault();
        console.log(data);
        fetch('http://localhost:5000/tourists/add',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            e.target.reset()
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Tourists spot added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch(error=>console.log(error.message))
    
    }

    return (
        <div className="addForm text-white pt-20 pb-5">
            <div className='pt-10 pb-2 px-10 shadow-md shadow-slate-300 w-1/2 mx-auto'>
                <h1 className='text-4xl'>Add Tourists</h1>
                <form className='space-y-3' onSubmit={handleSubmit(handleAddForm)}>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label className='block'>Image URl</label>
                            <input type="text" {...register("image", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.image && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Spot Name</label>
                            <input type="text" {...register("spotName", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.spotName && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Country Name</label>
                            <input type="text" {...register("countryName", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.countryName && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Location</label>
                            <input type="text" {...register("location", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.location && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Short Description</label>
                            <input type="text" {...register("description", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.description && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Average Cost</label>
                            <input type="text" {...register("averageCost", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.averageCost && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Seasonality</label>
                            <select {...register("seasonality", { required: true })} className='opacity-60 w-full p-2'>
                                <option value="">Seasonality</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                            {errors.seasonality && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>Travel Time</label>
                            <select {...register("travelTime", { required: true })} className='opacity-60 w-full p-2'>
                                <option value="">Travel Time</option>
                                <option value="1">1 days</option>
                                <option value="2">2 days</option>
                                <option value="3">3 days</option>
                                <option value="4">4 days</option>
                                <option value="5">5 days</option>
                                <option value="6">6 days</option>
                                <option value="7">7 days</option>
                            </select>
                            {errors.travelTime && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <label htmlFor="" className='block'>Total Visitors</label>
                    <input type="number" {...register("visitors", { required: true })} className='opacity-60 w-full p-2' />
                    {errors.visitors && <span className='text-red-500'>This field is required</span>}
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>User Name</label>
                            <input type="text" {...register("userName", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.userName && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='lg:w-1/2'>
                            <label htmlFor="" className='block'>User Email</label>
                            <input type="email" {...register("email", { required: true })} className='opacity-60 w-full p-2' />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>

                    <input type="submit" value="Create" className='opacity-60 w-full p-2 mb-10 cursor-pointer btn text-[#bca44f]' />
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;