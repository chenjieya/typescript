// ts文件限制，不能写ts后缀名，但是不写后缀名又不认识该文件，所以需要在webpack配置文件
// 中配置后缀名
import { sum } from './math';
const message:string = 'Hello Typescript';

console.log(sum(100, 2123));
console.log(message);