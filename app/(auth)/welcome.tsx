import ScreenWrapper from '@/components/ScreenWrapper'
import { Text } from '@/components/ui/text'
import React from 'react'
import { Image, View } from 'react-native'

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View className='flex-1 items-center justify-center'>
        <Image
          source={require('@/assets/welcome.png')}
          resizeMode='none'
          className='w-3/4 h-24'
        />
        <Text className='text-white text-xl'>
          to the world of Outfique &lt;3
        </Text>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome
