// import React from 'react';

// type Ocado = string;
type Ocado = 'Ocado';
const name: Ocado = 'Ocado';
// const name: Ocado = 'Lorem ipsum' as Ocado;
// console.log(name);

type MyTrue = true | 'kaczka';
const myOnlyTrue: MyTrue = 'kaczka';
console.log(myOnlyTrue);

type IsTrue<T extends true> = T;

// @ts-expect-error
declare type A = IsTrue<'fdgdf'>;
declare type B = IsTrue<true>;
// IsEqual<A, B>
// Expect<>

interface CustomButtonProps {
  label: string;
  bgColor?: string;
  color?: string;
  children?: string;
  // children?: string;
}

// import { Button }
// import Button
export const Button = ({
  label,
  bgColor = 'alizarin',
  color = 'clouds',
  children,
}: CustomButtonProps) => {
  return <button style={{ backgroundColor: bgColor, color }}>{label || children}</button>;
};
{
  /* <Button label="Click me" />; */
}
{
  /* <Button>{null}</Button>; */
}

// type ButtonProps = {
//   label: string;
//   bgColor: string;
//   color: string;
// };

// <Button label="aaa" />
// <Button>aaa</Button>
// export const Button = ({ label, color, bgColor }: ButtonProps) => {
//   return (
//     <button style={{ backgroundColor: bgColor, color: color }}>{label}</button>
//   );
// };

// export default Button;

export enum Color {
  RED = 'red', // 0
  GREEN = 'green', // 1
  BLUE = 'blue', // 2
}
{
  /* <Button color={Color.GREEN} /> */
}

type ColorKey =
  | 'turquoise'
  | 'emerald'
  | 'peterRiver'
  | 'amethyst'
  | 'wetAsphalt'
  | 'greenSea'
  | 'nephritis'
  | 'belizeHole'
  | 'wisteria'
  | 'midnightBlue'
  | 'sunFlower'
  | 'carrot'
  | 'alizarin'
  | 'clouds'
  | 'concrete'
  | 'orange'
  | 'pumpkin'
  | 'pomegranate'
  | 'silver'
  | 'asbestos';

const colors: Record<ColorKey, string> = {
  // sfsdfsdfs: '#ffffff',
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
  wisteria: '#8e44ad',
  midnightBlue: '#2c3e50',
  sunFlower: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};

// JS/ES6
declare const ala = 'makota';
// ala = 'psa';

// plain JS, ES6+
const participants = [1, 2, 3, 4, 5];
participants.push(12); // return new array length

const participants2 = [1, 2, 3, 4, 5] as const;
// @ts-expect-error
participants2.push(6);

const colorsConfig = {
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
  wisteria: '#8e44ad',
  midnightBlue: '#2c3e50',
  sunFlower: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
  // } as const;
};

type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

declare type ColorKeys = keyof typeof colorsConfig;
declare type MyColor = typeof colorsConfig;

declare type MySuperColors = MyReadOnly<typeof colorsConfig>;

// type MyColor = Readonly<typeof colorsConfig>;
// let asbestosColor: MyColor = colorsConfig.asbestos;
// asbestosColor = 'sdfsfsdfdsf';
// colorsConfig.asbestos = 'sdfsdfsdf';

interface FancyButtonProps {
  children: React.ReactNode;
  bgColor?: ColorKey;
  color?: ColorKey;
  onClick?: () => void;
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  children,
  bgColor = 'turquoise',
  color = 'clouds',
  onClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: colors[bgColor],
    color: colors[color],
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
