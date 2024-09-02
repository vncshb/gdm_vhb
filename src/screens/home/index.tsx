import React, { useState } from "react";
import { Text, View, ScrollView, Image, FlatList , TouchableOpacity } from "react-native";
import { db } from "../../services/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";
import Topbar from "../../components/Topbar";
import styles from "../../styles";

export default function Home({ setUser, setLoja }) {
    const [lojas, setLojas] = useState([]);
    const [auxlojas, setAuxlojas] = useState([]);
    const [lock, setLock] = useState(true);
    const [search, setSearch] = useState("");
    
    const init = async () => {
        const get = await getDocs(collection(db, "lojas"))
        var items = [];
        get.docs.forEach((doc) => {
            items.push({
                id: doc.data().id,
                nome: doc.data().nome,
                descricao: doc.data().descricao,
                endereco: doc.data().endereco,
                telefone: doc.data().telefone,
                imagem: doc.data().imagem || "",
             });
        });
        setLojas(items);
        setLock(false);
    };
    lock && init();

    function searchItem(text) {
        var aux = [];
        lojas.forEach((obj) => {
            if(obj.nome.toUpperCase().indexOf(text.toUpperCase()) > -1 || obj.descricao.toUpperCase().indexOf(text.toUpperCase()) > -1){
                aux.push(obj);
            }
        });
        setAuxlojas(aux);
    };

    function renderItem(obj) {
        console.log("obj.imagem: ", obj.imagem);
        return (
            <TouchableOpacity onPress={() => setLoja(obj)}>
                <View style={[styles.itemCard, { flexDirection: "row", alignItems: "center" }]}>
                    {obj.imagem && <Image source={{ uri: obj.imagem }} style={styles.itemImage} />}
                    <View style={styles.itemContent}>
                        <Text style={styles.itemName}>{obj.nome}</Text>
                        <Text style={styles.itemDescricao}>{obj.descricao}</Text>
                        <Text>{obj.endereco}</Text>
                        <Text>{obj.telefone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainContent}>
            <Topbar setUser={setUser} setLoja={null} icon={"exit"} setSearch={setSearch} searchItem={searchItem} search={search} />

            <ScrollView style={styles.mainList}>
                <FlatList
                    data={search == "" ? lojas : auxlojas}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
                <View style={styles.blank} />
            </ScrollView>
        </View>
    );
}