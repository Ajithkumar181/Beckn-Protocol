import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-2xl font-bold text-blue-400'>index</Text>
      <TouchableOpacity onPress={() => router.push('/Login')} className='my-4'>
        <Text className='text-lg font-semibold'>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/SignUp')} className='my-4'>
        <Text className='text-lg font-semibold'>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
