import {StyleSheet} from "react-native"
export default StyleSheet.create( {
    container: {
      marginTop: Platform.OS === "android" ? 50 : 0,
    //   backgroundColor: "magenta",
      height: "100%",
      marginHorizontal:10
    },
    
    header:{
        fontSize:19,
        fontWeight:'bold',
        textAlign:'center'
    },
    largeBoxStyle: {
      backgroundColor: "yellow",
      width: 500,
      height: 500,
    },
    miniBox: {
      backgroundColor: "green",
      width: 100,
      height: 100,
      position: "absolute",
      bottom: 50,
      left: 50,
      //   margin:50,
      marginHorizontal:20,
      marginVertical:60
    },
  });