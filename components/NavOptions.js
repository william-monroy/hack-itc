import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "http://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "http://links.papareact.com/28w",
        screen: "EatsScreen" // Cambio despues
    },
]

const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => {
                return (
                    <TouchableOpacity 
                        key={index} 
                        style={tw`p-1 pl-6 pb-8 pt-4 bg-gray-200 m-2 rounded-md`}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <View>
                            <Image
                                source = {{uri: item.image}}
                                style = {{width:120, height:120, resizeMode:"contain"}}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                            <Icon 
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type="antdesign"
                                name="arrowright"
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
