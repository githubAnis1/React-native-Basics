import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'


export default function FancyCard() {

    const visitWebsite = ( link :string ) => {
        Linking.openURL(link)
    }

  return (
    <View style={styles.container}>
        <Text style={styles.headingText}>Trandy machines</Text>
        <View style={[styles.card]}>
            <Image
              style={styles.images}
              source={require('../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg')}
            />
          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>MacBook Pro</Text>
            <Text style={styles.cardLabel}>Evolution</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006.</Text>
            <View style={styles.cardFooter}>
                <Text>
                    12 min away
                </Text>
                <TouchableOpacity
                    onPress={ () => visitWebsite('https://facebook.com')}
                >
                    <Text style={styles.link}>
                        Read more...
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
    },
    headingText:{
        marginBottom:20,
        fontWeight:"bold",
        color:"crimson",
    },
    images:{
        height:180,
        width:"100%",
        marginBottom:10,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    card:{
        width:350,
        backgroundColor:"#ccc",
        borderRadius:6
    },
    cardbody:{
        flex:1,
        flexGrow:1,
        padding:10
    },
    cardTitle:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:4
    },
    cardLabel:{
        fontSize:14,
        marginBottom:10
    },
    cardDescription:{
        fontSize:12,
        marginBottom:12
    },
    cardFooter:{ 
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    link:{
        fontSize:12,
        color:"blue",
    },
    
})