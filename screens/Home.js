import React from "react";
import { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image
} from "react-native";

import { COLORS, icons } from "../constants"


const Home = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.logoText}>Phuket</Text>
        <Text style={styles.logoText}>Local</Text>       
        <Text style={styles.logoText}>Food</Text>
        <Image source={icons.rice_bowl} style={styles.imagerice}/>
    </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FF7F50',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        color:'#FFFFFF',
        fontSize:90,
    },

    imagerice:{
        width:125,
        height:125,
    },
});