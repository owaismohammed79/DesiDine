import { TextEncoder, TextDecoder } from 'util';
import 'whatwg-fetch' //Adds fetch and request response to JSDOM env which it doesnt natively have

global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;