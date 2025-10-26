import BackButton from '@/components/BackButton'
import Header from '@/components/Header'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors } from '@/constants/theme'
import { GlassView } from 'expo-glass-effect'
import * as Icons from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const StylePreferences = () => {
  const accessories = [
    "Eye Wear",
    "Hats",
    "Scarves",
    "Jewelry",
    "Bags",
    "Belts",
    "Watches",
    "Gloves",
  ];

  return (
    <ScreenWrapper>
      <Header title='Style Preferences' leftIcon={<BackButton />} />
      <View style={styles.container}>
        <TouchableOpacity>
          <GlassView glassEffectStyle='clear' style={styles.preferenceItem}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceTitle}>Accessories</Text>
              <View style={styles.tagsContainer}>
                {accessories.map((accessory, index) => (
                  <Text key={index} style={styles.tagText}>
                    {accessory}
                  </Text>
                ))}
              </View>
            </View>
            <Icons.CaretRightIcon size={18} weight='bold' color={colors.uranianBlue} />
          </GlassView>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}
export default StylePreferences
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    gap: 15
  }
  ,
  preferenceItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  preferenceContent: {
    flex: 1,
    paddingRight: 10,
  },
  preferenceTitle: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tagText: {
    color: colors.midnightNavy, fontWeight: '500', fontSize: 14, backgroundColor: colors.uranianBlue, borderRadius: 10,
    paddingVertical: 6, paddingHorizontal: 10, textAlign: 'center',
  },
})
