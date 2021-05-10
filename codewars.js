//Cp1
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples: */

/*Example 
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"*/

//Solution1.Cp1
// function likes(names) {
//         if(names == "")
//             return `no one likes this`;
//         else{
//           for(let i=0;i<=names.length;i++){
//                 if(names.length == 1)
//                 {  return `${names[i]} likes this`;
//                 }else if(names.length == 2){
//                    return `${names[i]} and ${names[i+1]} like this`;
//                 }else names.length == 3
//                    ?`${names[i]}, ${names[i+1]} and ${names[i+2]} like this`
//                    :`${names[i]}, ${names[i+1]} and ${names.length-2} others like this`;
//             }
//           }
//         }

//Cp2
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
/*Example
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12*/
function makeNegative(num) {
 return num > 0 ? -num : num
}