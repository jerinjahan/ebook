// ./screens/Home.js

import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Button, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from '../constants';
import tw from 'tailwind-react-native-classnames';
import SegmentedControlTab from 'react-native-segmented-control-tab';


// import data
import booksList from '../assets/data/books.json';
import images from "../assets/images/images";
// import { useFonts, Roboto_900Black_Italic } from '@expo-google-fonts/roboto';

const numColumns = 2;

const Home = ({ navigation }) => {

    // let [fontsLoaded] = useFonts({
    //     Roboto_900Black_Italic,
    // });
    const data = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen'
        },
        {
            id: '456',
            title: 'Order food',
            image: 'https://links.papareact.com/28w',
            screen: 'EatsScreen'
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(9);
    const [selectedIndices, setSelectedIndices] = useState([0]);
    const [customStyleIndex, setCustomStyleIndex] = useState([0]);

    const handleSingleIndexSelect = (index) => {
        setSelectedIndex(index)
    };

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        // console.log('data = ',data);
        return data;
    };

    const renderHeader = (
        <View style={styles.headerWrapper}>
            <Ionicons name="menu" color={COLORS.black} size={28} />
            <Text style={{ ...FONTS.headerLine6 }}>All Books</Text>
            <Feather name="search" color={COLORS.black} size={28} />
        </View>
    )

    const segmentControl = (
        <SegmentedControlTab
            tabsContainerStyle={tw`bg-gray-100 p-2 rounded shadow`}
            values={['Ebook', 'AudioBooks']}
            selectedIndex={selectedIndex}
            // tabStyle={tw`pt-2 pb-2 bg-gray-100 shadow border border-gray-100 border-opacity-100`}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            activeTabOpacity={1}
            onTabPress={handleSingleIndexSelect}
        />
    )

    const renderBooks = (
        <View style={tw`flex-1 mt-5`}>
            <FlatList
                data={formatData(booksList.books, numColumns)}
                numColumns={numColumns}
                keyExtractor={(item, index) => index}
                style={{ flex: 1 }}
                renderItem={renderItem}
            />
        </View>
    )

    function renderItem(book) {
        let isEven = (book.index) % 2 == 0;
        let item = book.item;
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity 
                style={[styles.item, { marginLeft: isEven ? 0 : 16 }]}
                onPress={() => navigation.navigate('BookDetails')}
            >
                <ImageBackground
                    source={images[item.image]}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                />
            </TouchableOpacity>

        );
    }

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`mt-10 pl-5 pr-5 flex-1`}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.white} />

                {/* render header section */}
                {renderHeader}

                {/* segment tab control */}
                {segmentControl}

                {/* books cover list */}
                {renderBooks}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        // flex:1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        borderWidth: 0,
        marginBottom: 24
    },
    tabStyle: {
        borderColor: '#ddd',
        backgroundColor: '#F7F7F7',
        paddingVertical: 10,
    },
    activeTabStyle: {
        backgroundColor: COLORS.white,
        // borderRadius: 6,
    },
    activeTabTextStyle: {
        color: COLORS.black,
        fontWeight: "bold",
        ...FONTS.body1
    },
    tabTextStyle: {
        color: COLORS.black,
        fontWeight: "bold",
        ...FONTS.body1
    },

    item: {
        borderWidth: 0,
        flex: 1,
        marginBottom: 16,
        height: Dimensions.get('window').width / numColumns,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },

});

export default Home;