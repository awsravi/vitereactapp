let userName='Ravikumar';

export let age =29;

let marks=[10,20,30,40,50];
//Default export use only one time in a file
//If you want to export more than one time then use named export
export default userName;

export {marks}; //Named export

export const greetName=() => {

    return 'Hey Ravi Keep Doing Practices ReactJs '+userName;
}