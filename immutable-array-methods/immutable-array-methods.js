
const clone = (array) => [...array];
const push = (...items) => (array) => [...array, ...items];
const unshift = (...items) => (array) => [...items, ...array];
const pop = (array) => array.slice(0, -1);
const shift = (array) => array.slice(1);
const sort = (func) => (array) => [...array].sort(func);
const del = (i) => (array) => [...array.slice(0, i), ...array.slice(i + 1)];
const splice = (start, deleteCount, ...items) => (array) => [...array.slice(0, start), ...items, ...array.slice(start + deleteCount)];

export { clone, push, unshift, pop, shift, sort, del, splice };
