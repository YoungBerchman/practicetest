export const addUp = (a: number, b: number): number => {
  return a + b;
};

export const nameShower = (name: string): string => {
  return name;
};

export const returnZero = (a: number): number => {
  return a - a;
};
interface iProps {
  name: string;
  id: number;
}

export const objData = (name: string): iProps => {
  return { name, id: 3 };
};

export const extract = (name: string): string => {
  return `Hello ${name}, Welcome to Codelab`;
};

let student: Array<string> = ["Peter"];

export const newStudent = (name: string): Array<string> => {
  let x = [...student, name];

  return x;
};
console.log(newStudent("james"));

export const dataFN = (numb: number): number => {
  let x = parseInt(numb.toString().split("").reverse().join(""));
  return x;
};
console.log(dataFN(227));
