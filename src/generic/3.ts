/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<P extends Object, K extends Object>(objA: P, objB: K) {
  return Object.assign(objA, objB);
}

export {};
