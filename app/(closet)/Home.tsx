import BackButton from '@/components/BackButton';
import GlassButton from '@/components/GlassButton';
import GlassInput from '@/components/GlassInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from '../(tabs)';
import Category from './factor/Category';

const Home = () => {
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
                        <AntDesign name="unordered-list" size={27} color="#a0ddff" />
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

                <View style={{ alignItems: 'center',marginBottom: 40, }}>
                    <View style={styles.addButton}>
                        <AntDesign name="plus" size={30} color="#a0ddff" />
                    </View>
                </View>

            </View>
        </Tabs>

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
        backgroundColor: "#0A122A",
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        width: 80,
        height: 80,
        shadowColor: 'white',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 9,
    }
})