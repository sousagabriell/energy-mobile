import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { HeaderScreens } from '../../components/HeaderComponents';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRecoilState } from 'recoil';
import { ProjectAtom } from '../../recoil/atom/projectsAtom';
import {
  Collapse as CollapseReact,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from '../../components/TextInput';
import { Modal } from 'react-native';


export function ColumnDetail({ }) {
  const [project, setProjectState] = useRecoilState(ProjectAtom);
  const navigate = useNavigation();
  const [collapsed, setCollapsed] = useState({});
  const refs = useRef([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [projectUUID, setProjectUUID] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()


  useEffect(() => {
    setProjectUUID(project[0].uuid)
  }, [project, setProjectState,]);

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  useEffect(() => {
    initializeCollapsedState();
  }, [project]);

  const initializeCollapsedState = () => {
    const newCollapsedState = {};
    project[0].rows.forEach((_, index) => {
      newCollapsedState[index] = true;
    });
    setCollapsed(newCollapsedState);
  };

  const toggleCollapse = (index) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  function adicionarValores(objeto) {
    const chaves = Object.keys(objeto);
    const retornoNovoObjeto = {};

    for (let i = 0; i < chaves.length; i++) {
      retornoNovoObjeto[i] = {
        key: chaves[i],
        value: objeto[chaves[i]],
      };
    }
    return retornoNovoObjeto;
  }

  const handleEditButton = () => {
    setModalVisible(true);
  };

  let newProject = [];
  project[0].rows.map(obj => {
    newProject.push(adicionarValores(obj));
  });

  function handleSearch(text) {
    setSearchText(text);

    const results = formatNewProject.filter(item => {
      const itemValues = Object.values(item).map(obj => {
        if (typeof obj.value === 'string') {
          return obj.value.toLowerCase();
        }
        return '';
      });

      return itemValues.some(value => value.includes(text.toLowerCase()));
    });

    setSearchResults(results);
  }

  const formatNewProject = newProject.flat();


  const renderItem = ({ item, index }) => {
    const isCollapsed = collapsed[index];

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => toggleCollapse(index)}>
          <View style={styles.rowContainer}>
            <Text style={styles.keyText}>
              {item[1].key}: {item[1].value}
            </Text>
          </View>
        </TouchableOpacity>
        {!isCollapsed &&
          Object.entries(item)
            .filter(([key]) => key !== 'value')
            .map(([key, value], nestedIndex) => {
              if (Array.isArray(value)) {
                return null;
              }
              value =
                typeof value === 'object'
                  ? JSON.stringify(value)
                    .replace(/"/g, '')
                    .replace(/[{}]/g, '')
                  : value;
              const columnName = value.split(',')[0].replace('key:', '');
              const dataRow = value
                .split(',')
                .slice(1)
                .join(',')
                .trim()
                .replace('value:', '');

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => toggleCollapse(index)}
                >
                  <View
                    style={styles.rowCollapse}
                    ref={(element) => (refs.current[key] = element)}
                  >
                    {nestedIndex !== 0 && (
                      <Text style={styles.valueText}>
                        {`${value}`.replace(/(key:|value:|id:.*)/g, '').replace(",", ": ")}
                      </Text>
                    )}
                    {nestedIndex !== 0 && dataRow && (
                      <TouchableOpacity
                        style={styles.editButton}
                        onPress={() =>
                          navigation.navigate('Detalhe', {
                            column: columnName,
                            dataRow: dataRow,
                            projectUUID,
                            rowID: item[0].value,
                          })
                        }
                      >
            <Image source={require('../../assets/pen.png')} />
                      </TouchableOpacity>
                    )}
                  </View>
                </TouchableOpacity>

              );
            })}
      </View>
    );
  };

  if (formatNewProject.length === 0) {
    return (
      <View style={styles.container}>
        <HeaderScreens />
        <View>
          <Pressable onPress={navigate.goBack} style={styles.titlePage}>
            <Image source={require('../../assets/flecha.png')} style={styles.iconProject} />
            <Text style={styles.title}>Informações do Projeto</Text>
          </Pressable>
          <Text style={styles.errorText}>Não foram encontrados dados!</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <HeaderScreens />
      {project.map((obj) => {
        return (
          <View>
            <Pressable onPress={navigate.goBack} style={styles.titlePage}>
              <Image source={require('../../assets/flecha.png')} style={styles.iconProject} />
              <Text style={styles.title}>{obj.name}</Text>
            </Pressable>
          </View>
        )
      })}
      <TextInput
        style={styles.searchInput}
        placeholder="Digite sua busca..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults.length > 0 ? searchResults : formatNewProject}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar Item</Text>
          <TouchableOpacity
            style={styles.modalCloseButton}
          >
            <Text style={styles.modalCloseButtonText}>Editar dado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseButtonText}>Tirar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginLeft: '5%'
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
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: '5%',
    padding: '5%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  keyText: {
    fontWeight: 'bold',
    color: '#002A5E',
    fontSize: RFValue(18),
  },
  valueText: {
    flex: 1,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  rowCollapse: {
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
    paddingVertical: '4%',
    flexDirection: 'row'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    marginTop: RFValue(20),
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    height: 40,
    width:50 ,
    paddingTop: 10,
    paddingLeft: 10,
    marginLeft: 10,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  searchInput: {
    fontSize: 16,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002A5E',
    marginBottom: 16,
  },
  modalCloseButton: {
    backgroundColor: '#002A5E',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  modalCloseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})