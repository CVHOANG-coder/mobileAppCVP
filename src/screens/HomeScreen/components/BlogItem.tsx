import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import { lightTheme } from '@src/utils/globalStyles';

const { width } = Dimensions.get('window');

type BlogItemProps = {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    learners: string;
  };
};

const BlogItem = ({ news }: BlogItemProps) => {
  return (
    <TouchableOpacity style={styles.blogCard}>
      <Image source={{ uri: news.image }} style={styles.blogImage} />
      <View style={styles.blogContent}>
        <Text style={styles.blogTitle} numberOfLines={2}>
          {news.title}
        </Text>
        <Text style={styles.blogDescription} numberOfLines={3}>
          {news.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  blogCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: width * 0.7, // 2 items per row with margins
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blogImage: {
    width: width * 0.35,
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  blogContent: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flex: 1,
  },
  authorName: {
    fontSize: 13,
    color: '#8B8B8B',
    fontWeight: '500',
    marginBottom: 8,
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: lightTheme.Colors.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  blogDescription: {
    fontSize: 13,
    color: '#8B8B8B',
    lineHeight: 18,
  },
});
