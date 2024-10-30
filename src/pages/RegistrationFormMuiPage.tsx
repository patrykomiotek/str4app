import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { RegistrationFormMui } from "@components/RegistrationForm/RegistrationFormMui";

export const RegistrationFormMuiPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.REGISTRATION_FORM_MUI.title}</title>
      </Helmet>
      <h1>{Route.REGISTRATION_FORM_MUI.title}</h1>
      <RegistrationFormMui />
    </div>
  );
};
