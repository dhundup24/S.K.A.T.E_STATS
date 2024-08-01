import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source= {images.skateStatsLogo} resizeMode='contain' className="w-[200px] h-[205px]"/>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold"> Log into S.K.A.T.E STATS here!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn