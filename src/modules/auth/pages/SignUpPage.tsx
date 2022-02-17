import { replace } from 'connected-react-router';
import Cookies from 'js-cookie';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';
import { API_PATHS } from '../../../configs/api';
import { ROUTES } from '../../../configs/routes';
import { ILoginParams, ISignUpParams } from '../../../models/auth';
import { AppState } from '../../../redux/reducer';
import { getErrorMessageResponse } from '../../../utils';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';
import { fetchThunk } from '../../common/redux/thunk';
import SignUpForm from '../components/SignUpForm';
import { setUserInfo } from '../redux/authReducer';
import './SignUpPage.css';

const SignUpPage = () => {

    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [location, setLocation] = useState([]);

    const onSignUp = useCallback(
        async (values: ISignUpParams) => {
            setErrorMessage('');
            setLoading(true);

            const json = await dispatch(
                fetchThunk(API_PATHS.signUp, 'post', values),
            );

            setLoading(false);

            if (json?.code === RESPONSE_STATUS_SUCCESS) {
                dispatch(setUserInfo(json.data));
                alert('Chúc mừng bạn đăng kí thành công');
                dispatch(replace(ROUTES.home));
                return;
            }

            setErrorMessage(getErrorMessageResponse(json));
        },
        [dispatch],
    );

    const getLocation = useCallback(async () => {
        setLoading(true);

        const json = await dispatch(fetchThunk(API_PATHS.getLocation, 'get'));

        setLoading(false);

        if (json?.code === RESPONSE_STATUS_SUCCESS) {
            setLocation(json.data);
            return;
        }
    }, []);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <>
            <SignUpForm onSignUp={onSignUp} loading={loading} errorMessage={errorMessage} location={location} />
        </>
    );
};

export default SignUpPage;