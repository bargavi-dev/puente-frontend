import React from 'react';
import {
  StyleSheet,
  Text, 
  Image,
  View
} from 'react-native';






export default function HomeScreen() {

  

  return (

    <View style={styles.container}>
      <Image style={styles.logo} source={require('/Users/bargavikanneganti/Documents/Dev Stuff/projects_in_progress/puente/puente-frontend/images/puente-logo2.png')}/>
      <Text style={styles.header}>Login</Text>
    </View>
        
  );
};
  
      
     

        
                
                



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start' 
  },
  header: {
    fontSize: 50,
    color: '#ffa857',
  },
  logo: {
    height: 400,
    width: 400,
  },
  button: {
    marginBottom: 24,
    borderRadius: 50,
  },
});


 {/* <Text>A bridge between cultures</Text> */}