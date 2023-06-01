// you can write js here
console.log('exo-4'); 

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"]; 
console.log("mon tableau est constitué ainsi :",secretMessage); 
console.log("mon tableau comporte :",secretMessage.length, "éléments"); 
secretMessage.pop(); 
secretMessage; 
console.log("mon tableau après pop :",secretMessage); 

secretMessage.push('to', 'program'); 
secretMessage; 
console.log("mon tableau après push :",secretMessage); 

console.log("le terme easily se trouve à l'index :",secretMessage.indexOf('easily')); 
secretMessage[secretMessage.indexOf('easily')] = 'right'; 
console.log("mon tableau après remplacement de easily :",secretMessage); 

secretMessage.shift(); 
console.log("mon tableau après shift :",secretMessage); 

secretMessage.splice(0, 0, 'Programming'); 
console.log("mon tableau après splice :", secretMessage); 

console.log("le terme get se trouve à l'index :",secretMessage.indexOf('get')); 
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know'); 
console.log("mon tableau après splice :",secretMessage); 

console.log(secretMessage.join(' ')); 