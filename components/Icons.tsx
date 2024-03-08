import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import {Icon} from 'react-native-vector-icons/FontAwesome6'

type IconsProps = PropsWithChildren <{name: string}>

const Icons = ({name}: IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#38CC77"/>
        case 'cross':
            return <Icon name="times" size={38} color="#38CC77"/>
        default:
            return <Icon name="pencil" size={38} color="#0D0D0D"/>
    }
}

export default Icons

const styles = StyleSheet.create({})