import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
const Checkout = () => {
  return (
    <SafeAreaView
      className='flex-1'
      style={{ marginHorizontal: 16, marginTop: 16 }}
    >
      <View>
        <Text className='text-4xl font-bold'>Checkout</Text>
        <View className='border-b-2'>
          <Text className='text-xl'>Delivery Data</Text>
        </View>
        <View className='border-b-2'>
          <Text className='text-xl'>Delivery Address</Text>
          <Text className='text-2xl font-bold'>Home</Text>
          <Text className='text-base font-semibold'>
            43 Bourke Street, Newbridge NSW 837 Raffles …
          </Text>
        </View>
        <View>
          <Text className='text-xl'>Payment</Text>
        </View>

        <View>
          <Text className='text-2xl'>Today</Text>
        </View>

        <TouchableOpacity className='flex-row bg-[#93C22F] p-4 rounded-lg justify-center mt-4'>
          <Text className='text-white text-xl'>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
