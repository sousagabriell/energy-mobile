import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { useSheet } from '../../hooks/sheet';
import { emailValidator } from '../../core/utils'




export function RecuperarSenha({navigation}) {
  const { forgotPassword } = useSheet()
  const [email, setEmail] = useState({ value: '', error: '' })


  async function setForgotPassword() {
    const emailError = emailValidator(email.value)

    if(emailError) {
      setEmail({ ...email, error: emailError })
      return 
    }
    const emailValue = {email: email.value.toLowerCase()}
    try{
      navigation.navigate("ConfirmarRecuperacao")  
      return await forgotPassword(emailValue)
    }catch (error){
      if (error.message === 'ERR_NETWORK') {
        Alert.alert('Erro!', 'Verifique sua conexão com a internet!')
        setIsLoading(false)
        return
      }
      setEmail({ value: '', error: invalidPassword() })
    }
  }
return (
         <Background>
        <>
          <Card style={styles.card}>
            <Logo />
            <Card.Title title="Recuperar Senha"style={styles.borderTitle} subtitleStyle={styles.subtitle} titleStyle={styles.title} ></Card.Title>
            <Text style={styles.subtitle}>Digite o email cadastrado para recuperar senha</Text>
            <Card.Content>
              <TextInput 
              label="Digite o email cadastrado"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              />
              <Button mode="contained" onPress={() => setForgotPassword()}>
                Recuperar Senha
              </Button>
            </Card.Content>
          </Card>
        </>
         </Background>
)
}
const styles = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: '#f1f1f129',
        marginTop: 50
      },
      forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24
      },
      row: {
        flexDirection: 'row',
        marginTop: 4
      },
      borderTitle: {
        borderTopColor: '#01FAFF',
        borderTopWidth: 1,
      },
      title: {
        color: '#fff',
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 35,
      },
      subtitle: {
        color: '#fff',
        textAlign: "center",
      },
      label: {
        color: '#fff',
      },
      password: {
        marginTop: 25,
        color: '#fff',
      },
      link:{
        color: '#01FAFF',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        marginTop: 8
      },
      subtitle: {
        color: '#fff',
        textAlign: "center"
      },
  })
  