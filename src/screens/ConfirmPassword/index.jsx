import React from 'react';
import { Background } from '../../components/Background';
import { Card, Text } from 'react-native-paper';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Image, StyleSheet } from 'react-native';


export function ConfirmPassword({navigation}) {
    return(
        <Background>
                    <>
          <Card style={styles.card}>
            <Logo />
            <Card.Title style={styles.borderTitle} subtitleStyle={styles.subtitle} titleStyle={styles.title} ></Card.Title>
            <Text style={styles.subtitle}>Email enviado com sucesso, recupere sua senha e faça novamente o login.</Text>
            <Card.Content>
            <Image
        style={styles.check}
        source={require('../../assets/check.png')}
      />
              <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.btn}>
              Voltar ao Login
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
      check: {
        marginLeft: 95,
        marginTop: 15,
        marginBottom: 15
      },
      btn:{
        backgroundColor: '#000C34'
      }
  })