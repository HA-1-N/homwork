import { ILoginParams, ILoginValidation, ISignUpParams, ISignUpValidation } from '../../models/auth';
import { validEmailRegex } from '../../utils';

const validateEmail = (email: string) => {
  if (!email) {
    return 'emailRequire';
  }

  if (!validEmailRegex.test(email)) {
    return 'emailInvalid';
  }

  return '';
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'passwordRequire';
  }

  if (password.length < 4) {
    return 'minPasswordInvalid';
  }

  return '';
};

export const validateLogin = (values: ILoginParams): ILoginValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
};

export const validLogin = (values: ILoginValidation) => {
  return !values.email && !values.password;
};

const validateRepeatPassword = (password: string, repeatPassword: string) => {
  if (!repeatPassword) {
    return 'Required RepeatPassword';
  }

  if (password !== repeatPassword) {
    return 'Math Password Invalid';
  }
  return '';
}

const validateName = (name: string) => {
  if (!name) {
    return 'Required Name';
  }
  return '';
}

const validateGender = (gender: string) => {
  if (!gender) {
    return 'Required Gender';
  }
  return '';
}

const validateRegion = (region: string) => {
  if (!region) {
    return 'Required Region';
  }
  return '';
}

const validateState = (state: string) => {
  if (!state) {
    return 'Required State';
  }
  return '';
}

const validateField = (field: string, value: string) => {
  if (value) return '';
  let fieldRequire = '';
  switch (field) {
    case 'name':
      fieldRequire = 'Name Required';
      break;
    case 'gender':
      fieldRequire = 'Gender Required';
      break;
    case 'region':
      fieldRequire = 'Region Required';
      break;
    case 'state':
      fieldRequire = 'Sate Required';
      break;
  }
  return fieldRequire;
};

export const validateSignUp = (values: ISignUpParams): ISignUpValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
    repeatPassword: validateRepeatPassword(values.password, values.repeatPassword),
    name: validateField('name', values.name),
    gender: validateGender(values.gender),
    region: validateRegion(values.region),
    state: validateState(values.state),
  };
};

export const validSignUp = (values: ISignUpValidation) => {
  return !values.email && !values.password && !values.repeatPassword && !values.name && !values.gender && !values.region && !values.state;
}
