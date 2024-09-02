import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, FlatList , TouchableOpacity } from "react-native";
import { db } from "../../services/firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore";
import Topbar from "../../components/Topbar";
import styles from "../../styles";

export default function Loja({ loja, setLoja }) {
    const [pratos, setPratos] = useState([]);
    const [auxpratos, setAuxpratos] = useState([]);
    const [lock, setLock] = useState(true);
    const [search, setSearch] = useState("");
    
    const init = async () => {
        const get = await getDocs(query(collection(db, "pratos"), where("loja", "==", loja.id)));
        var items = [];
        get.docs.forEach((doc) => {
            items.push({
                id: doc.data().id,
                nome: doc.data().nome,
                descricao: doc.data().descricao,
                loja: doc.data().loja,
                preco: doc.data().preco,
                imagem: doc.data().imagem || "",
             });
        });
        setPratos(items);
        setLock(false);
    };
    lock && init();

    function searchItem(text) {
        var aux = [];
        pratos.forEach((obj) => {
            if(obj.nome.toUpperCase().indexOf(text.toUpperCase()) > -1 || obj.descricao.toUpperCase().indexOf(text.toUpperCase()) > -1){
                aux.push(obj);
            }
        });
        setAuxpratos(aux);
    };

    function renderItem(obj) {
        return (
            <TouchableOpacity onPress={() => alert("1x " + obj.nome + " foi adicionado a sua sacola!")}>
                <View style={[styles.itemCard, { flexDirection: "row", alignItems: "center" }]}>
                    {obj.imagem && <Image source={{ uri: obj.imagem }} style={styles.itemImage} />}
                    <View style={styles.itemContent}>
                    <Text style={styles.itemName}>{obj.nome}</Text>
                    <Text style={styles.itemDescricao}>{obj.descricao}</Text>
                    <Text style={styles.itemPreco}>R$ {(Number(obj.preco).toFixed(2)).toString().replace(".", ",")}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainContent}>
            <Topbar setUser={null} setLoja={setLoja} icon={"arrow-back"} setSearch={setSearch} searchItem={searchItem} search={search} />

            <ScrollView style={styles.mainList}>
                <View style={styles.itemCard}>
                    {loja.imagem && <Image source={{ uri: loja.imagem }} style={localStyles.lojaImage} />}
                    <Text style={styles.lojaNome}>{loja.nome}</Text>
                    <Text style={styles.lojaText}>{loja.descricao}</Text>
                    <Text style={styles.lojaText}>{loja.endereco}</Text>
                    <Text style={styles.lojaText}>{loja.telefone}</Text>
                </View>

                <Text style={localStyles.titleList}>Lista de Pratos:</Text>

                <FlatList
                    data={search == "" ? pratos : auxpratos}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.id}
                />

                <View style={styles.blank} />
            </ScrollView>
        </View>
    );
}

const localStyles = StyleSheet.create({
    titleList: {
        fontSize: 18,
        marginVertical: 10
    },
    lojaImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode: "cover",
        alignSelf: "center",
        marginBottom: 15,
    },
});