import BackButton from '@/components/BackButton'
import Header from '@/components/Header'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors } from '@/constants/theme'
import { isIos26OrHigher } from '@/lib/utils'
import { GlassView } from 'expo-glass-effect'
import * as Icons from 'phosphor-react-native'
import { CaretRightIcon } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type detailsOptionType = {
  title: string;
  icon: React.ReactNode;
  data: string;
};

const Details = () => {

  const detailsOptions: detailsOptionType[] = [
    {
      title: "Name",
      icon: (<Icons.UserCheckIcon size={26} color={colors.uranianBlue} weight='bold' />),
      data: "John Doe"
    },
    {
      title: "Birthday",
      icon: (<Icons.ConfettiIcon size={26} color={colors.uranianBlue} weight='regular' />),
      data: "January 1, 1990"
    },
    {
      title: "Gender",
      icon: (<Icons.GenderNeuterIcon size={26} color={colors.uranianBlue} weight='regular' />),
      data: "Male"
    },
    {
      title: "Height",
      icon: (<Icons.RulerIcon size={26} color={colors.uranianBlue} weight='regular' />),
      data: "180 cm"
    },
    {
      title: "Weight",
      icon: (<Icons.BarbellIcon size={26} color={colors.uranianBlue} weight='regular' />),
      data: "75 kg"
    },
    {
      title: "Body Type",
      icon: (<Icons.PersonIcon size={26} color={colors.uranianBlue} weight='regular' />),
      data: "Athletic"
    },
  ];
  return (
    <ScreenWrapper>
      <Header title='Details Info' leftIcon={<BackButton />} />
      <View style={styles.optionsContainer}>
        {detailsOptions.map((item) => (
          isIos26OrHigher ? (
            <GlassView key={item.title} glassEffectStyle='clear' style={styles.optionItem}>
              <TouchableOpacity style={styles.flexRow}>
                {item.icon}
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: '500', color: colors.stardustWhite }}>{item.data}</Text>
                <CaretRightIcon size={18} weight='bold' color={colors.uranianBlue} />
              </TouchableOpacity>
            </GlassView>
          ) : (
            <View key={item.title} style={[styles.optionItem, styles.accountOptionsFallback]}>
              <TouchableOpacity style={styles.flexRow}>
                {item.icon}
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: '500', color: colors.stardustWhite }}>{item.data}</Text>
                <CaretRightIcon size={18} weight='bold' color={colors.uranianBlue} />
              </TouchableOpacity>
            </View>
          )
        ))}
      </View>
    </ScreenWrapper>
  )
}

export default Details

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 40,
    marginHorizontal: 15,
    gap: 15,
  },
  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 16, fontWeight: '600', flex: 1, color: colors.stardustWhite
  },
  accountOptionsFallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)'
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
})
