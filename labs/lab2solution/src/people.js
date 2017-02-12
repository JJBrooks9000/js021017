const longestName = function(...names) {
  // let longest = names[0];
  // for(let i = 0; i < names.length; i++) {
  //   if(longest.length < names[i].length) {
  //     longest = names[i];
  //   }
  // }
  // 
  // return longest;

  if(names.length > 0) {
    return names.reduce(
      (name1, name2) => name1.length > name2.length ? name1 : name2);    
  }
}                                       

// const namesThatStartWith = function(letter, ...names) {
//   // let selectedNames = [];
//   // for(let i = 0; i < names.length; i++) {
//   //   let name = names[i];
//   //   if(name.startsWith(letter)) {
//   //     selectedNames.push(name);
//   //   }
//   // }
//   // return selectedNames;
// 
//   return names
//     .filter(name => name.startsWith(letter));
// }

const namesThatStartWith = (letter, ...names) => 
  names.filter(name => name.startsWith(letter));
  
const greet = (msg, name) => `${msg} ${name}, how're you?`;

const greetWith = (msg) => greet.bind(null, msg);

module.exports = {
  longestName: longestName,
  namesThatStartWith: namesThatStartWith,
  greet: greet,
  greetWith: greetWith
};