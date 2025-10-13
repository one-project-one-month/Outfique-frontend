import BackButton from '@/components/BackButton';
import GlassButton from '@/components/GlassButton';
import GlassInput from '@/components/GlassInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Tabs from '../(tabs)';
import Category from './factor/Category';

const Home = () => {
    const [active, setActive] = React.useState(false);
    const router = useRouter();
    return (
        <Tabs>
            {/* Back Button */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <BackButton />
                <Text style={{ fontSize: 20, color: 'white' }}>Digital Closet</Text>
            </View>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    {/* Search and Filter Row */}
                    <GlassInput
                        placeholder="Search"
                        autoCapitalize="none"
                        size="small"
                        glassProps={{ glassEffectStyle: 'clear' }}
                        leftIcon={<Feather name="search" size={20} color="#a0ddff" />}
                        inputStyle={{ flex: 1 }}
                    />

                    {/* Filter button */}
                    <GlassButton
                        size="small"
                        glassProps={{
                            glassEffectStyle: 'clear'
                        }}
                        buttonStyle={{ borderRadius: 10, marginLeft: 10 }}
                    >
                        <Image style={{ width: 27, height: 27, tintColor: '#a0ddff' }} source={require('../../assets/filter.png')} />
                    </GlassButton>

                </View>

                {/* Category Filters  */}
                <View>
                    <Category />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#A8A9AD', fontSize: 15, textAlign: 'center' }}>
                        Add your outfit picture here and,{"\n"}see them appear in your collection!
                    </Text>
                </View>

                {/* Add Button with Tooltip */}
                <View style={{ alignItems: 'center' }}>
                    <Tooltip
                        isVisible={active}
                        contentStyle={styles.tooltipContent}
                        placement='top'
                        backgroundColor='transparent'
                        arrowSize={{ width: 20, height: 15 }}
                        childContentSpacing={45}
                        showChildInTooltip={false}
                        content={<Text style={styles.tooltipText}>Create your outfit</Text>}
                        onClose={() => setActive(false)}
                    >
                        <Pressable
                            onPress={() => {
                                setActive(true);
                                setTimeout(() => {
                                    setActive(false);
                                    router.push('/(closet)/Camera');
                                }, 500);
                            }}
                            onLongPress={() => setActive(true)}
                            delayLongPress={150}
                            style={[styles.addButton, { backgroundColor: active ? '#a0ddff' : '#0A122A' }]}
                        >
                            <AntDesign name="plus" size={30} color={active ? '#0A122A' : '#a0ddff'} />
                        </Pressable>
                    </Tooltip>
                </View>
            </View>
        </Tabs >

    );
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        gap: 10
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        width: 80,
        height: 80,
        shadowColor: 'white',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 6,

    },
    tooltipContent: {
        flex: 1,
        backgroundColor: 'rgba(10, 18, 42, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 8,

    },
    tooltipText: {
        color: '#a0ddff',
        fontSize: 16,
        fontWeight: '600',
    },
})