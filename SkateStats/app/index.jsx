import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    //SafeAreaView ensures that the content in this component doesn't overlap with other stuff like bottom tabs
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full justify-center 
            items-center min-h[85vh] px-4">
                <Image 
                    source={images.skateStatsLogo}
                    className="w-[400px] h-[200px]"
                    resizeMode="contain"
                />

                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center">Climb the ranks and be the best in{' '}
                    <Text className= "text-secondary-200">S.K.A.T.E STATS</Text>
                    </Text>
                </View>

                <CustomButton
                    title="Continue with Email"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-full mt-7"
                />
            </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
