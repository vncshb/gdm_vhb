import React from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import LogoR from "../assets/logoR.png"

const Topbar = ({ setUser, setLoja, icon, setSearch, searchItem, search }) => {
    return (
        <View style={styles.topBar}>
            <Image source={LogoR} style={styles.topLogo} />
            <View style={styles.topView}>
                <TextInput 
                    style={styles.topInput}
                    placeholder="Pesquisar"
                    value={search}
                    onChangeText={(value) => {setSearch(value); searchItem(value);}}
                />
                <Ionicons 
                    style={styles.topSearch}
                    name={"search"}
                    size={30}
                />
            </View>
            <TouchableOpacity style={styles.topBtn} onPress={() => setUser ? setUser(null) : setLoja(null)}>
                <Ionicons 
                    style={styles.topExit}
                    name={icon}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Topbar;