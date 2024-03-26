import React, { useEffect,useState } from "react";
import {View, Text, StyleSheet, ActivityIndicator,ScrollView, Image,Dimensions} from "react-native";
import { COLORS } from "../../Utils/Colors";
import { fetchNewsBasedOnText } from "../../Utils/Api";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
//import { Ionicons } from "@expo/vector-icons";hhhhhhhhr

const { width } = Dimensions.get("window");

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const newsData = await fetchNewsBasedOnText("Highlight&Information");
      console.log("News Data:", newsData);
      setNews(newsData.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handlePressNews = (articleData) => {
    props.navigation.navigate("News", { articleData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Discover Today</Text>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      ) : (
        <View>
          {Array.isArray(news) && news.length > 0 && (
            news.map((item, index) => (
              <TouchableOpacity key={index} style={styles.newsItem} onPress={() => handlePressNews({ title: item.title, content: item.content })}>
                <Image source={{ uri: item?.image_url }} style={styles.newsImage} />
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginVertical: 20,
  },
  newsItem: {
    width: width * 0.9,
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  newsDescription: {
    fontSize: 16,
    color: COLORS.secondary,
  },
  newsImage: {
    width: width * 0.9,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  }
});

export default Home;