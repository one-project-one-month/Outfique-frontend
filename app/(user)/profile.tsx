import BackButton from '@/components/BackButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors } from '@/constants/theme';
import { isIos26OrHigher } from '@/lib/utils';
import { GlassView } from 'expo-glass-effect';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { CaretRightIcon, DressIcon, GearSixIcon, HoodieIcon, PowerIcon, SwatchesIcon, UserIcon } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type accountOptionType = {
  title: string;
  icon: React.ReactNode;
  routeName?: any;
};

const Profile = () => {
  const router = useRouter();

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // image: 'https://i.pravatar.cc/300',
  };

  const handlePress = (option: accountOptionType) => {
    if (option.routeName) {
      router.push(option.routeName);
    } else if (option.title === 'Logout') {
      router.replace('/(auth)/login');
    } else if (option.title === 'Settings') {
      router.push('/(user)/setting');
    }
  };

  const accountOptions: accountOptionType[] = [
    {
      title: "Details Info",
      icon: (<UserIcon size={26} color={colors.uranianBlue} weight='light' />),
      routeName: "/(user)/details",
    },
    {
      title: "Style Preferences",
      icon: (<SwatchesIcon size={26} color={colors.uranianBlue} weight='light' />),
      routeName: "/(user)/preferences",
    },
    {
      title: "Style Insights",
      icon: (<HoodieIcon size={26} color={colors.uranianBlue} weight='light' />),
      routeName: "/(user)/details",
    },
    {
      title: "Archive Generated Outfits",
      icon: (<DressIcon size={26} color={colors.uranianBlue} weight='light' />),
      routeName: "/(user)/details",
    },
    {
      title: "Settings",
      icon: (<GearSixIcon size={26} color={colors.uranianBlue} weight='light' />),
      routeName: "/(user)/setting",
    },
    {
      title: "Logout",
      icon: (<PowerIcon size={26} color={colors.uranianBlue} weight='light' />),
    },
  ]

  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: 15 }}>
        {/* Back Button */}
        <BackButton title='Profile' />

        <View style={styles.userInfo}>
          {isIos26OrHigher ? (
            <GlassView glassEffectStyle='clear' style={[styles.avatar, { padding: 8 }]}>
              <Image source={''} style={styles.avatar} contentFit='cover' transition={100} />
            </GlassView>
          ) : (
            <View style={[styles.avatar, styles.avatarFallback, { padding: 8 }]}>
              <Image source={''} style={styles.avatar} contentFit='cover' transition={100} />
            </View>
          )}
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 24, fontWeight: '600', color: colors.stardustWhite }}>{user?.name}</Text>
            {/* <Text style={{ fontSize: 15, color: colors.moonlightGray }}>{user?.email}</Text> */}
          </View>
        </View>
        <View style={styles.accountOptions}>
          {accountOptions.map((option, index) => {
            return (
              <View key={index} style={styles.listItem}>
                <TouchableOpacity style={styles.flexRow} onPress={() => handlePress(option)}>
                  {/* icons  */}
                  {isIos26OrHigher ? (
                    <GlassView glassEffectStyle='clear' style={styles.listIcon}>
                      {option.icon}
                    </GlassView>
                  ) : (
                    <View style={[styles.listIcon, styles.listIconFallback]}>
                      {option.icon}
                    </View>
                  )}
                  <Text style={{ fontSize: 16, fontWeight: '500', flex: 1, color: colors.white }}>{option.title}</Text>
                  <CaretRightIcon size={18} weight='bold' color={colors.uranianBlue} />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  userInfo: {
    marginTop: 30,
    alignItems: "center",
    gap: 15
  },
  avatar: {
    alignItems: "center",
    height: 135,
    width: 135,
    borderRadius: 200
  },
  avatarFallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)'
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 8,
    borderRadius: 50,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: 5
  },
  nameContainer: {
    gap: 4,
    alignItems: "center"
  },
  listIcon: {
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderCurve: "continuous"
  },
  listIconFallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)'
  },
  listItem: {
    marginBottom: 17,
  },
  accountOptions: {
    marginTop: 35
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
})
