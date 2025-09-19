import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lightTheme } from '@src/utils/globalStyles';

// SVG Icon Imports
import QRIcon from '@src/assets/imageSvg/profileScreen/qr_icon.svg';
import UserIcon from '@src/assets/imageSvg/profileScreen/information_personal.svg';
import LockIcon from '@src/assets/imageSvg/profileScreen/change_pass.svg';
import BellIcon from '@src/assets/imageSvg/profileScreen/notification.svg';
import BookIcon from '@src/assets/imageSvg/profileScreen/history.svg';
import MessageIcon from '@src/assets/imageSvg/profileScreen/support.svg';
import InfoIcon from '@src/assets/imageSvg/profileScreen/about.svg';
import LogoutIcon from '@src/assets/imageSvg/profileScreen/logout.svg';

type StudentInfo = {
  studentId: string;
  fullName: string;
  className: string;
  grade: string;
  avatar: string;
  birthDate: string;
  address: string;
  parentPhone: string;
  email: string;
};

const ProfileScreen = () => {
  // Mock student data - updated
  const studentInfo: StudentInfo = {
    studentId: '2023-2026',
    fullName: 'Nguyễn Văn An',
    className: '12A1',
    grade: 'Khối 12',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    birthDate: '15/03/2006',
    address: 'Số 123, Đường ABC, Phường XYZ, TP. Vĩnh Yên',
    parentPhone: '0987654321',
    email: 'nguyenvanan@student.cvp.edu.vn',
  };

  const accountMenuItems = [
    {
      id: '1',
      title: 'Thông tin cá nhân',
      icon: (
        <UserIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () =>
        Alert.alert('Thông tin cá nhân', 'Chức năng đang phát triển'),
    },
    {
      id: '2',
      title: 'Đổi mật khẩu',
      icon: (
        <LockIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () => Alert.alert('Đổi mật khẩu', 'Chức năng đang phát triển'),
    },
    {
      id: '3',
      title: 'Cài đặt thông báo',
      icon: (
        <BellIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () => Alert.alert('Thông báo', 'Chức năng đang phát triển'),
    },
    {
      id: '4',
      title: 'Lịch sử hoạt động',
      icon: (
        <BookIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () => Alert.alert('Lịch sử', 'Chức năng đang phát triển'),
    },
    {
      id: '5',
      title: 'Hỗ trợ & Góp ý',
      icon: (
        <MessageIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () => Alert.alert('Hỗ trợ', 'Chức năng đang phát triển'),
    },
    {
      id: '6',
      title: 'Về ứng dụng',
      icon: (
        <InfoIcon width={24} height={24} fill={lightTheme.Colors.primary} />
      ),
      onPress: () => Alert.alert('Về ứng dụng', 'CVP Mobile App v1.0.0'),
    },
  ];

  const handleQRCode = () => {
    Alert.alert('Mã QR', 'Hiển thị mã QR của bạn');
  };

  const handleLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất?', [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Đăng xuất',
        style: 'destructive',
        onPress: () => {
          // Handle logout logic here
          Alert.alert('Đã đăng xuất', 'Bạn đã đăng xuất thành công');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hồ sơ cá nhân</Text>
        </View>

        {/* Student Card - Based on real card design */}
        <View style={styles.studentCard}>
          {/* Card Header - Blue background like CVP */}
          <View style={styles.cardHeader}>
            <View style={styles.headerContent}>
              <View style={styles.logoSection}>
                <View style={styles.schoolLogo}>
                  <Image
                    source={require('@src/assets/imagePNG/logo_CVP.png')}
                    style={styles.logoIcon}
                  />
                </View>
                <View style={styles.schoolTextInfo}>
                  <Text style={styles.departmentText}>
                    SỞ GIÁO DỤC VÀ ĐÀO TẠO VĨNH PHÚC
                  </Text>
                  <Text style={styles.schoolName}>
                    TRƯỜNG THPT CHUYÊN VĨNH PHÚC
                  </Text>
                </View>
              </View>
            </View>

            {/* Curved decoration */}
            <View style={styles.curvedDecoration} />
          </View>

          {/* Card Body */}
          <View style={styles.cardBody}>
            {/* Watermark background */}
            <View style={styles.watermarkContainer}>
              <Image
                source={require('@src/assets/imagePNG/logo_CVP.png')}
                style={styles.watermark}
              />
            </View>

            <View style={styles.cardContent}>
              {/* Left section - Photo */}
              <View style={styles.photoSection}>
                <View style={styles.photoContainer}>
                  <Image
                    source={{ uri: studentInfo.avatar }}
                    style={styles.studentPhoto}
                  />
                </View>
              </View>

              {/* Right section - Information */}
              <View style={styles.infoSection}>
                <Text style={styles.cardTitle}>THẺ HỌC SINH</Text>

                <Text style={styles.studentName}>
                  {studentInfo.fullName.toUpperCase()}
                </Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Ngày sinh:</Text>
                  <Text style={styles.infoValue}>{studentInfo.birthDate}</Text>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Lớp:</Text>
                  <Text style={styles.infoValue}>{studentInfo.className}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Niên khóa:</Text>
                  <Text style={styles.infoValue}>{studentInfo.studentId}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Card Footer */}
          <View style={styles.cardFooter}>
            <View style={styles.footerContent}>
              <Text style={styles.academicYear}>Năm học: 2024 - 2025</Text>
              <Text style={styles.cardNumber}>001</Text>
            </View>
          </View>
        </View>

        {/* QR Code Button */}
        <TouchableOpacity style={styles.qrButton} onPress={handleQRCode}>
          <View style={styles.qrButtonContent}>
            <View style={styles.qrIconContainer}>
              <QRIcon width={32} height={32} fill={lightTheme.Colors.primary} />
            </View>
            <View style={styles.qrTextContainer}>
              <Text style={styles.qrButtonTitle}>Mã QR của tôi</Text>
              <Text style={styles.qrButtonSubtitle}>
                Hiển thị mã QR để check-in
              </Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
        </TouchableOpacity>

        {/* Account Functions */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Quản lý tài khoản</Text>

          {accountMenuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <View style={styles.menuItemContent}>
                <View style={styles.menuIconContainer}>{item.icon}</View>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogoutIcon
            width={24}
            height={24}
            fill={lightTheme.Colors.primaryBackground}
          />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>CVP Mobile App v1.0.0</Text>
          <Text style={styles.footerSubtext}>© 2024 THPT Chuyên Vĩnh Phúc</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  // ... existing container and header styles ...

  // Redesigned Student Card based on real cards
  studentCard: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  cardHeader: {
    backgroundColor: '#283a5c', // CVP Blue
    height: 80,
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  headerContent: {
    flex: 1,
    zIndex: 1,
  },

  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  schoolLogo: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    left: -4,
  },

  logoIcon: {
    width: 60,
    height: 60,
  },

  schoolTextInfo: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
  },

  departmentText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 2,
  },

  schoolName: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: '#bab150',
    // letterSpacing: 0.5,
    textAlign: 'center',
  },

  curvedDecoration: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    backgroundColor: '#fff', // Orange color
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 16,
    zIndex: 0,
  },

  cardBody: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },

  watermarkContainer: {
    position: 'absolute',
    right: 50,
    top: '50%',
    transform: [{ translateY: -60 }],
    opacity: 0.1,
  },

  watermark: {
    width: 150,
    height: 150,
  },

  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    flex: 1,
  },

  photoSection: {
    width: 100,
    alignItems: 'center',
  },

  photoContainer: {
    width: 85,
    height: 100,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#283a5c',
  },

  studentPhoto: {
    width: 85,
    height: 100,
    resizeMode: 'cover',
  },

  infoSection: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 8,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#28323E',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1,
  },

  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.5,
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },

  infoLabel: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '500',
    width: 85,
  },

  infoValue: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
  },

  cardFooter: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 8,
  },

  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  academicYear: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
  },

  cardNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },

  // QR Button Styles with SVG
  qrButton: {
    marginHorizontal: 20,
    backgroundColor: lightTheme.Colors.primaryBackground,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: lightTheme.Colors.border,
  },

  qrButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  qrIconContainer: {
    marginRight: 15,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrTextContainer: {
    flex: 1,
  },

  qrButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.text,
    marginBottom: 2,
  },

  qrButtonSubtitle: {
    fontSize: 13,
    color: lightTheme.Colors.text2,
  },

  arrowIcon: {
    fontSize: 20,
    color: lightTheme.Colors.text2,
  },

  // Menu Section Styles with SVG
  menuSection: {
    marginHorizontal: 20,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
    marginBottom: 15,
  },

  menuItem: {
    backgroundColor: lightTheme.Colors.primaryBackground,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: lightTheme.Colors.border,
  },

  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    flex: 1,
  },

  menuIconContainer: {
    marginRight: 15,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuTitle: {
    fontSize: 16,
    color: lightTheme.Colors.text,
    flex: 1,
  },

  menuArrow: {
    fontSize: 18,
    color: lightTheme.Colors.text2,
    paddingRight: 16,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -9 }],
  },

  // Logout Button Styles with SVG
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: lightTheme.Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.primaryBackground,
    marginLeft: 10,
  },

  // Footer Styles
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  footerText: {
    fontSize: 12,
    color: lightTheme.Colors.text2,
    marginBottom: 4,
  },

  footerSubtext: {
    fontSize: 11,
    color: lightTheme.Colors.placeholder,
  },

  // Keep existing container and header styles
  container: {
    flex: 1,
    backgroundColor: lightTheme.Colors.primaryBackground,
  },

  scrollContent: {
    paddingBottom: 100,
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
});
