import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Home() {
        
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.titulo}>Mundo do progamador</Text>
                <Text style={styles.subTitulo}>Dicas para o mercado de trabalho</Text>
            </View>
        <TouchableOpacity style={styles.btn}>
            <View>
                <Text style={styles.text}>Dica 1- Repertório de Conhecimento sobre o assunto </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <View>
                <Text style={styles.text}>Dica 2- Conhecimentos da Empresa</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#95C9F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      color:'#fff',
      margin: 5,
      marginVertical: 10
    },
    titulo: {
        fontSize: 35,
        color:'#fff',
        bottom:260,
        textAlign: 'center',
        marginBottom: -50,
      },
      subTitulo: {
        fontSize: 20,
        color:'#fff',
        bottom:200,
        textAlign: 'center'
      },
      btn:{
        backgroundColor:'#46A6F0',
        marginVertical: '10',
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderColor: '#4670F0'
      }
        
  });