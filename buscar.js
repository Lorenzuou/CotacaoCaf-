const cheerio = require('react-native-cheerio');


let buscar =  function(){ 
    
    


  
  let valores =   fetch('https://www.cccv.org.br/').then(response => response.text())
    .then(text => {
        
        let $ = cheerio.load(text); 
    
        let Arab6 = $('.bottom-arabica').find('li').eq(2).text();
        
        let Arab7 = $('.middle-arabica').slice(1).find('li').eq(2).text();

        let Con = $('.bottom-conilon').find('li').eq(2).text();
           


        let cotacao = {
            Arab6, 
            Arab7, 
            Con 

        }; 
       
       
      
        return cotacao;

    }).catch(err => console.error(err));
 
    
    
 return valores; 
 
}

//console.log(buscar())
export default buscar; 




