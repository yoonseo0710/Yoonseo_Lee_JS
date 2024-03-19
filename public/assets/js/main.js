console.log( 'test this');

var data_string = '{ "name": "John", "age": 30, "car": null}';
console.log( data_string );


//Take Json formatted string and converts to JavaScript object
var data_obj = JSON.parse( data_string );
console.log( data_obj);


//To get the string value for the name property(John) in the object
console.log( data_obj.name );

//To get the string value for the age property(30) in the object
console.log( data_obj.age );




//These two will give exactly the same message which is The user named John is 30 years old.
console.log( "The user named " + data_obj.name + " is " + data_obj.age + " years old." );

console.log( `The user named ${data_obj.name} is ${data_obj.age} years old.` );



 //change data
 data_obj.age = data_obj.age + 1;
 console.log( `The user named ${data_obj.name} is ${data_obj.age} years old.` );



 //make new variable, chage the variable -> now we will get {"name":"John","age":31,"car":null}
 var data2 = JSON.stringify( data_obj );
 console.log( data2 );


 Splitting();
ScrollOut({
   targets: '[data-splitting]'
});
 