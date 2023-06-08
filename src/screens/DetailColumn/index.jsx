import React, { useEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'
import { HeaderScreens } from '../../components/HeaderComponents';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRecoilState } from "recoil";
import { ProjectAtom } from "../../recoil/atom/projectsAtom";
import {
  Collapse as CollapseReact,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';


export function ColumnDetail({  }) {
  const [project, setProjectState] = useRecoilState(ProjectAtom);

  useEffect(() => {
  }, [project, setProjectState])



  return (
    <View style={styles.container}>
      <HeaderScreens />
      <View style={styles.titlePage}>
        <Image source={require('../../assets/menu-grid-o.png')} style={styles.iconTitle} />
        <Text style={styles.title}>Informações do Projeto</Text>
      </View>
      <ScrollView>
        {project.map(singleProject => {
          return <>
            <View style={styles.data}>
              <CollapseReact key={singleProject['id']}>
                <CollapseHeader style={styles.headerCollapse}>
                  <Text style={styles.numeroLinha}>Linha:{singleProject['id']}</Text>
                  <Image source={require('../../assets/pen.png')} style={styles.penEdit} />
                </CollapseHeader>
                <CollapseBody>
                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Usar Código Ativo:{singleProject['Usar Código Ativo']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Usar Código Ativo:{singleProject['Usar Código Ativo']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Descrição Ativo:{singleProject['Descrição Ativo']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Código Ativo:{singleProject['Código Ativo']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Complemento Localização:{singleProject['Complemento Localização']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Código At:{singleProject['Código At']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Código Instalação:{singleProject['Código Instalação']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Código Localização:{singleProject['Código Localização']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Descrição Localização:{singleProject['Descrição Localização']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Ativo Pai:{singleProject['Ativo Pai']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Ativo Real:{singleProject['Ativo Real']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Descrição Instalação:{singleProject['Descrição Instalação']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Descrição Localização:{singleProject['Descrição Localização']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Tipo Instalação:{singleProject['Tipo Instalação']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Esfeera de Sinalização danificada:{singleProject['ESFERADE SINALIZAÇÃO DANIFICADA']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Inspeção terrestre na torre:{singleProject['INSPEÇÃO TERRESTRE NA TORRE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Data Inspeção por Drone na Torre:{singleProject['DATA INSPEÇÃO POR DRONE NA TORRE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Data Termografia:{singleProject['DATA TERMOGRAFIA']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Anomalia via Termografia na Torre:{singleProject['ANOMALIA VIA TERMOGRAFIA NA TORRE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Data da Última Corretiva na Torre:{singleProject['DATA DA ULTIMA CORRETIVA NA TORRE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Registro de Desligamento Fase Terra:{singleProject['REGISTRO DE DESLIGAMENTO FASE TERRA']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Registro de Desligamento Fase-Fase:{singleProject['REGISTRO DE DESLIGAMENTO FASE-FASE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Registro Fotográfico da Torre:{singleProject['REGISTRO FOTOGRÁFICO DA TORRE']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Nome do Proprietário Local:{singleProject['NOME DO PROPRIETÁRIO LOCAL']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Estrutura:{singleProject['ESTRUTURA']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Presença de abelhas/incetos:{singleProject['Presença de abelhas/incetos']}</Text>
                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Arvores para Poda Seletiva:{singleProject['ARVORES PARA PODA SELETIVA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Registro de Queimada:{singleProject['REGISTRO DE QUEIMADA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>Invasão da Faixa de Servidão/Torre:{singleProject['INVASÃO DA FAIXA DE SERVIDÃO/ÁREA DA TORRE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ACESSO DANIFICADO:{singleProject['ACESSO DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ACESSO ALAGADO:{singleProject['ACESSO ALAGADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>VANDALISMO NA TORRE:{singleProject['VANDALISMO NA TORRE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>DEFENSAS NA TORRE:{singleProject['DEFENSAS NA TORRE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>DEFENSAS NOS ESTAIS:{singleProject['DEFENSAS NOS ESTAIS']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>DEFENSAS DANIFICADAS:{singleProject['DEFENSAS DANIFICADAS']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>TORRE SUBMERSA:{singleProject['TORRE SUBMERSA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>FUNDAÇÃO DANIFICADA:{singleProject['FUNDAÇÃO DANIFICADA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>FUNDAÇÃO COM EROSÃO:{singleProject['FUNDAÇÃO COM EROSÃO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>FORMIGUEIRO:{singleProject['FORMIGUEIRO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>CURSO D'AGUA NA BASE:{singleProject["CURSO D'AGUA NA BASE"]}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>EDIFICAÇÃO CONSTRUIDA:{singleProject['EDIFICAÇÃO CONSTRUIDA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>TRELIÇAS DANIFICADAS/ parafusos ou componentes folgados:{singleProject['TRELIÇAS DANIFICADAS/ parafusos ou componentes folgados']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>PLACA DE SINALIZAÇÃO DANIFICADA:{singleProject['PLACA DE SINALIZAÇÃO DANIFICADA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>PLACAS DE SINALIZAÇÃO AUSENTE:{singleProject['PLACAS DE SINALIZAÇÃO AUSENTE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ATERRAMENTO EXPOSTO:{singleProject['ATERRAMENTO EXPOSTO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ATERRAMENTO DANIFICADO:{singleProject['ATERRAMENTO DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ATERRAMENTO AUSENTE:{singleProject['ATERRAMENTO AUSENTE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ESTAI ROMPIDO:{singleProject['ESTAI ROMPIDO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ESTAI MAL TENSIONADO/ANOMALIAS NAS CONEXÕES:{singleProject['ESTAI MAL TENSIONADO/ANOMALIAS NAS CONEXÕES']}</Text>

                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>REGISTRO DE ISOLADOR QUEBRADO:{singleProject['REGISTRO DE ISOLADOR QUEBRADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>REGISTRO DE DESCARGA ATMOSFERICA:{singleProject['REGISTRO DE DESCARGA ATMOSFERICA']}</Text>

                  </View>

                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>REGISTRO DE VANDALISMO NA TORRE:{singleProject['REGISTRO DE VANDALISMO NA TORRE']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>REGISTRO DE POLUIÇÃO EXTREMA NO ISOLADOR:{singleProject['REGISTRO DE POLUIÇÃO EXTREMA NO ISOLADOR']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>TENTOS ROMPIDOS:{singleProject['TENTOS ROMPIDOS']}</Text>
                  </View>



                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>GRAMPO DE ANCORAGEM DANIFICADO:{singleProject['GRAMPO DE ANCORAGEM DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>JUMP DE ATERRAMENTO ABERTO:{singleProject['JUMP DE ATERRAMENTO ABERTO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>GRAMPO DE ATERRAMENTO DANIFICADO:{singleProject['GRAMPO DE ATERRAMENTO DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>CAIXA DE EMENDA OPGW DANIFICADA:{singleProject['CAIXA DE EMENDA OPGW DANIFICADA']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>CABO CONDUTOR DANIFICADO:{singleProject['CABO CONDUTOR DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>CABO PARA-RAIOS/OPGW DANIFICADO:{singleProject['CABO PARA-RAIOS/OPGW DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>AMORTECEDOR DESLOCADO:{singleProject['AMORTECEDOR DESLOCADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>AMORTECEDOR REMOVIDO:{singleProject['AMORTECEDOR REMOVIDO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>ESPAÇADOR DANIFICADO:{singleProject['ESPAÇADOR DANIFICADO']}</Text>
                  </View>


                  <View style={styles.listBorder}>
                    <Text style={styles.lineList}>AMORTECEDOR PR/OPGW DANIFICADO:{singleProject['AMORTECEDOR PR/OPGW DANIFICADO']}</Text>
                  </View>
                </CollapseBody>
              </CollapseReact>
            </View>
          </>
        })

        }
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#ECECEC',
  },
  data: {
    width: '90%',

    backgroundColor: '#fff',
    marginLeft: 22,
    marginTop: 20,
    padding: 15,
  },
  title: {
    fontSize: RFValue(20),
    color: '#002A5E',
    marginBottom: RFValue(16),
    fontWeight: 'bold',
    marginTop: '1.5%',
    marginLeft: 4
  },
  titlePage: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '3%',
    paddingLeft: '7%',
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
  },
  iconTitle: {
    height: 20,
    width: 20,
    marginTop: '2%',
    marginRight: '2%'
  },
  iconBack: {
    height: 40,
    width: 40,
  },
  numeroLinha: {
    fontSize: RFValue(15),
    color: '#002A5E',
    fontWeight: 'bold',
    marginBottom: 4
  },
  lineList: {
    marginTop: 10,
    fontSize: RFValue(13),
  },
  listBorder: {
    borderBottomColor: '#002A5E',
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: RFValue(13),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerCollapse: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  penEdit: {
    backgroundColor: '#d8d8d8',
    borderRadius: 50,
    marginTop: 6,
    height: 25,
    width: 25,
  }
})