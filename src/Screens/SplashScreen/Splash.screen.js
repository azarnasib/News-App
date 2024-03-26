import React, { useEffect } from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { COLORS } from "../../Utils/Colors";



const Splash = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate("Home");
    }, 4000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []); // Run the effect only once by passing an empty dependency array

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230921/original/pngtree-latest-news-megaphone-yellow-banner-vector-illustration-latest-publication-news-icon-png-image_12719792.png'
          }}
          style={styles.image} // Remove one instance of style prop here
        />
        <Text style={styles.title}>Your Window to the World</Text>
      </View>
    );
  }
  

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLORS.primary
    },

    title:{
        fontSize:20,
        alignSelf:'center',
        fontWeight:"bold",
        color:COLORS.secondary

    },

    image:{
        width: 200,
        height:200,
        resizeMode:'contain',
        marginBottom:20

    }

})

export default Splash;