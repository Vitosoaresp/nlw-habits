import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import colors from "tailwindcss/colors";

interface CheckBoxProps extends TouchableOpacityProps{
  checked?: boolean;
  title: string
}

export function CheckBox({ checked = false, title, ...rest }: CheckBoxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center mb-2"
      {...rest}
    >
      { checked ? (
      <Animated.View
        className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
        entering={ ZoomIn }
        exiting={ ZoomOut }
      >
        <Feather
          name="check"
          size={20}
          color={colors.white}
        />
      </Animated.View>) : (
        <View className="w-8 h-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white ml-3 text-base font-semibold">
        { title }
      </Text>
    </TouchableOpacity>
  )
}