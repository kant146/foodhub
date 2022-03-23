import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FText from './FText';
import Padding from './Padding';
import { Colors } from '../constants/colors';
import { setValue, setYAxisValue } from '../utils';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';

const CartSummary = observer(() => {
  const cartStore = useStore('cart');
  const isEmpty = cartStore.cartItems.length === 0;
  if (isEmpty) {
    return (
      <View>
        <FText fontSize={14} color={Colors.aslo_gray}>
          Your cart is now empty
        </FText>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.footerLine}>
        <FText fontSize={16} lineHeight={16}>
          Subtotal
        </FText>
        <FText fontSize={19} lineHeight={19}>
          ${cartStore.subTotal}
          <FText color={Colors.grey_suit} fontSize={14} lineHeight={19}>
            {' '}
            USD
          </FText>
        </FText>
      </View>
      <View style={styles.footerLine}>
        <FText fontSize={16} lineHeight={16}>
          Tax and Fees ({cartStore.tax * 100}% + {cartStore.fee}$)
        </FText>
        <FText fontSize={19} lineHeight={19}>
          ${cartStore.taxAndFee}
          <FText color={Colors.grey_suit} fontSize={14} lineHeight={19}>
            {' '}
            USD
          </FText>
        </FText>
      </View>
      <View style={styles.footerLine}>
        <FText fontSize={16} lineHeight={16}>
          Delivery
        </FText>
        <FText fontSize={19} lineHeight={19}>
          ${cartStore.delivery_fee}
          <FText color={Colors.grey_suit} fontSize={14} lineHeight={19}>
            {' '}
            USD
          </FText>
        </FText>
      </View>
      <View style={styles.footerLine}>
        <FText fontSize={16} lineHeight={16}>
          Total
        </FText>
        <FText fontSize={19} lineHeight={19}>
          ${cartStore.total}
          <FText color={Colors.grey_suit} fontSize={14} lineHeight={19}>
            {' '}
            USD
          </FText>
        </FText>
      </View>
      <View style={styles.deliveryInfo}>
        <FText>Deliver to </FText>
        <Padding paddingTop={5} />
        <FText color={Colors.primary}>123 abc street, New York, NY 10001</FText>
      </View>
    </View>
  );
});

export default CartSummary;

const styles = StyleSheet.create({
  footerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: setYAxisValue(17),
    borderBottomColor: Colors.border,
    borderBottomWidth: setValue(1)
  },
  deliveryInfo: {
    paddingVertical: setYAxisValue(17)
  }
});
