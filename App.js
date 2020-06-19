import cotacao from './buscar'

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';









  
   
       
 
 
 
export default  function App() {
 

 const [ Arab6,setArab6] = useState('');
 const [ Arab7,setArab7] = useState('');
 const [ Con,setCon] = useState('');
 



  async function ver(){ 
      valores =  await cotacao();

       setArab6(valores.Arab6); 
       setArab7(valores.Arab7);
       setCon(valores.Con);

   } 
ver();







  
  return (
   
    <ScrollView style={estilos.tela}>
     
        <Text style={estilos.titulo}>Cotação do café</Text>
       
    <View style={estilos.colunas}> 
      <View style={estilos.coluna}>
        <Text style={estilos.texto}> 
          Café Arábica, Tipo 6
          </Text>  
          <Text style={estilos.valor} > {Arab6}   </Text>
        </View>  
        <View style={estilos.coluna}>
        <Text style={estilos.texto}> 
          Café Arábica, Tipo 7
          </Text>  
          <Text style={estilos.valor} >{Arab7}   </Text>
        </View>  
        <View style={estilos.coluna}>
        <Text style={estilos.texto}> 
          Café Conilon
          </Text>  
          <Text style={estilos.valor} > {Con}   </Text>
        </View>
      </View>   
      </ScrollView>
   
    

  );

};

const estilos = StyleSheet.create({
  tela: {
   padding: 40,
   backgroundColor: "#472d20"

  },
  colunas:{ 
     
     flexDirection: 'column',    
     //justifyContent: 'space-around', 
    
  },

  coluna:{ 
    height: 120,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  },
  
  texto:{ 
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  valor:{ 
    color: "#000",
    fontSize: 35,
    textAlign: 'center'
  },
  
  
  titulo:{ 
    color:"white",
    fontSize: 60
  }
,
});

