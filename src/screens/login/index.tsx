import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import Logo from "../../assets/logo.png"
import styles from "../../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { stringMd5 } from 'react-native-quick-md5';
import { auth } from "../../services/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [eye, setEye] = useState(true);
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, stringMd5(senha))
            .then(async (res) => {
                setUser(res.user);
            });
        } catch (e: any) {
            alert("Usuário/Senha incorreto, tente novamente.");
            console.log(e);
        } finally{
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {loading && (
                <View style={styles.loadingOverlay}>
                    <Text>
                        <ActivityIndicator size="large" color="white" />
                    </Text>
                </View>
            )}

            <Image source={Logo} style={styles.logo} />

            <View style={styles.loginBox}>
                <Text style={styles.loginTitle}>Login</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={styles.senhaView}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={eye}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <Ionicons 
                        style={styles.eyePass}
                        name={
                            eye ? "eye" : "eye-off"
                        }
                        size={25}
                        onPress={() => setEye(!eye)}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.btnLogar}
                    onPress={signIn}
                >
                    <Text style={styles.txtLogar}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <View style={styles.novaConta}>
                    <Text style={styles.novaTxt}>Não tem conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.novaClick}>Crie agora!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}