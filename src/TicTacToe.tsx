import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { matrix } from './currency/constants'
import { Popup } from 'react-native-popup-confirm-toast'



const TicTacToe = () => {

    const [current, setCurrentPlayer] = useState("X")
    const [newMatrix, setNewMatrix] = useState<cell[]>(matrix)

    const clickOnCell = (targetCell: cell) => {
        if (targetCell.isClicked) {
          return;
        }
        // Update the matrix based on the clicked cell
        setNewMatrix((prevMatrix) =>
          prevMatrix.map((cell) => 
            cell.id === targetCell.id
                ? {
                   ...cell,
                   isClicked: true,
                   value: current === 'X' ? 'X' : 'O',
                  }
                : cell
              ))
        // Toggle current player
        setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    };

    const checkForWin = (matrix: cell[]): boolean => {
        // Check rows
        for (let i = 0; i < 3; i++) {
          if (
            matrix[i * 3].value !== '' &&
            matrix[i * 3].value === matrix[i * 3 + 1].value &&
            matrix[i * 3 + 1].value === matrix[i * 3 + 2].value
          ) {
            return true; // Winning row
          }
        }
      
        // Check columns
        for (let i = 0; i < 3; i++) {
          if (
            matrix[i].value !== '' &&
            matrix[i].value === matrix[i + 3].value &&
            matrix[i + 3].value === matrix[i + 6].value
          ) {
            return true; // Winning column
          }
        }
      
        // Check diagonals
        if (
          matrix[0].value !== '' &&
          matrix[0].value === matrix[4].value &&
          matrix[4].value === matrix[8].value
        ) {
          return true; // Winning diagonal (top-left to bottom-right)
        }
      
        if (
          matrix[2].value !== '' &&
          matrix[2].value === matrix[4].value &&
          matrix[4].value === matrix[6].value
        ) {
          return true; // Winning diagonal (top-right to bottom-left)
        }
      
        return false; // No win
      };

    useEffect(()=> {
      if (checkForWin(newMatrix)) {
          console.log('Player wins!');
          Popup.show({
            type: 'success',
            title:'wow !',
            textBody: `Palyer ${current === "X" ? "O" : "X"} win`,
            buttonText: 'OK',
            callback: () => {Popup.hide();reloadGame()}
          })
      }
    },[newMatrix])

    const reloadGame = () => {
        setNewMatrix((prevMatrix)=>
        prevMatrix.map((cell)=>{
            return {
                ...cell,
                value:'',
                isClicked:false
            }
        }))
    }
    
      

  return (
    <View style={styles.conatiner}>
        <Text style={styles.matrixTitle}>TicTacToe</Text>
        <TouchableOpacity style={[styles.touchableOpacity,{backgroundColor:"#aaa"}]}>
            <Text style={styles.textBtn}>
                {`${current}'s`} Turn
            </Text>
        </TouchableOpacity >
        <View style={styles.matrix}>
            <FlatList
                numColumns={3}
                data={newMatrix}
                //keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <TouchableOpacity
                        onPress={()=>clickOnCell(item)}
                    >
                        <View style={styles.cell}>
                            <Text>
                                {item.value}
                                {/* item.value && (
                                    <Icons name='circle'/>
                                ) */}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
        <TouchableOpacity
            style={[styles.touchableOpacity,{backgroundColor:"#aaa"}]}
            onPress={reloadGame}
        >
            <Text style={styles.textBtn}>
                Reload Game
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default TicTacToe

const styles = StyleSheet.create({
    conatiner:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        gap:10
    },
    touchableOpacity:{
        paddingHorizontal:20,
        paddingVertical:10,
        width:"50%",
        borderRadius:10
    },
    textBtn:{
        textAlign:"center",
    },
    matrix:{
        marginVertical:10,
        height:300
    },
    matrixTitle:{
        textAlign:"center",
        marginBottom:10
    },
    cell:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#aaa",
        backgroundColor:"#fff",
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },
})