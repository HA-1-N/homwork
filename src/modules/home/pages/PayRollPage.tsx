import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import styles from '../css/PayRollPage.module.css';
import { LIST_PAYROLL } from '../data/mock_data';
import { IPayrollItems } from '../../../models/payrollItem';
import PayrallList from './PayrallList';
import PayrollTableHeader from './PayrollTableHeader';
import PayrollPagination from './PayrollPagination';
import PayRollFilter from './PayRollFilter';

const PayRollPage = () => {

    const [items, setItems] = useState<IPayrollItems[]>([]);
    const [totalItems, setTotalItems] = useState<IPayrollItems[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 15;
    const filterRef = React.useRef({});

    const itemDatas = LIST_PAYROLL;

    const totalItem: any[] = itemDatas.payrolls;

    const getItems = () => {
        setItems(totalItem);
    }

    const onApply = () => {
        const newItemStatus = totalItem.filter((item: any) => {
            const filter: any = { ...filterRef.current }
            let isMatch = true;
            for (const element of Object.keys(filter)) {
                isMatch = isMatch && item[element] === filter[element];
            }
            return isMatch;
        });
        setItems(newItemStatus);
    }

    const onClear = () => {
        setItems(totalItems);
    }

    const onChangeFilter = (filter: any) => {
        filterRef.current = { ...filterRef.current, ...filter };
    }

    const getTotalItems = useCallback(() => {
        setTotalItems(totalItem);
    }, []);

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    const onDelete = (index: number) => {
        const newItems = items.filter((x, idx) => idx !== index);
        setItems(newItems);
    };

    const handleUpdateTotal = (feesState: number, currencyState: number, index: number) => {
        const cloneItems = [...items];
        cloneItems[index] = { ...cloneItems[index], fees: feesState, volume_input_in_input_currency: currencyState }
        setItems(cloneItems);
    }

    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        getTotalItems();
    }, []);

    return (
        <>
            <div className={clsx(styles.main)}>
                <div className='grid wide'>
                    <div className={(clsx(styles.container))}>
                        <div className={clsx(styles.titleContainer)}>
                            <h1 className={clsx(styles.title)}>PayRoll Transaction List</h1>

                            <button className={clsx(styles.titleBtn)}>
                                Export CSV <i className={clsx(styles.iconBtnTitle, "fa-solid fa-angle-down")}></i>
                            </button>
                        </div>

                        <div className={clsx(styles.optionContainer)}>
                            <PayRollFilter onChangeFilter={onChangeFilter} totalItems={totalItems} setTotalItems={setTotalItems} onApply={onApply} onClear={onClear} items={items} />
                        </div>

                        <div className={clsx(styles.tableMain)}>
                            <div className={clsx(styles.tableHeader)}>
                                <PayrollTableHeader />
                            </div>

                            <div className={clsx(styles.tableContanier)}>
                                <PayrallList items={items.slice((currentPage - 1) * 15, ((currentPage - 1) * 15) + 15)} onDelete={onDelete} setItems={setItems} totalItems={totalItems} onUpdateDetail={handleUpdateTotal} />
                            </div>

                        </div>

                        <div className={clsx(styles.pageBtnContainer)}>
                            <PayrollPagination
                                postPerPage={postPerPage}
                                totalItems={items.length || totalItems.length}
                                paginate={paginate}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>

                        <span>
                            showing {currentPage === 1 ? 1 : (currentPage * 15 - 14)} to {currentPage === Math.ceil((totalItems.length) / postPerPage) ? totalItems.length || items.length : currentPage * 15} from {items.length || totalItems.length} data
                        </span>

                    </div>
                </div>
            </div>
        </>

    );
};

export default PayRollPage