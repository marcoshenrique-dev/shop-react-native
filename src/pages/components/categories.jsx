
import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

export default function Categories (props){

  return(
    
      <View style={[style.box , { backgroundColor : props.color}]}>
          <Text style={[style.text , { color : props.textColor}]}>{props.text}</Text>
      </View>
  );

}

const style = StyleSheet.create({

  box : {

   
    borderRadius : 10,
    width : 100,
    height : 80,
    marginLeft : 20,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

  text : {

    color : 'white',
    fontSize : 15
  }

});