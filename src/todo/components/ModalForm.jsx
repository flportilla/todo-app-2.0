import React from 'react'
import Modal from 'react-modal'

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startClosingModal, startSavingTodo } from '../../store/todo/thunk';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        height: 'fit-content',
    },
};

Modal.setAppElement('#root');

const initialForm = {
    newTitle: ''
}

export const ModalForm = () => {

    const { modalIsOpen } = useSelector(state => state.modal)
    const { activeTodo } = useSelector(state => state.todo)

    const dispatch = useDispatch()

    const { newTitle, onInputChange, onResetForm } = useForm(initialForm)

    const onSubmitForm = (event) => {
        event.preventDefault()

        if (newTitle.length < 1) return

        dispatch(startSavingTodo(activeTodo, newTitle))
        onResetForm()
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => dispatch(startClosingModal())}
                style={customStyles}
                contentLabel="Example Modal">

                <h1 className="modal-title">New Todo</h1>
                <hr />
                <form
                    className="modal-form"
                    onSubmit={onSubmitForm}
                >
                    <textarea
                        required
                        className="modal-textarea"
                        placeholder={activeTodo?.title}
                        name="newTitle"
                        value={newTitle}
                        onChange={onInputChange}
                    />
                    <button
                        className="btn-modal"
                        type="submit">Save</button>
                </form>
            </Modal>

        </>
    )
}
