import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from '../css/PayRollPage.module.css';
import { IPayrollItems } from '../../../models/payrollItem';
import DeleteModal from '../modal/DeleteModal';
import { filter } from 'lodash';
import { Button } from '@mui/material';
import ViewDetailModal from '../modal/ViewDetailModal';
import { formatNumber } from 'react-intl/node_modules/@formatjs/intl';

const PayrallList = ({ items, onDelete, setItems, onUpdateDetail }: any) => {

    const [showModal, setShowModal] = useState(false);
    const [showModalDetail, setShowModalDetail] = useState(false);

    const handleClick = (index: number) => () => {
        setShowModal(true);
        onDelete(index);
    }
    const indexUpdate = React.useRef(0);

    const handleClickDetail = (index: number) => () => {
        setShowModalDetail(true);
        indexUpdate.current = index
    }
    const onUpdate = (feesState: number, currencyState: number) => {
        onUpdateDetail(feesState, currencyState, indexUpdate.current);
    }

    return (
        <>
            <div className={clsx(styles.tableWrap)}>

                {items?.map((item: IPayrollItems, index: number) => (
                    <div className={clsx(styles.wrapRow)} key={index}>
                        <div className='row'>
                            <div className='col l-9'>
                                <div className='row'>
                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            {item.currency}
                                        </div>
                                    </div>

                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            <p className={clsx(styles.hiddenText)}>
                                                {item.time_created}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            {item.company_id}
                                        </div>
                                    </div>

                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            {item.currency}
                                        </div>
                                    </div>

                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            {(Number(item.volume_input_in_input_currency) + Number(item.fees))}
                                        </div>
                                    </div>

                                    <div className="col l-2">
                                        <div className={clsx(styles.content)}>
                                            <p className={clsx(styles.hiddenText)}>
                                                {item.payroll_id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col l-3'>
                                <div className='row'>
                                    <div className='col l-9'>
                                        <div className={clsx(styles.btnViewDetail)}>
                                            <button className={clsx(styles.btnDetail)} onClick={handleClickDetail(index)}>ViewDetail <i className={clsx(styles.iconDetail, "fa-solid fa-angle-down")}></i></button>
                                        </div>
                                    </div>

                                    <div className='col l-3'>
                                        <div className={clsx(styles.deleteIcon)} onClick={handleClick(index)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {showModalDetail && <ViewDetailModal closeModalDetail={setShowModalDetail} onUpdate={onUpdate} />}
                {/* {showModal && <DeleteModal closeModal={setShowModal} onDelete={onDelete} />} */}
            </div>
        </>
    );
};

export default PayrallList