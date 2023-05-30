export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'O e-mail não pode estar vazio.';
  if (!re.test(email)) return 'Ooops! Precisamos de um endereço de e-mail válido.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'A senha não pode estar vazia.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'O e-mail não pode estar vazio.';

  return '';
};

export const invalidPassword = () => {
  return "e-mail ou senha inválido"
}
