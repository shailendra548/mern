const movies=['RRR','PK','Run','365Days','KGF','Mard'];

//Indexing

console.log(movies[4]);
console.log(movies.indexOf('Run'));


console.log(movies.at(-1));
console.log(movies.length);


//slicing
console.log(movies.slice(2,5));
console.log(movies.slice());
console.log(movies.slice(0,100));


//Adding element
console.log([...movies, 'Barfi']);
console.log(['Batman',...movies,'Barfi']);
console.log(["Spiderman", ...movies]);



console.log(movies);
console.log([...movies.slice(0,4),'100Days',...movies.slice(4)]);


console.log(movies);
movies.pop(); //removes last element from array
console.log(movies);
movies.shift(); //removes first element from array
console.log(movies);


//remove multiple  elements from  array

movies = [ ...movies, 'flash', 'exits14', 'nh10' ];
console.log(movies);
movies.slice();