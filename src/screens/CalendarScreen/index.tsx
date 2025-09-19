import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lightTheme } from '@src/utils/globalStyles';

const { width } = Dimensions.get('window');

type ClassSchedule = {
  id: string;
  subject: string;
  chapter: string;
  startTime: string;
  endTime: string;
  room: string;
  teacher: string;
  color: string;
  icon: string;
};

type DaySchedule = {
  date: string;
  day: string;
  dayNumber: number;
  isToday: boolean;
  classes: ClassSchedule[];
};

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-24');

  // Sample schedule data - Updated to Vietnamese
  const weekSchedule: DaySchedule[] = [
    {
      date: '2024-01-21',
      day: 'CN',
      dayNumber: 21,
      isToday: false,
      classes: [],
    },
    {
      date: '2024-01-22',
      day: 'T2',
      dayNumber: 22,
      isToday: false,
      classes: [
        {
          id: '1',
          subject: 'Vật lý',
          chapter: 'Chương 2: Chuyển động',
          startTime: '09:00',
          endTime: '10:30',
          room: 'Phòng 3-301',
          teacher: 'Nguyễn Văn Minh',
          color: '#E8F5E8',
          icon: '⚛️',
        },
      ],
    },
    {
      date: '2024-01-23',
      day: 'T3',
      dayNumber: 23,
      isToday: false,
      classes: [
        {
          id: '2',
          subject: 'Hóa học',
          chapter: 'Chương 4: Hóa học hữu cơ',
          startTime: '14:00',
          endTime: '15:30',
          room: 'Phòng 2-205',
          teacher: 'Trần Thị Lan',
          color: '#FFF3E0',
          icon: '🧪',
        },
      ],
    },
    {
      date: '2024-01-24',
      day: 'T4',
      dayNumber: 24,
      isToday: true,
      classes: [
        {
          id: '3',
          subject: 'Mỹ thuật',
          chapter: 'Chương 3: Thiết kế thời trang',
          startTime: '11:35',
          endTime: '13:05',
          room: 'Phòng 5-508',
          teacher: 'Lê Hương Giang',
          color: '#FFE8F0',
          icon: '🎨',
        },
        {
          id: '4',
          subject: 'Tiếng Anh',
          chapter: 'Chương 5: Văn hóa ngôn ngữ',
          startTime: '13:30',
          endTime: '15:00',
          room: 'Phòng 2-205',
          teacher: 'Phạm Thị Mai',
          color: '#E3F2FD',
          icon: '🌍',
        },
        {
          id: '5',
          subject: 'Toán học',
          chapter: 'Chương 1: Hàm số và đồ thị',
          startTime: '15:30',
          endTime: '17:00',
          room: 'Phòng 1-108',
          teacher: 'Hoàng Văn Nam',
          color: '#E8F5E8',
          icon: '🧮',
        },
      ],
    },
    {
      date: '2024-01-25',
      day: 'T5',
      dayNumber: 25,
      isToday: false,
      classes: [
        {
          id: '6',
          subject: 'Sinh học',
          chapter: 'Chương 6: Di truyền học',
          startTime: '10:00',
          endTime: '11:30',
          room: 'Phòng 4-402',
          teacher: 'Vũ Thị Hoa',
          color: '#E8F5E8',
          icon: '🧬',
        },
        {
          id: '7',
          subject: 'Ngữ văn',
          chapter: 'Chương 3: Văn học trung đại',
          startTime: '14:00',
          endTime: '15:30',
          room: 'Phòng 1-205',
          teacher: 'Đỗ Minh Tâm',
          color: '#F3E5F5',
          icon: '📚',
        },
      ],
    },
    {
      date: '2024-01-26',
      day: 'T6',
      dayNumber: 26,
      isToday: false,
      classes: [
        {
          id: '8',
          subject: 'Lịch sử',
          chapter: 'Chương 7: Lịch sử Việt Nam',
          startTime: '08:00',
          endTime: '09:30',
          room: 'Phòng 3-101',
          teacher: 'Bùi Văn Đức',
          color: '#FFEBEE',
          icon: '🏛️',
        },
        {
          id: '9',
          subject: 'Địa lý',
          chapter: 'Chương 4: Địa lý tự nhiên',
          startTime: '13:30',
          endTime: '15:00',
          room: 'Phòng 2-301',
          teacher: 'Nguyễn Thị Thu',
          color: '#E0F7FA',
          icon: '🌏',
        },
      ],
    },
    {
      date: '2024-01-27',
      day: 'T7',
      dayNumber: 27,
      isToday: false,
      classes: [
        {
          id: '10',
          subject: 'Tin học',
          chapter: 'Chương 2: Lập trình cơ bản',
          startTime: '09:00',
          endTime: '10:30',
          room: 'Phòng máy tính A',
          teacher: 'Lý Thanh Sơn',
          color: '#E8EAF6',
          icon: '💻',
        },
      ],
    },
  ];

  const selectedDay = weekSchedule.find(day => day.date === selectedDate);

  const renderClassItem = (classItem: ClassSchedule, index: number) => (
    <View key={classItem.id} style={styles.scheduleItem}>
      <View style={styles.timeColumn}>
        <Text style={styles.startTime}>{classItem.startTime}</Text>
        <Text style={styles.endTime}>{classItem.endTime}</Text>
      </View>

      <View style={styles.timelineColumn}>
        <View style={styles.timelineDot} />
        {index < (selectedDay?.classes.length || 0) - 1 && (
          <View style={styles.timelineLine} />
        )}
      </View>

      <View style={[styles.classCard, { backgroundColor: classItem.color }]}>
        <View style={styles.classHeader}>
          <View style={styles.classInfo}>
            <Text style={styles.subjectName}>{classItem.subject}</Text>
            <Text style={styles.chapterName}>{classItem.chapter}</Text>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>⋮</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.classDetails}>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.roomText}>{classItem.room}</Text>
          </View>
          <View style={styles.teacherRow}>
            <View style={styles.teacherAvatar}>
              <Text style={styles.teacherInitial}>
                {classItem.teacher.charAt(0)}
              </Text>
            </View>
            <Text style={styles.teacherName}>{classItem.teacher}</Text>
          </View>
        </View>

        <View style={styles.subjectIcon}>
          <Text style={styles.iconText}>{classItem.icon}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.monthTitle}>Thời khóa biểu</Text>
      </View>

      {/* Week Calendar */}
      <View style={styles.weekContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weekScrollContent}
        >
          {weekSchedule.map(day => (
            <TouchableOpacity
              key={day.date}
              style={[
                styles.dayItem,
                selectedDate === day.date && styles.selectedDayItem,
              ]}
              onPress={() => setSelectedDate(day.date)}
            >
              <Text
                style={[
                  styles.dayLabel,
                  selectedDate === day.date && styles.selectedDayLabel,
                ]}
              >
                {day.day}
              </Text>
              <Text
                style={[
                  styles.dayNumber,
                  selectedDate === day.date && styles.selectedDayNumber,
                ]}
              >
                {day.dayNumber}
              </Text>
              {day.classes.length > 0 && (
                <View style={styles.hasClassIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Schedule Header */}
      <View style={styles.scheduleHeader}>
        <Text style={styles.timeColumnHeader}>Giờ</Text>
        <Text style={styles.courseColumnHeader}>Tiết học</Text>
        <TouchableOpacity style={styles.menuHeaderButton}>
          <Text style={styles.menuHeaderIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Schedule List */}
      <ScrollView
        style={styles.scheduleContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scheduleContainerContent}
      >
        {selectedDay?.classes.length ? (
          selectedDay.classes.map((classItem, index) =>
            renderClassItem(classItem, index),
          )
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>📅</Text>
            <Text style={styles.emptyStateText}>
              Không có tiết học nào trong ngày này
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.Colors.primaryBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.Colors.border,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: lightTheme.Colors.secondaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: lightTheme.Colors.text,
    fontWeight: 'bold',
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
  },
  placeholder: {
    width: 40,
  },
  weekContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.Colors.border,
  },
  weekScrollContent: {
    paddingHorizontal: 20,
  },
  dayItem: {
    alignItems: 'center',
    marginRight: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 50,
    position: 'relative',
  },
  selectedDayItem: {
    backgroundColor: lightTheme.Colors.primary,
  },
  dayLabel: {
    fontSize: 14,
    color: lightTheme.Colors.text2,
    marginBottom: 4,
    fontWeight: '500',
  },
  selectedDayLabel: {
    color: lightTheme.Colors.primaryBackground,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
  },
  selectedDayNumber: {
    color: lightTheme.Colors.primaryBackground,
  },
  hasClassIndicator: {
    position: 'absolute',
    bottom: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: lightTheme.Colors.primary,
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: lightTheme.Colors.primaryBackground,
  },
  timeColumnHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.text2,
    width: 60,
  },
  courseColumnHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.text2,
    flex: 1,
    marginLeft: 40,
  },
  menuHeaderButton: {
    padding: 8,
  },
  menuHeaderIcon: {
    fontSize: 16,
    color: lightTheme.Colors.text2,
  },
  scheduleContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scheduleContainerContent: {
    paddingBottom: 100,
  },
  scheduleItem: {
    flexDirection: 'row',
  },
  timeColumn: {
    width: 60,
    alignItems: 'flex-start',
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
    marginBottom: 2,
  },
  endTime: {
    fontSize: 14,
    color: lightTheme.Colors.text2,
  },
  timelineColumn: {
    width: 40,
    alignItems: 'center',
    paddingTop: 8,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: lightTheme.Colors.primary,
    marginBottom: 8,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: lightTheme.Colors.border,
    minHeight: 60,
  },
  classCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    position: 'relative',
    marginLeft: 8,
    marginBottom: 16,
    marginTop: 10,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  classInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
    marginBottom: 4,
  },
  chapterName: {
    fontSize: 14,
    color: lightTheme.Colors.text2,
  },
  menuButton: {
    padding: 4,
  },
  menuIcon: {
    fontSize: 18,
    color: lightTheme.Colors.text2,
    fontWeight: 'bold',
  },
  classDetails: {
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  roomText: {
    fontSize: 14,
    color: lightTheme.Colors.text,
    fontWeight: '500',
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: lightTheme.Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  teacherInitial: {
    fontSize: 12,
    fontWeight: 'bold',
    color: lightTheme.Colors.primaryBackground,
  },
  teacherName: {
    fontSize: 14,
    color: lightTheme.Colors.text,
    fontWeight: '500',
  },
  subjectIcon: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: lightTheme.Colors.primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconText: {
    fontSize: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: lightTheme.Colors.text2,
    textAlign: 'center',
  },
});
