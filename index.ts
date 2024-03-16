    // ___________________FUNCTION OVERLOADING________________

// const getInput = (number1: number | string, number2: number| string):number|string=> {
//     if(typeof number1 && number2 === 'number') {
//         return number1 + number2
//     }
//     else
//     return number1 + "" + number2
// }

// console.log(getInput(2, 2))
// console.log(getInput("a", "b"))

// ___________________________________________________________-
// *******IN THIS WE NEED TO HARD CODE THAT. THAT MEANS WE NEED TO MANUALLY ADD TYPE TO THE PARAMETERS AND RETURN TYPES. IN THIS SCENARIOS WE CAN USE "ANY". THIS IS NOT RECOMMENDED, BUT IN THIS CASE WE HAVE NO OPTIONS. SO WE ARE GOING TO IMPLEMENT THAT.***********

// const getInput = (number1:any, number2:any ):any=> {
 
//     return number1 + "" + number2
// }

// console.log(getInput(2, 2))
// console.log(getInput("a", "b"))


//******** */ WE HAVE ANOTHER METHOD ALSO TO SOLVE THIS, BY USING 'METHOD OVERLOADING';******** 
// ___________USING FUNCTION OVERLOADING__________

// function getInput(number1: number, number2: number):number;
// function getInput(number1: string, number2: string):string;
// function getInput(number1: any, number2: any): any {
//     return number1 + number2;
// }

// console.log(getInput(2, 2))
// console.log(getInput("a", "b"))

// *********AS WE KNOW THAT THIS TOO IS NOT A GOOD APPROACH TO SOLVE THIS, AND HERE COMES THE 'GENERICS'************

// type clientDetail = {
//     name: "Client_Name",
//     age: 22
// }

// type adminDetail = {
//     userName: "Admin",
//     role: "Admin"
// }

// function getUserData<T>(details:T):T{
//     return details
// }

// const adminDetailSection = getUserData(adminDetail)
// const clientDetailSection = getUserData(clientDetail)

// adminDetailSection.role   
// WHEN WE USE THE INTELLISENSE WE WILL GET THE CORRECT OUTPUT. ie is the main useCase of "GENERICS". 

// Thats all to know more about GENERICS. This is really important grind this to know more..

// ______________________________INTERFACE_____________________________

// IN INTERFACE IS THERE IS NO BIG CHANGES IN THE CODE, BUT THE CHANGES WILL BE ON THE OBJECT CREATION SECTION, ie, 
// EG:
//  interface clientDetail  {
//     name: "Client_Name",
//     age: 22
// }

// interface adminDetail extends clientDetail {}

// WHAT IS HAPPENING IN HERE IS WE JUST ADD clientDetail with the adminDetail AND IN INTERFACE WE USE EXTENDS KEYWORD WITH THE INTERFACE. 


//________________ ENUMS/ AS CONST____________________
// _______________KEYOF/ TYPE OF_______________________
// _______________UTILITY TYPES_______________________
// _______________ANY/ UNKNOWN/NEVER/VOID______________
