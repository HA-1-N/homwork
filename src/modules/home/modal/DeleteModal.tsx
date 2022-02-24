import React from 'react';
import clsx from 'clsx';

import styles from '../css/DeleteModal.module.css';

const DeleteModal = ({ closeModal, totalItems }: any) => {

    const handleCloseModle = () => {
        closeModal(false);
    }

    const handleClickDeleteItem = ({ onDelete }: any) => {
        onDelete();
    }

    return (
        <>
            <div className={clsx(styles.modalMain)}>
                <div className={clsx(styles.modal)}>
                    <button className={clsx(styles.btn)} onClick={handleClickDeleteItem}>
                        Delete
                    </button>

                    <button className={clsx(styles.btn)} onClick={handleCloseModle}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeleteModal