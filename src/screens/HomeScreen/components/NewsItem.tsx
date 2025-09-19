import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ClockIc from '@src/assets/imageSvg/homeScreen/clock.svg';
import { lightTheme } from '@src/utils/globalStyles';
const { width } = Dimensions.get('window');
type NewsItemProps = {
  news: {
    id: number;
    title: string;
    image: string;
    date: string;
    learners: string;
  };
};
const NewsItem = ({ news }: NewsItemProps) => {
  return (
    <TouchableOpacity key={news.id} style={styles.newsCard}>
      <Image source={{ uri: news.image }} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle} numberOfLines={2}>
          {news.title}
        </Text>
        <View style={styles.newsFooter}>
          <View style={styles.ratingContainer}>
            <ClockIc />
            <Text style={styles.rating}>{news.date}</Text>
          </View>
          <Text style={styles.learners}>{news.learners}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginLeft: 20,
    width: width * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.text,
    marginBottom: 12,
    lineHeight: 22,
    minHeight: 44,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF4FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: lightTheme.Colors.primary,
    marginLeft: 4,
  },
  star: {
    fontSize: 12,
  },
  learners: {
    fontSize: 12,
    color: lightTheme.Colors.text2,
    fontWeight: '600',
  },
});
