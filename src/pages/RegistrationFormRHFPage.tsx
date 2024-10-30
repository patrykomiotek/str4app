import { Helmet } from 'react-helmet-async';
import { Route } from '../routes';
import { RegistrationFormRHF } from '@components/RegistrationForm/RegistrationFormRHF';

export const RegistrationFormRHFPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.REGISTRATION_FORM_RHF.title}</title>
      </Helmet>
      <h1>{Route.REGISTRATION_FORM_RHF.title}</h1>
      <RegistrationFormRHF />
    </div>
  );
};
