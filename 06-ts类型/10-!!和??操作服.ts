// !!
const bol: string = 'hello';

const bol1: boolean = !!bol;  // 布尔

// ?? 相当于三木运算符和｜｜
let str: string | null = null;

// 如果str不存在则给个默认值
let str1 = str ?? '你好，路星河';