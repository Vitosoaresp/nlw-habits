import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

import LogoImage from '../assets/logo.svg';

export function Header() {
  const { navigate } = useNavigation();

  return (
    <View className='w-full  flex-row items-center justify-between'>
      <LogoImage />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('new')}
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center "
      >
        <Feather
          name="plus"
          size={20}
          color={colors.violet[500]}
        />

        <Text
          className='text-white ml-3 font-semi-bold text-base'
        >Novo</Text>
      </TouchableOpacity>
    </View>
  )
}