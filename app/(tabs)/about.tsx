import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons
import carAbout from '../../assets/images/car-about.png'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={carAbout} 
          style={styles.image}
        />
      </View>

      {/* About Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
          This app is to leverage advanced technology and artificial
          intelligence to enhance road safety by monitoring driver behavior and
          detecting early signs of drowsiness. By identifying indicators such as
          eye closure, yawning, and head movements, AGA aims to prevent
          accidents and save lives through timely alerts and interventions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  aboutContainer: {
    flex: 3,
    backgroundColor: "#333333",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  aboutTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  aboutText: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
