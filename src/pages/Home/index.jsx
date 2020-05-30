
import React from 'react';
import { View , Text , ScrollView , Image , TouchableHighlight , Alert} from 'react-native';
import Categories from '../components/categories';
import Produtos from '../../produtos';
import Icon from 'react-native-vector-icons/Feather';

import style from "./style";

export default function Cart () {

  return(
      <View style={style.container}>
        <Text style={style.hello}>Seja bem vindo!</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width : "100%" , height : 80, marginTop : 30}}>
        <Categories color="blue"textColor="white" text="Notebook"  />
        <Categories color="black"textColor="white" text="Games"  />
        <Categories color="red"textColor="white" text="school"  />
        <Categories color="green"textColor="white" text="shop"  />
          </ScrollView>
          <ScrollView vertical showsVerticalScrollIndicator={false}
          >
              {
                Produtos.map((item , index) => (
                  <View key={item.id} style={style.item}>
                    <Image style={{width : 100, height : 100}} source={{uri : item.img}}>
                      
                    </Image>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <TouchableHighlight onPress={() => {}}><Icon name="shopping-bag" size={30} color="green"></Icon></TouchableHighlight>
                  </View>
                ))
              }
          </ScrollView>

        
      </View>
  );
}