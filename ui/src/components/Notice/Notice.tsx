import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const Notice: React.FC = () => {
  return (
    <View style={styles.noticeContainer}>
      <Text style={styles.noticeHeader}>Invest Saftely</Text>
      <Text style={styles.noticeText}>
        We understand that right now might be a difficult time to invest
        especially with the market being so volatile. Learn how to maximize each
        and every dollar you choose to invest.
      </Text>
      <TouchableOpacity
        style={styles.learnMoreContainer}
        onPress={() => console.log('learn more hit')}
      >
        <Text style={styles.learnMore}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notice;
