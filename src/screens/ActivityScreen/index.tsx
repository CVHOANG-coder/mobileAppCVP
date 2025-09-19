import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lightTheme } from '@src/utils/globalStyles';

const { width } = Dimensions.get('window');

type Activity = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  views: string;
  date: string;
  isRegistered: boolean;
  maxParticipants: number;
  currentParticipants: number;
  teacher: string;
  location: string;
  time: string;
};

const ActivityScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      title: 'Cách cải thiện kỹ năng Excel cho học sinh',
      category: 'Công nghệ thông tin',
      description:
        'Học cách sử dụng Excel hiệu quả trong học tập và công việc tương lai',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: false,
      maxParticipants: 30,
      currentParticipants: 15,
      teacher: 'Thầy Nguyễn Văn Minh',
      location: 'Phòng máy tính A',
      time: '14:00 - 16:00',
    },
    {
      id: '2',
      title: 'Chiến dịch Email Marketing cho dự án học sinh',
      category: 'Marketing số',
      description:
        'Tìm hiểu về marketing online và tạo chiến dịch email hiệu quả',
      image:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: true,
      maxParticipants: 25,
      currentParticipants: 20,
      teacher: 'Cô Trần Thị Hoa',
      location: 'Phòng 301',
      time: '15:30 - 17:30',
    },
    {
      id: '3',
      title: 'Phân tích dữ liệu không hiệu quả như thế nào',
      category: 'Phân tích kinh doanh',
      description: 'Học cách phân tích và xử lý dữ liệu một cách khoa học',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: false,
      maxParticipants: 20,
      currentParticipants: 8,
      teacher: 'Thầy Lê Văn Nam',
      location: 'Phòng 205',
      time: '13:00 - 15:00',
    },
    {
      id: '4',
      title: 'Top 10 công cụ Java cho năm 2024',
      category: 'Phát triển phần mềm',
      description: 'Khám phá các công cụ lập trình Java phổ biến nhất hiện nay',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: false,
      maxParticipants: 35,
      currentParticipants: 12,
      teacher: 'Thầy Hoàng Minh Đức',
      location: 'Phòng máy tính B',
      time: '09:00 - 11:00',
    },
    {
      id: '5',
      title: 'Khóa học kinh doanh hàng đầu',
      category: 'Định hướng nghề nghiệp',
      description: 'Tìm hiểu về khởi nghiệp và kỹ năng kinh doanh cơ bản',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: false,
      maxParticipants: 40,
      currentParticipants: 25,
      teacher: 'Cô Phạm Thị Mai',
      location: 'Hội trường A',
      time: '14:00 - 16:30',
    },
    {
      id: '6',
      title: 'Theo dõi hiệu quả học tập',
      category: 'Khoa học dữ liệu',
      description: 'Sử dụng công nghệ để theo dõi và cải thiện kết quả học tập',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      views: '20k',
      date: '28 Jan 2024',
      isRegistered: true,
      maxParticipants: 30,
      currentParticipants: 18,
      teacher: 'Thầy Vũ Thanh Sơn',
      location: 'Phòng 401',
      time: '10:00 - 12:00',
    },
    {
      id: '7',
      title: 'CLB Nhiếp ảnh và Thiết kế',
      category: 'Nghệ thuật sáng tạo',
      description: 'Học kỹ thuật chụp ảnh và thiết kế đồ họa cơ bản',
      image:
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=250&fit=crop',
      views: '15k',
      date: '30 Jan 2024',
      isRegistered: false,
      maxParticipants: 25,
      currentParticipants: 10,
      teacher: 'Cô Nguyễn Thu Hương',
      location: 'Phòng mỹ thuật',
      time: '15:00 - 17:00',
    },
    {
      id: '8',
      title: 'Hội thảo Định hướng Đại học',
      category: 'Tư vấn học đường',
      description: 'Hướng dẫn chọn ngành và trường đại học phù hợp',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      views: '25k',
      date: '02 Feb 2024',
      isRegistered: false,
      maxParticipants: 100,
      currentParticipants: 45,
      teacher: 'Ban Giám hiệu',
      location: 'Hội trường chính',
      time: '08:00 - 11:30',
    },
  ]);

  const handleRegister = (activityId: string) => {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === activityId
          ? {
              ...activity,
              isRegistered: !activity.isRegistered,
              currentParticipants: activity.isRegistered
                ? activity.currentParticipants - 1
                : activity.currentParticipants + 1,
            }
          : activity,
      ),
    );
  };

  const filteredActivities = activities.filter(
    activity =>
      activity.title.toLowerCase().includes(searchText.toLowerCase()) ||
      activity.category.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderActivityCard = (activity: Activity) => (
    <View key={activity.id} style={styles.activityCard}>
      <Image source={{ uri: activity.image }} style={styles.activityImage} />

      <View style={styles.cardContent}>
        <Text style={styles.categoryLabel}>{activity.category}</Text>
        <Text style={styles.activityTitle} numberOfLines={2}>
          {activity.title}
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.viewsContainer}>
            <Text style={styles.viewIcon}>👁️</Text>
            <Text style={styles.viewsText}>{activity.views}</Text>
          </View>
          <Text style={styles.dateText}>{activity.date}</Text>
        </View>

        <View style={styles.participantsRow}>
          <Text style={styles.participantsText}>
            👥 {activity.currentParticipants}/{activity.maxParticipants}
          </Text>
          <Text style={styles.teacherText}>👨‍🏫 {activity.teacher}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.timeText}>⏰ {activity.time}</Text>
          <Text style={styles.locationText}>📍 {activity.location}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.registerButton,
            activity.isRegistered && styles.registeredButton,
            activity.currentParticipants >= activity.maxParticipants &&
              styles.fullButton,
          ]}
          onPress={() => handleRegister(activity.id)}
          disabled={
            activity.currentParticipants >= activity.maxParticipants &&
            !activity.isRegistered
          }
        >
          <Text
            style={[
              styles.registerButtonText,
              activity.isRegistered && styles.registeredButtonText,
              activity.currentParticipants >= activity.maxParticipants &&
                styles.fullButtonText,
            ]}
          >
            {activity.currentParticipants >= activity.maxParticipants &&
            !activity.isRegistered
              ? 'Đã đầy'
              : activity.isRegistered
              ? 'Đã đăng ký'
              : 'Đăng ký'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hoạt động ngoại khóa</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm hoạt động..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={lightTheme.Colors.placeholder}
          />
        </View>
      </View>

      {/* Activities Grid */}
      <ScrollView
        style={styles.activitiesContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.activitiesContent}
      >
        <View style={styles.activitiesGrid}>
          {filteredActivities.map(activity => renderActivityCard(activity))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.Colors.primaryBackground,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.Colors.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightTheme.Colors.secondaryBackground,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: lightTheme.Colors.text,
  },
  activitiesContainer: {
    flex: 1,
  },
  activitiesContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  activitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  activityCard: {
    width: (width - 50) / 2,
    backgroundColor: lightTheme.Colors.primaryBackground,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    padding: 12,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: lightTheme.Colors.primary,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: lightTheme.Colors.text,
    lineHeight: 18,
    marginBottom: 8,
    minHeight: 36,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    fontSize: 10,
    marginRight: 4,
  },
  viewsText: {
    fontSize: 11,
    color: lightTheme.Colors.text2,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 11,
    color: lightTheme.Colors.text2,
  },
  participantsRow: {
    marginBottom: 4,
  },
  participantsText: {
    fontSize: 10,
    color: lightTheme.Colors.text2,
    marginBottom: 2,
  },
  teacherText: {
    fontSize: 10,
    color: lightTheme.Colors.text2,
    marginBottom: 2,
  },
  detailsRow: {
    marginBottom: 10,
  },
  timeText: {
    fontSize: 10,
    color: lightTheme.Colors.text2,
    marginBottom: 2,
  },
  locationText: {
    fontSize: 10,
    color: lightTheme.Colors.text2,
  },
  registerButton: {
    backgroundColor: lightTheme.Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  registeredButton: {
    backgroundColor: lightTheme.Colors.success,
  },
  fullButton: {
    backgroundColor: lightTheme.Colors.inactive,
  },
  registerButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: lightTheme.Colors.primaryBackground,
  },
  registeredButtonText: {
    color: lightTheme.Colors.primaryBackground,
  },
  fullButtonText: {
    color: lightTheme.Colors.text2,
  },
});
