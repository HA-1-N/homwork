import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import styles from '../css/PayRollPage.module.css';
import { IPayrollItems } from '../../../models/payrollItem';
import { LIST_PAYROLL } from '../data/mock_data';

const PayRollFilter = ({ totalItems, onApply, onClear, onChangeFilter }: any) => {

    const [valueFrom, setValueFrom] = useState<Date | null>(null);
    const [valueTo, setValueTo] = useState<Date | null>(null);

    const [status, setStatus] = React.useState('');
    const [client, setClient] = React.useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const totalItemsStatus = totalItems.map((totalItem: any) => {
        return totalItem.currency;
    });

    const itemStatus = totalItemsStatus.reduce((unique: any, item: any) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);

    const handleChangeStatus = (event: SelectChangeEvent) => {
        const getValueStatus = event.target.value;
        onChangeFilter({ currency: getValueStatus });
        setStatus(getValueStatus as string);
    };

    const handleChangeClient = (event: SelectChangeEvent) => {
        const getValueClient = event.target.value;
        onChangeFilter({ company_id: getValueClient });
        setClient(getValueClient as string);
    };

    const handleSearchTermChange = (e: any) => {
        const getValueSearch = e.target.value;
        onChangeFilter({ subpayroll_ids: getValueSearch });
        setSearchTerm(getValueSearch as string);
    }

    const totalItemClient = totalItems.map((totalItem: any) => {
        return totalItem.company_id;
    });

    const itemClient = totalItemClient.reduce((unique: any, item: any) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);


    const handleClickApply = () => {
        onApply();
    };

    const handleClear = () => {
        onClear();
    }

    const renderStatus = () => {
        const arrStatus: JSX.Element[] = [
            <MenuItem disabled value={''} key={''}>
                {''}
                -- Select Status --
                {''}
            </MenuItem>
        ];

        itemStatus.map((item: any, index: number) => {
            arrStatus.push(
                <MenuItem value={item} key={index}>
                    {item}
                </MenuItem>
            );
        });
        return arrStatus;
    };

    const renderClient = () => {
        const arrStatus: JSX.Element[] = [
            <MenuItem disabled value={''} key={''}>
                {''}
                -- Select Client --
                {''}
            </MenuItem>
        ];

        itemClient.map((itemClient: any, index: number) => {
            arrStatus.push(
                <MenuItem value={itemClient} key={index}>
                    {itemClient}
                </MenuItem>
            );
        });
        return arrStatus;
    }

    return (
        <div className={clsx(styles.optionFilter)}>
            <div className={clsx('row')}>
                <div className={clsx('col l-9')}>
                    <div className='row'>
                        <div className={clsx('col l-2-4')}>
                            <FormControl size='small' fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Status"
                                    onChange={handleChangeStatus}
                                >
                                    {renderStatus()}
                                </Select>
                            </FormControl>
                        </div>

                        <div className={clsx('col l-2-4')}>
                            <FormControl size='small' fullWidth>
                                <InputLabel id="demo-simple-select-label">Client</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={client}
                                    label="Client"
                                    onChange={handleChangeClient}
                                >
                                    {renderClient()}
                                </Select>
                            </FormControl>
                        </div>

                        <div className={clsx('col l-2-4')}>
                            <LocalizationProvider size='small' dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="From"
                                    value={valueFrom}
                                    onChange={(newValue) => {
                                        setValueFrom(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>


                        <div className={clsx('col l-2-4')}>
                            <LocalizationProvider size='small' dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="To"
                                    value={valueTo}
                                    onChange={(newValue) => {
                                        setValueTo(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <div className={clsx('col l-2-4')}>
                            <TextField size='small' id="invoice" label="Invoice #" variant="outlined"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                            />
                        </div>

                    </div>
                </div>

                <div className={clsx('col l-3')}>
                    <div className='row'>
                        <div className={clsx('col l-6')}>
                            <Button size='medium' variant="outlined" className={clsx(styles.optionBtn)} onClick={handleClickApply}>Apply</Button>
                        </div>
                        <div className={clsx('col l-6')}>
                            <Button size='medium' variant="outlined" color="error" className={clsx(styles.optionBtn)} onClick={handleClear}>Clear</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayRollFilter;