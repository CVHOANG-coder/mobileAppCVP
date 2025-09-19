import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { lightTheme } from '@src/utils/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsItem from './components/NewsItem';
import BlogItem from './components/BlogItem';
import SchoolIc from '@src/assets/imageSvg/homeScreen/school.svg';
import TeacherIc from '@src/assets/imageSvg/homeScreen/teacher.svg';
import DocumentIc from '@src/assets/imageSvg/homeScreen/document.svg';
import SearchIc from '@src/assets/imageSvg/homeScreen/search.svg';

const HomeScreen = () => {
  const categoriesData = [
    {
      id: 1,
      title: 'Tuyển sinh 10',
      icon: <SchoolIc width={48} height={48} />,
    },
    {
      id: 2,
      title: 'Người chuyên',
      icon: <TeacherIc width={48} height={48} />,
    },
    {
      id: 3,
      title: 'Tài nguyên',
      icon: <DocumentIc width={48} height={48} />,
    },
  ];

  const educationTopNews = [
    {
      id: 1,
      title:
        'Gặp mặt, động viên học sinh các đội tuyển tham dự kì thi chọn học sinh giỏi quốc gia',
      description:
        'Ngày 9/10, lãnh đạo Sở GD&ĐT đã có buổi gặp mặt ban giám hiệu, thầy cô giáo bồi dưỡng và học sinh các đội tuyển tham dự kỳ thi chọn Học sinh giỏi quốc gia',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/CVP07406-800.png?resize=678%2C509&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 2,
      title: 'Hành trình đoạt Huy chương Bạc Hóa học quốc tế của Tạ Quang Chí',
      description:
        'Tố chất thông minh cùng sự nỗ lực, quyết tâm và phương pháp học tập khoa học là những yếu tố giúp Tạ Quang Chí, học sinh lớp 12 chuyên Hóa, Trường THPT Chuyên Vĩnh Phúc thành công trên hành trình học tập của mình. Đặc biệt, Tạ Quang Chí là học sinh đầu tiên của Vĩnh Phúc đoạt Huy chương Bạc (HCB) tại Cuộc thi Olympiad Hóa học Quốc tế Mendeleev, góp phần nối dài thành tích của ngành Giáo dục Vĩnh Phúc trong bảng vàng học sinh giỏi (HSG) quốc gia, quốc tế.',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/chi0.jpg?resize=678%2C479&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 3,
      title:
        'Nam sinh Vĩnh Phúc đoạt Huy chương Bạc kỳ thi Olympiad Hóa học Mendeleev quốc tế',
      description:
        'International Mendeleev Chemistry Olympiad – IMChO lần thứ 58 được tổ chức tại Thẩm Quyến (Trung Quốc) vừa kết thúc cách đây ít giờ. Cả 10 thí sinh Đoàn Việt Nam đều có huy chương, trong đó Tạ Quang Chí, học sinh lớp 12A5 chuyên Hóa trường Chuyên Vĩnh Phúc đoạt Huy chương Bạc',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/taquangchi00.jpg?resize=678%2C420&ssl=1',
      date: '10/10/2025',
      learners: '8.2k Views',
    },
  ];
  const activitiesEducationData = [
    {
      id: 1,
      title: 'Ngôi trường hội tụ những tài năng',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/997_5885.jpg?zoom=2&resize=678%2C245&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 2,
      title: 'Giám đốc Sở làm việc với trường THPT Chuyên Vĩnh Phúc',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/IMG_1011.png?resize=678%2C225&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 3,
      title:
        'Ở Vĩnh Phúc có ngôi trường được đầu tư hơn 100 tỷ đồng, điều hoà khắp nơi, vừa có Thủ khoa toàn quốc',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/kham-pha-ngoi-truong-chuyen-duoc-dau-tu-400-ty-dong-dieu-hoa-o-khap-noi-co-thu-khoa-ca-nuoc-thpt-chuyen-vinh-phuc-5-1725873403-375-width780height439.jpg?resize=678%2C382&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 4,
      title:
        'Bí thư Tỉnh ủy Vĩnh Phúc ‘bật mí’ tin vui tới hàng trăm ngàn học sinh dịp khai giảng',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/dva3-4326.jpg?resize=678%2C465&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
    {
      id: 5,
      title: 'Điểm sáng trong phát triển đảng viên là học sinh, sinh viên',
      image:
        'https://i0.wp.com/www.cvp.vn/wp-content/uploads/2024/10/975_999_1ok.jpg?resize=678%2C393&ssl=1',
      date: '10/10/2025',
      learners: '10.5k Views',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello Liza !</Text>
          <TouchableOpacity style={styles.searchButton}>
            <SearchIc width={22} height={22} />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>Nền tảng giáo dục hàng đầu</Text>
              <Text style={styles.bannerSubtitle}>
                Khám phá kiến thức cùng Trường THPT Chuyên Vĩnh Phúc
              </Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Tham gia ngay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bannerImageContainer}>
              <Text style={styles.bannerIcon}>📚</Text>
            </View>
          </View>

          {/* Dots indicator */}
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Categories */}
        <View style={[styles.section]}>
          <Text
            style={[
              styles.sectionTitle,
              { marginHorizontal: 20, paddingBottom: 6 },
            ]}
          >
            Danh mục
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
          >
            {categoriesData.map(category => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                {category.icon}
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Hoạt động giáo dục */}
        <View style={[styles.section]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hoạt động giáo dục</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newsContainer}
          >
            {activitiesEducationData.map(news => (
              <View key={news.id}>
                <NewsItem news={news} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Giáo dục mũi nhọn */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Giáo dục mũi nhọn</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={educationTopNews}
            renderItem={({ item }) => <BlogItem news={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.blogContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.Colors.primaryBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: lightTheme.Colors.secondaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 18,
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#ACD7FF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 160,
  },
  bannerContent: {
    flex: 1,
    paddingRight: 20,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#577395',
    opacity: 0.9,
    marginBottom: 20,
    lineHeight: 20,
  },
  enrollButton: {
    backgroundColor: lightTheme.Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  enrollButtonText: {
    color: lightTheme.Colors.primaryBackground,
    fontWeight: '600',
    fontSize: 16,
  },
  bannerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerIcon: {
    fontSize: 60,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: lightTheme.Colors.inactive,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: lightTheme.Colors.primary,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
  },
  viewAllButton: {
    fontSize: 14,
    color: lightTheme.Colors.primary,
    fontWeight: '600',
  },
  categoryCard: {
    backgroundColor: '#F8FAFF',
    borderRadius: 12,
    padding: 20,
    width: 140,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightTheme.Colors.border,
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: lightTheme.Colors.text,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  categorySubtitle: {
    fontSize: 12,
    color: lightTheme.Colors.text2,
  },
  newsContainer: {
    paddingBottom: 16,
  },
  blogContainer: {
    paddingBottom: 16,
    paddingTop: 4,
    paddingHorizontal: 20,
    gap: 16,
  },
});
