import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'


const Detail = () => {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>หมูฮ้อง</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderpic() {
        return(
            <View style={{  alignItems: 'center' }} >
                <Image
                        source={images.a}
                        resizeMode="contain"
                        style={{
                            width: 300,
                            height: 300
                        }}
                    />
            </View>
        )
    }

    function rendermenu(){
        return(
            <View style={{ flex: 1, padding: SIZES.padding * 2 }}>
                
                    <Text style={{ ...FONTS.h1 }}>ส่วนผสม</Text>
                    <Text style={{ ...FONTS.h4  }}>หมูสามชั้น 1.5 กิโลกรัม</Text>
                    <Text style={{ ...FONTS.h4 }}>อบเชย 2 ท่อน</Text>
                    <Text style={{ ...FONTS.h4 }}>น้ำมันพืช</Text>
                    <Text style={{ ...FONTS.h4 }}>เห็ดหอม (แช่น้ำหั่นฝอย) 3-4 ดอก</Text>
                    <Text style={{ ...FONTS.h4 }}>เม็ดพริกไทยขาวตำ 1 ช้อนโต๊ะ</Text>
                    <Text style={{ ...FONTS.h4 }}>หอมแดงทุบ 2-3 หัว</Text>
                    <Text style={{ ...FONTS.h4 }}>กระเทียมบุบ 20-25 กลีบ</Text>
                    <Text style={{ ...FONTS.h4 }}>ซีอิ๊วดำเค็ม 4 ช้อนโต๊ะ</Text>
                    <Text style={{ ...FONTS.h4 }}>น้ำตาลมะพร้าว 1 ช้อนโต๊ะ</Text>
                    <Text style={{ ...FONTS.h4 }}>น้ำตาลทราย 1 ช้อนชา</Text>
                    <Text style={{ ...FONTS.h4 }}>น้ำส้มสายชูหมัก 1 ช้อนชา</Text>
                    <Text style={{ ...FONTS.h4 }}>เหล้าจีน 1 ช้อนโต๊ะ</Text>
                    <Text style={{ ...FONTS.h4 }}>น้ำต้มสุก 1.5 ลิตร</Text>
                    <Text style={{ ...FONTS.h4 }}>ซีอิ๊วหวาน 1 ช้อนโต๊ะ</Text>
                
                
            </View>
        )

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {renderHeader()}
                {renderpic()}
                {rendermenu()}
            </ScrollView>
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

export default Detail;