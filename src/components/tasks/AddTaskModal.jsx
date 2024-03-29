import React from 'react';
import Modal from '../UI/Model';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Features/Task/taskSlice';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        dispatch(addTask(data));
        console.log(data);
        onCancel();
    }
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Fahim Montasir Turza"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='title'>Title</label> <br />
                    <input
                        className='w-full rounded-lg'
                        type="text" id='title' {...register('name')} />
                </div>
                <div>
                    <label htmlFor='Description'>Description</label> <br />
                    <input
                        className='w-full rounded-lg h-[100px]'
                        type="text" id='description' {...register('description')} />
                </div>
                <div>
                    <label htmlFor='date'>Date</label> <br />
                    <input
                        className='w-full rounded-lg'
                        type="date" id='date' {...register('date')} />
                </div>
                <div>
                    <label htmlFor='assign'>Assign To</label> <br />
                    <select
                        className='w-full rounded-lg'
                        type="text" id='assign' {...register('assign')}>
                        <option value="Turza">Turza</option>
                        <option value="Fahim">Fahim</option>
                        <option value="Montasir">Montasir</option>
                        <option value="Siam">Siam</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='priority'>Priority</label> <br />
                    <select
                        className='w-full rounded-lg'
                        type="text" id='priority' {...register('priority')}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                        {/* <option value="Siam">Siam</option> */}
                    </select>
                </div>
                <div className='mt-2'>
                    <button
                        onClick={() => onCancel()}
                        className='bg-red-600 text-white rounded-lg mr-3 p-2 '
                        type="button">Cancel</button>
                    <button
                        className='bg-green-600 text-white rounded-lg mr-3 p-2 '
                        type="submit">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;