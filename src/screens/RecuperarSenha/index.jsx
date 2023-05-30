import React from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';


export function RecuperarSenha({navigation}) {
return (
         <Background>
        <>
          <Card style={styles.card}>
            <Logo />
            <Card.Title title="Recuperar Senha"style={styles.borderTitle} subtitleStyle={styles.subtitle} titleStyle={styles.title} ></Card.Title>
            <Text style={styles.subtitle}>Digite o email cadastrado para recuperar senha</Text>
            <Card.Content>
              <TextInput label="Digite o email cadastrado"/>
              <Button mode="contained" onPress={() => navigation.navigate('ConfirmarRecuperacao')}>
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
  