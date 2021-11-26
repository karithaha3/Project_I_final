import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Food = ({ navigation }) => {



    const restaurantData = [
        {
            id: 1,
            name: "หมูฮ้อง",
            photo: images.mhuhong,
            
        },
        {
            id: 2,
            name: "โลบะ",
            photo: images.loba,
        },
        {
            id: 3,
            name: "โอต้าว",
            photo: images.otaw,
        },
        {
            id: 4,
            name: "หมี่ฮกเกี้ยน",
            photo: images.meehokkien,
        },
        {
            id: 5,
            name: "โอ๋เอ๋ว",
            photo: images.oaew,
        },
        {
            id: 6,
            name: "หมี่หุ้น",
            photo: images.meehoon,
        },
        {
            id: 7,
            name: "อาโป้ง",
            photo: images.arprong,
        },


    ]

    const [restaurants, setRestaurants] = React.useState(restaurantData)



    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Food;