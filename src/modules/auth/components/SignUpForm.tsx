import React, { useCallback, useState } from 'react';
import { IGenderParams, ILocationParams, ISignUpParams } from '../../../models/auth';
import { validateSignUp, validSignUp } from '../utils';

import './SignUpForm.css';

// const GENDER = {
//     male: 'male',
//     female: 'female',
//     other: 'other',
// };

interface Props {
    onSignUp(values: ISignUpParams): void;
    loading: boolean;
    errorMessage: string;
    location: Array<ILocationParams>;
}

const SignUpForm = (props: Props) => {

    const { onSignUp, loading, errorMessage, location } = props;

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        gender: '',
        region: '',
        state: '',
    });

    const [validate, setValidate] = useState<ISignUpParams>();

    const onSubmit = useCallback(() => {
        const validate = validateSignUp(formValues);
        setValidate(validate);
        if (!validSignUp(validate)) {
            return;
        }
        onSignUp(formValues);
    }, [formValues, onSignUp]);

    // const renderGender = () => {
    //     const arrGender: JSX.Element[] = [
    //         <option disabled selected value={''} key={''}>
    //             {''}
    //             -- Select Options --
    //             {''}
    //         </option>
    //     ];

    //     GENDER.map((g: IGenderParams, index: number) => {
    //         arrGender.push(
    //             <option value={g.value} key={index}>
    //                 {g.label}
    //             </option>
    //         );
    //     });
    //     return arrGender;
    // };

    const renderRegion = () => {
        const arrRegion: JSX.Element[] = [
            <option disabled selected value={''} key={''}>
                {''}
                -- Select Option --
                {''}
            </option>
        ];

        location.map((location: ILocationParams, index: number) => {
            arrRegion.push(
                <option value={location.id} key={index}>
                    {location.name}
                </option>
            );
        });
        return arrRegion;
    };

    const renderState = () => {
        const arrState: JSX.Element[] = [
            <option disabled selected value={''} key={''}>
                {''}
                -- Select Option --
                {''}
            </option>
        ];

        location.map((location: ILocationParams, index: number) => {
            arrState.push(
                <option value={location.id} key={index}>
                    {location.name}
                </option>
            );
        });

        return arrState;
    };

    return (
        <div className='form-content'>
            <form action='' className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>

                {!!errorMessage && (
                    <div className='alert alert-danger' role='alert' style={{ width: '100%' }}>
                        {errorMessage}
                    </div>
                )}

                <h1 className="form-title">
                    Form SignUp
                </h1>

                <div className='form-inputs'>
                    <label htmlFor='inputEmail' className='form-label'>
                        Email
                    </label>
                    <input type="email" id='inputEmail' name='email' className='form-control'
                        value={formValues.email}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            email: e.target.value,
                        })}
                    />

                    {!!validate?.email && (
                        <small className='text-danger'>{validate.email}</small>
                    )}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='inputPassword' className='form-label'>
                        Password
                    </label>
                    <input type="password" id='inputPassword' name='password' className='form-control'
                        value={formValues.password}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            password: e.target.value,
                        })}
                    />

                    {!!validate?.password && (
                        <small className='text-danger'>{validate.password}</small>
                    )}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='inputRepeatPassword' className='form-label'>
                        Repeat Password
                    </label>
                    <input type="password" id='inputRepeatPassword' name='repeatpassword' className='form-control'
                        value={formValues.repeatPassword}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            repeatPassword: e.target.value,
                        })}
                    />

                    {!!validate?.repeatPassword && (
                        <small className='text-danger'>{validate.repeatPassword}</small>
                    )}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='inputName' className='form-label'>
                        Name
                    </label>
                    <input type="text" id='inputName' name='name' className='form-control'
                        value={formValues.name}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            name: e.target.value,
                        })}
                    />

                    {!!validate?.name && (
                        <small className='text-danger'>{validate.name}</small>
                    )}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='selectGender' className='form-label'>
                        Gender
                    </label>
                    <select id='selectGender' className='form-control'
                        value={formValues.gender}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            gender: e.target.value,
                        })}>
                        <option value="">-- Select an options --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    {!!validate?.gender && (
                        <small className='text-danger'>{validate.gender}</small>
                    )}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='selectRegion' className='form-label'>
                        Region
                    </label>
                    <select id='selectRegion' className='form-control'
                        value={formValues.region}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            region: e.target.value,
                        })}
                    >
                        {renderRegion()}
                    </select>

                    {!!validate?.region && (
                        <small className='text-danger'>{validate.region}</small>
                    )}
                </div>

                {formValues.region ? (
                    <div className='form-inputs'>
                        <label htmlFor='selectState' className='form-label'>
                            State
                        </label>
                        <select id='selectState' className='form-control'
                            value={formValues.state}
                            onChange={(e) => setFormValues({
                                ...formValues,
                                state: e.target.value,
                            })}
                        >
                            {renderState()}
                        </select>

                        {!!validate?.state && (
                            <small className='text-danger'>{validate.state}</small>
                        )}
                    </div>
                ) : null}


                <div className='form-button'>

                    {loading}
                    <button className='button'>
                        Sign Up
                    </button>

                    <a href="/login" className='link-login'>
                        Sign In
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;