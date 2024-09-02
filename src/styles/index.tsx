import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width,
        height,
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.vermelhoEscuro,
    },
    loginBox: {
        width: "80%",
        maxWidth: 360,
        paddingVertical: 10,
        paddingTop: 15,
        paddingBottom: 20,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        resizeMode: "center",
        width: 150,
        height: 150,
        marginBottom: 40,
        borderRadius: 20,
    },
    loginTitle: {
        textAlign: "center",
        color: "black",
        fontSize: 38,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: "80%",
        maxWidth: 300,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: colors.mainGrey,
        borderRadius: 10,
        color: "black",
        marginVertical: 5,
        fontSize: 16
    },
    btnLogar: {
        width: "80%",
        maxWidth: 300,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: colors.mainRed,
    },
    txtLogar: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    senhaView: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    eyePass: {
        position: "absolute",
        top: 13,
        right: 40,
        color: colors.mainGrey,
    },
    novaConta: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 6
    },
    novaTxt: {
        marginRight: 5,
        fontSize: 16
    },
    novaClick: {
        color: colors.mainRed,
        fontSize: 16,
        fontWeight: "bold",
    },
    esqueceu: {
        marginTop: 6,
        color: colors.mainRed,
        fontSize: 16,
        justifyContent: "center",
        fontWeight: "bold",
    },
    loadingOverlay: {
        backgroundColor: colors.loadingOverlay,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        width,
        height,
    },
    itemDescricao: {
        fontSize: 18,
        marginBottom: 3,
    },
    itemPreco: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    itemCard: {
        borderColor: colors.mainGrey,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        backgroundColor: colors.creme,
    },
    topExit: {
        color: "white"
    },
    topBtn: {
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: colors.mainRed,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    topView: {
        flex: 1,
        height: 50,
        maxWidth: 300,
    },
    mainContent: {
        width: "100%",
        height: "100%",
        flex: 1, 
        backgroundColor: "white",
    },
    topBar: {
        width: "100%",
        minHeight: 80,
        backgroundColor: colors.vermelhoEscuro,
        paddingVertical: 10,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 0,
        zIndex: 99
    },
    topLogo: {
        resizeMode: "center",
        width: 70,
        height: 70,
    },
    topInput: {
        flex: 1,
        height: 50,
        maxWidth: 300,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: colors.mainGrey,
        borderRadius: 10,
        backgroundColor: "white",
        color: "black",
        marginHorizontal: 15,
        fontSize: 16
    },
    topSearch: {
        position: "absolute",
        top: 10,
        right: 30,
        color: colors.mainGrey,
    },
    mainList: {
        alignSelf: "center",
        width: "95%",
        padding: 10,
        marginTop: 100,
    },
    blank: {
        height: 30,
    },
    lojaNome: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    lojaText: {
        fontSize: 18,
        textAlign: "center",
    },
    itemImage:{ 
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "cover",
        marginRight: 10,
        alignItems: "center",
    },
    itemContent: {
        flex: 1
    },
});

export default styles;