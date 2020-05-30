
import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container : {
    
    color : '#F1E7E7'
  },

  hello : {
      fontSize : 20,
      fontWeight : 'bold',
      marginTop : 30,
      marginLeft : 10
  },
  item : {

    flex : 1 ,
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginTop : 20,
    backgroundColor : 'white',
    width : 400,
    borderRadius : 10,
    padding : 20,
  alignSelf : 'center',
  alignItems : 'center'
  }

});

export default style;