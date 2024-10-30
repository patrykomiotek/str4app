import { ChangeEvent, type FormEventHandler, useRef } from 'react';
import { Button, Header, Input } from '@ui';

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // console.log({ email, password, language });
    console.log({
      email: emailFieldRef.current?.value,
      password: passwordFieldRef.current?.value,
      language: languageFieldRef.current?.value,
    });
  };

  const handleLanguageChange = (_event: ChangeEvent) => {
    const value = languageFieldRef.current?.value || '';
    if (languageFieldRef.current) {
      if (value.toLocaleLowerCase() === 'php') {
        languageFieldRef.current.style.border = '#f00 1px solid';
      } else {
        languageFieldRef.current.style.border = '';
      }
    }
  };

  return (
    <div>
      <Header>User Information</Header>
      <form onSubmit={handleSubmit}>
        <Input ref={emailFieldRef} label="Email" type="email" defaultValue="alamakota@wp.pl" />
        <Input ref={passwordFieldRef} label="Password" type="password" />
        <Input
          ref={languageFieldRef}
          label="Favorite Programming Language"
          type="text"
          onChange={handleLanguageChange}
        />

        {/* <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="language">Favorite Programming Language:</label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div> */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
