import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Dica2(){
    return(
        <SafeAreaView style={styles.dica}>
            <Text style={styles.title}>Dica 02</Text>
                <Text style={styles.subTitle}>Repertório de Conhecimento sobre o assunto</Text>
                <Text style={styles.text}>É essencial que um programador compreenda a missão, visão e valores da empresa, além de conhecer seus produtos, serviços e público-alvo. Isso facilita a criação de soluções alinhadas aos objetivos do negócio, melhora a comunicação com as equipes de outras áreas e contribui para o desenvolvimento de software que realmente atenda às necessidades da empresa e dos clientes.</Text> 
                <Image  style={styles.image} source={require('../assets/images.jpg')}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    dica:{
        flex: 1,
        marginTop:80,
    },
    title: {
      textAlign: "center",
      fontSize: 24,
      fontWeight:"bold",
      color: '#544AEF',
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        marginVertical:"10",
        fontWeight:"bold",
        color: '#fff',
        
      },
    text: {
      color: "#0000000",
      textAlign:"justify",
      marginHorizontal: '5%',
      fontWeight: 'bold',
      marginTop: 20,
      color: '#fff',
    },
    
    image: {
      width: '300',
      height: '200',
      alignSelf:"center",
      marginVertical: "15",
      borderWidth: 3,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderColor: '#544AEF'
    },
    
  });