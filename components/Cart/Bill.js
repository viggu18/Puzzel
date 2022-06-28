import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../export'
import { Divider } from '@react-native-material/core'

export default function Bill(props){
  return (
    <View style={styles.BillContainer}>
        <View style={[styles.BillHeader,{marginLeft: '2%'}]}>
            <Text style={styles.titleText}>Total Bill</Text>
        </View>
        <Divider />
        <View style={styles.BillBody}>
            <View style={styles.BillBodyItem}>
                <Text style={styles.titleText}>Subtotal: </Text>
                <Text style={styles.BillBodyItemText}>₹7000</Text>
            </View>
        </View>
        <View style={styles.BillBody}>
            <View style={styles.BillBodyItem}>
                <Text style={styles.titleText}>Apply Coupon Code: </Text>
                <Text style={styles.BillBodyItemText}>₹0</Text>
            </View>
        </View>
        <View style={styles.BillBody}>
            <View style={styles.BillBodyItem}>
                <Text style={styles.titleText}>Discount: </Text>
                <Text style={styles.BillBodyItemText}>₹0</Text>
            </View>
        </View>
        <View style={styles.BillBody}>
            <View style={styles.BillBodyItem}>
                <Text style={styles.titleText}>Delivert Charges: </Text>
                <Text style={styles.BillBodyItemText}>+₹100</Text>
            </View>
        </View>
        <Divider />
        <View style={styles.BillHeader}> 
            <Text style={[styles.titleText,{marginLeft: '4%'}]}>Total: </Text>
            <Text style={[styles.BillBodyItemText,{marginRight: '5%'}]}>₹7000</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    BillContainer: {
        backgroundColor: 'white',
        width:windowWidth,
        marginTop: 15,
        elevation: 10,
    },
    BillHeader: {
        width:windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 14,  
        fontWeight: 'bold',
    },
    BillBody: {
        width:windowWidth*0.85,
        marginLeft: '5%',
    },
    BillBodyItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%',
    },
})