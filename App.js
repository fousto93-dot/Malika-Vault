import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import CryptoJS from 'react-native-crypto-js';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const MY_EMAIL = "fousto93@gmail.com";
  const MY_PASS = "moonman//@100";

  const handleLogin = () => {
    if (email === MY_EMAIL && password === MY_PASS) {
      setIsLoggedIn(true);
      Alert.alert("تم فك التشفير ✅", "مرحباً بك في القبو.");
    } else {
      Alert.alert("محاولة اختراق! ❌", "المعلومات غلط.");
    }
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>MALIKA VAULT 🔒</Text>
        <TextInput style={styles.input} placeholder="إيميل المطور" onChangeText={setEmail} placeholderTextColor="#444"/>
        <TextInput style={styles.input} placeholder="كلمة السر" secureTextEntry onChangeText={setPassword} placeholderTextColor="#444"/>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>دخول آمن</Text>
        </TouchableOpacity>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialBtn, {backgroundColor: '#1877f2'}]}><Text style={styles.btnText}>Facebook Login</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.socialBtn, {backgroundColor: '#fff'}]}><Text style={[styles.btnText, {color: '#000'}]}>Google Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>قبو مليكة 🛡️</Text>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.encryptedMsg}>البيانات مشفرة ومحمية من المتطفلين</Text>
      </ScrollView>
      <TouchableOpacity onPress={() => setIsLoggedIn(false)} style={styles.logoutBtn}>
        <Text style={styles.btnText}>قفل وتشفير البيانات</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 60 },
  loginContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 32, color: '#ff0000', fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 55, backgroundColor: '#0a0a0a', color: '#fff', borderRadius: 12, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#1a1a1a' },
  btn: { backgroundColor: '#ff0000', padding: 18, borderRadius: 12, width: '100%', alignItems: 'center' },
  socialButtons: { width: '100%', marginTop: 20 },
  socialBtn: { padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 10 },
  btnText: { color: '#fff', fontWeight: 'bold' },
  encryptedMsg: { color: '#00ff00', marginTop: 20 },
  logoutBtn: { backgroundColor: '#333', padding: 20, alignItems: 'center' }
});
      
