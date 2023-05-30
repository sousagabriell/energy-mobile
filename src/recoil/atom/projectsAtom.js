import { atom } from "recoil";

export const ProjectAtom = atom({
  key: "ProjecState",
  default: [{
         "rows":[{
           "Ativo Pai": "",
           "Ativo Real": "",
           "Complemento Localização": "",
           "Código At": "",
           "Código Instalação": "",
           "Código Localização": "",
           "Descrição Ativo": "",
           "Descrição Instalação": "",
           "Descrição Localização": "",
           "Tipo Instalação": "",
           "Usar Código Ativo": "",
           "extra_files": [''],
           "id": ""}],
         }],
});