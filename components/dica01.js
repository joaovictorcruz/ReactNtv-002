import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Dica1(){
    return(
        <SafeAreaView style={styles.dica}>
            <Text style={styles.title}>Dica 01</Text>
                <Text style={styles.subTitle}>Repertório de Conhecimento sobre o assunto</Text>
                <Text style={styles.text}>Para melhorar seu repertório de conhecimento em programação, estude profundamente as linguagens e frameworks que usa, participe de comunidades, resolva problemas reais, documente o que aprendeu e se mantenha sempre atualizado. Isso vai ajudar a aprimorar suas habilidades e a criar soluções mais eficazes.</Text> 

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
      marginVertical: "15"
    }
  });