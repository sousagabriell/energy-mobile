import React, { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, Alert, ScrollView, View, Image } from 'react-native'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../core/theme'
import { emailValidator, passwordValidator, invalidPassword } from '../../core/utils'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'
import { Logo } from '../../components/Logo'
import { Header } from '../../components/Header'
import NetInfo from '@react-native-community/netinfo'
import { Card, Text } from 'react-native-paper'

export function Login({ navigation }) {
  const { user, signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [isConnected, setIsConnected] = useState(true)

  async function handleLoginPressed() {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const passwordIvalid = invalidPassword(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    if (!isConnected) {
      Alert.alert('Erro!', 'Verifique sua conexão com a internet!')
      return
    }
    setIsLoading(true)
    const body = {
      email: email.value.toLowerCase(),
      password: password.value
    }
    try {
      return await signIn(body)
    } catch (error) {
      if (error.message === 'ERR_NETWORK') {
        Alert.alert('Erro!', 'Verifique sua conexão com a internet!')
        setIsLoading(false)
        return
      }
      setEmail({ value: '', error: invalidPassword() })
      setPassword({ value: '', error: invalidPassword() })
      setIsLoading(false)
    }
  }
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      setIsConnected(state.isInternetReachable)
    })

    return () => removeNetInfoSubscription()
  }, [])
  

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
    <Background style={styles.cont}>
    
      {!isLoading ? (
        <>
          <Card style={styles.card}>
            <Logo/>
            <Card.Title title="LOGIN" subtitle="Faça login para iniciar" style={styles.borderTitle} subtitleStyle={styles.subtitle} titleStyle={styles.title}></Card.Title>
            <Card.Content>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                placeholder="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <Text style={styles.label}>Senha:</Text>
              <TextInput
                placeholder="Senha"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
              />
              <Button mode="contained" onPress={() => handleLoginPressed()}>
                Entrar
              </Button>
            </Card.Content>
          </Card>
          <Text style={styles.password}>Esqueceu sua senha?</Text>
          <Text style={styles.link}  onPress={() => navigation.navigate('RecuperarSenha')}>Recuperar Senha</Text>
          <View style={styles.socialmedia}>
          <Image style={styles.linkedin} source={require('../../assets/linkedin.png')}  />
          <Image style={styles.whatsapp} source={require('../../assets/whatsapp.png')}  />
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </Background>
    </ScrollView>

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
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
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
    marginTop: 5
  },
  subtitle: {
    color: '#fff',
    textAlign: "center"
  },
  label: {
    color: '#fff',
  },
  password: {
    marginTop: 25,
    color: '#fff',
    textAlign: 'center'
  },
  link:{
    color: '#01FAFF',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    marginTop: 8,
    textAlign: 'center'
  },
  socialmedia:{
    flexDirection: 'row',
    paddingLeft: '28%',
    width: '100%',
    paddingTop: '8%',
    marginTop: '9%',
    marginBottom: '8%',
    borderTopColor: '#01FAFF',
    borderTopWidth: 1,
  },
  linkedin: {
    marginRight: '30%',
    backgroundColor: '#f1f1f129',
  }
})
