import { colors } from '@/constants/theme';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TabBar = ({ activeTab, onTabPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.tab, activeTab === 'saved' && styles.activeTab]} onPress={() => onTabPress('saved')}>
            <Icon name="heart-outline" size={24} color={activeTab === 'saved' ? colors.uranianBlue : colors.midnightNavy} />
            <Text style={{ color: activeTab === 'saved' ? colors.uranianBlue : colors.midnightNavy }}>Saved</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tab, activeTab === 'home' && styles.activeTab]} onPress={() => onTabPress('home')}>
            <Icon name="home-outline" size={24} color={activeTab === 'home' ? colors.uranianBlue : colors.midnightNavy} />
            <Text style={{ color: activeTab === 'home' ? colors.uranianBlue : colors.midnightNavy }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.tab, activeTab === 'closet' && styles.activeTab]} onPress={() => onTabPress('closet')}>
            <Icon name="hanger" size={24} color={activeTab === 'closet' ? colors.uranianBlue : colors.midnightNavy} />
            <Text style={{ color: activeTab === 'closet' ? colors.uranianBlue : colors.midnightNavy }}>Closet</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.uranianBlue,
        borderRadius: 16,
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 16,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
    },
    activeTab: {
        backgroundColor: '#0a122a',
    },
});

export default TabBar;