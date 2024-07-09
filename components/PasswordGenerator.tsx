import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const PassWordSchema = Yup.object().shape({
  passWordlength: Yup.number()
  .min(4,'4 < password length < 16')
  .max(16,'4 < password length < 16')
  .required('length is required')
})

const PasswordGenerator = () => {

  const [password ,setPassword] = useState('')
  const [isPasswordGenerated ,setIsPasswordGenerated] = useState(false)

  const [lowerCase ,setLowerCase] = useState(false)
  const [upperCase ,setUpperCase] = useState(false)
  const [numbers ,setNumbers] = useState(false)
  const [sympbols ,setSympbols] = useState(false)


  const generatePasswordString = ( passLenth: number ) => { //give it to the user
    let charatersList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      charatersList += upperCaseChars 
    }
    if (lowerCase) {
      charatersList += lowerCaseChars 
    }
    if (numbers) {
      charatersList += digitChars 
    }
    if (sympbols) {
      charatersList += specialChars 
    }
    
    const passwordResult = createPassword(charatersList , passLenth )
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
    Keyboard.dismiss();
  }
  const createPassword = (characters: string, passLenth: number):string  => {
    let result = '';
    for (let i = 0; i < passLenth; i++) {
      const charaterIndex = Math.round(Math.random() * characters.length)
       result += characters.charAt(charaterIndex)
    }
    return result;
  }
  const resetPasswordState = () => {
    //
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(false)
    setUpperCase(false)
    setNumbers(false)
    setSympbols(false)
  }

  

  return (
  <SafeAreaView>
    <View style={styles.formContainer}>
      <Text style={styles.title}>Password Generator</Text>
    <Formik
      initialValues = {{ passWordlength:''}} // 1
      validationSchema = { PassWordSchema } // 2
      onSubmit = {
        (values) => generatePasswordString(+values.passWordlength)
      }
    >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
       }) => (
        <>
          <View style={styles.inputColumn}>
            <View style={styles.inputWrapper}>
              <Text>Password length</Text>
              {touched.passWordlength && errors.passWordlength && (
                <Text style={styles.errorText}>
                  {errors.passWordlength}
                </Text>
              )}
              <TextInput
                style={styles.inputStyle}
                value={values.passWordlength}
                onChangeText={handleChange('passWordlength')}
                placeholder="Ex. 10"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text>Include LowerCase</Text>
              <BouncyCheckbox
                disableBuiltInState //when reset button is clicked the state will be in default 
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                fillColor="#29AB87"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text>Include Uppercase</Text>
              <BouncyCheckbox
                disableBuiltInState //when reset button is clicked the state will be in default 
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
                fillColor="#FED85D"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text>Include Numbers</Text>
              <BouncyCheckbox
                disableBuiltInState //when reset button is clicked the state will be in default 
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
                fillColor="#C9A0DC"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text>Include Symbols</Text>
              <BouncyCheckbox
                disableBuiltInState //when reset button is clicked the state will be in default 
                isChecked={sympbols}
                onPress={() => setSympbols(!sympbols)}
                fillColor="#FC80A5"
              />
            </View>
          </View>
          <View style={styles.formActions}>
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => handleSubmit()}
              style={styles.primaryBtn}
            >
              <Text style={styles.primaryBtnTxt}>Generate password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!isValid}
              onPress={()=>{
                resetPasswordState();
                handleReset();
              }}
              style={styles.secondaryBtn}
            >
              <Text style={styles.secondaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
        </>
       )}
    </Formik>
    </View>
    {isPasswordGenerated 
    ? ( <View style={[styles.card, styles.cardElevated]}>
         <Text style={styles.subTitle}>Result:</Text>
         <Text style={styles.description}>Long Press to copy</Text>
         <Text selectable style={styles.generatedPassword}>{password}</Text>
        </View>) 
    : null}
  </SafeAreaView>
  )
}

export default PasswordGenerator

const styles = StyleSheet.create({
  
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    textAlign:"center",
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    color: '#758283',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    marginTop:8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width:"100%"
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '25%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10,
    marginTop:25
  },
  primaryBtn: {
    width: 170,
    color:"white",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    textAlign:"center",
    color: '#fff',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})