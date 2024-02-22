import React from 'react';
import Modal from '../UI/Model';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Fahim Montasir Turza"
        >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam repudiandae ea, error autem tempore officia officiis cum necessitatibus aliquam nemo obcaecati sequi tenetur hic rerum qui porro facere fugiat, quibusdam, aut odit! Dicta magnam unde sequi amet eaque possimus quibusdam deserunt, at fugiat praesentium sapiente distinctio autem nesciunt quae repellendus.</p>
        </Modal>
    );
};

export default AddTaskModal;