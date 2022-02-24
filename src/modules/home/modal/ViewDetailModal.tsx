import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from '../css/ViewDetailModal.module.css';
import { Button, TextField } from '@mui/material';

const ViewDetailModal = ({ totalItems, closeModalDetail, setItems, onUpdate }: any) => {

    const [feesState, setFeesState] = useState(0);
    const [currencyState, setCurrencyState] = useState(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    const handleClickDetail = () => {
        closeModalDetail(false);
    }

    const handleChangeFees = (e: any) => {
        const getValue = e.target.value;
        setFeesState(Number(getValue));
    }

    const handleChangeCurrency = (e: any) => {
        const getValue = e.target.value;
        setCurrencyState(Number(getValue));
    }

    const handleUpdate = () => {
        onUpdate(feesState, currencyState);
        closeModalDetail(false);
    }

    return (
        <>
            <form className={clsx(styles.formDetail)} onSubmit={handleSubmit}>
                <div className={clsx(styles.modalViewDetail)}>
                    <div className={clsx(styles.viewDetailContainer)}>
                        <h1 className={clsx(styles.viewDetailHeader)}>Update Total</h1>
                        <div className={clsx(styles.wrapModalInput)}>
                            <TextField id="outlined-basic" label="Fees" variant="outlined" sx={{ margin: 1 }} className={clsx(styles.modalInput)}
                                onChange={handleChangeFees}
                            />
                            <TextField id="outlined-basic" label="Input Currency" variant="outlined" sx={{ margin: 1 }} className={clsx(styles.modalInput)}
                                onChange={handleChangeCurrency}
                            />
                        </div>
                        <div className={clsx(styles.wrapModalBtn)}>
                            <Button variant="contained" className={clsx(styles.modalBtn)} sx={{ margin: 1 }} onClick={handleUpdate}>Update</Button>
                            <Button variant="outlined" className={clsx(styles.modalBtn)} sx={{ margin: 1 }} onClick={handleClickDetail}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ViewDetailModal;