import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Home(props) {
        
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.titulo}>Mundo do progamador</Text>
                <Text style={styles.subTitulo}>Dicas para o mercado de trabalho</Text>
            </View>
        <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate('Dica1')}}>
            <View>
                <Text style={styles.text}>Dica 1- Repertório de Conhecimento sobre o assunto </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate('Dica2')}}>
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
        fontWeight: 'bold',
        color:'#544AEF',
        bottom:260,
        textAlign: 'center',
        marginBottom: -50,
      },
      subTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
        bottom:200,
        textAlign: 'center'
      },
      btn:{
        backgroundColor:'rgb(19, 18, 18)',
        marginVertical: '10',
        borderWidth: 3,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderColor: '#544AEF'
      }
        
  });