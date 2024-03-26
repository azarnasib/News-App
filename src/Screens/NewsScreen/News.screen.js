import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {COLORS} from "../../Utils/Colors";
import { useRoute } from "@react-navigation/native";

const News = () => {
    const route = useRoute();
    const { articleData } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{articleData.title}</Text>
        <Text style={styles.content}>{articleData.content}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: COLORS.secondary,
      marginBottom: 10,
    },
    content: {
      fontSize: 18,
      color: COLORS.secondary,
    },
  });
  
  export default News;