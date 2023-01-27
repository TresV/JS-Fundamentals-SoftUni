/* 
2.	Concatenate Names
Write a function, which receives two names as string parameters and a delimiter. 
Print the names joined by the delimiter. 
*/


function concatenateNames(first, second, del) {
  console.log(`${first}${del}${second}`);
}

concatenateNames("John", "Smith", "->");
concatenateNames("Jan", "White", "<->");
concatenateNames("Linda", "Terry", "=>");
