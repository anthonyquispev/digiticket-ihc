import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import profileIcon from '../assets/icons-profile/profile.png'
import cancelIcon from '../assets/icons-profile/cancel.png'
import closeIcon from '../assets/icons-profile/close.png'
import commentsIcon from '../assets/icons-profile/comments.png'
import dataIcon from '../assets/icons-profile/data.png'
import historyIcon from '../assets/icons-profile/history.png'
import scheduleIcon from '../assets/icons-profile/schedule.png'

export const Profile = () => {

    return (
        <>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerText}>Hola</Text>
                    <Text style={{...styles.headerText, fontWeight: "bold"}}>JORGE</Text>
                </View>
                <Image source={profileIcon} style={styles.profIcon}/>
            </View>
            <View style={styles.listContainer}>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={dataIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Actualizar datos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={historyIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Historial de tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={commentsIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Enviar comentarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={scheduleIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Ver horario semanal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={cancelIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Cancelar mi reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={closeIcon} style={styles.icons}/>
                    <Text style={styles.listText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#136CF1",
        width: "100%",
        height: "25%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerText: {
        color: "#FFF",
        fontSize: 19
    },
    listContainer: {
        width: "80%",
        marginVertical: 30,
        alignSelf: "center"
    },
    listItem:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    listText: {
        fontSize: 18,
        marginLeft: 20
    },
    icons: {
        width: 30,
        height: 30,
        resizeMode : 'contain'
    },
    profIcon: {
        width: 80,
        height: 80,
        resizeMode : 'contain'
    }
})

export default Profile