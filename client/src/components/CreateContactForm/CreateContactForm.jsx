
import { useForm } from 'react-hook-form';

const CreateContactForm = () => {

    const inputStype = 'px-2 py-3 rounded-md w-full border-2 border-gray-400'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //!! додати функціонал заван
    const onSubmit = async () => {
        console.log('submit')
    }

    //!! додати перевірку що одне із полів first last name  може бути не заповненим
    //!! sticky не працює 
    return (
        <div className='md:mt-9 mt-6 mx-10 md:mx-0 md:w-1/3 sticky'>
            <h2 className='text-xl font-medium'>Create Contact</h2>
            {/** Form sectino */}
            <form onSubmit={onSubmit}>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='ml-2 text-xs'>First Name</p>
                    <input
                        type="text"
                        className={`${inputStype}`}
                        {...register('name', {
                            required: true,
                        })}
                    />
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='ml-2 text-xs'>Last Name</p>
                    <input
                        type="text"
                        className={`${inputStype}`}
                        {...register('name', {
                            required: true,
                        })}
                    />
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='ml-2 text-xs'>Email</p>
                    <input
                        type="text"
                        className={`${inputStype}`}
                        {...register('name', {
                            required: true,
                        })}
                    />
                </div>
                <button className='p-3 rounded-md w-full border-2 border-gray-400 mt-8 font-medium'>
                    Add Contact
                </button>
            </form>
        </div>
    )
}

export default CreateContactForm