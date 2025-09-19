import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { lightTheme } from '@src/utils/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

// SVG Icon Imports
import CalendarIcon from '@src/assets/imageSvg/scoreScreen/year.svg';
import SpeakIcon from '@src/assets/imageSvg/scoreScreen/speak.svg';
import TimerIcon from '@src/assets/imageSvg/scoreScreen/timer.svg';
import ClassPeriodIcon from '@src/assets/imageSvg/scoreScreen/class_period.svg';
import MiddleTermIcon from '@src/assets/imageSvg/scoreScreen/middle.svg';
import FinalTermIcon from '@src/assets/imageSvg/scoreScreen/final_term.svg';
import ExamIcon from '@src/assets/imageSvg/scoreScreen/exam.svg';
import TermIcon from '@src/assets/imageSvg/scoreScreen/term.svg';

// Subject Icons
import MathIcon from '@src/assets/imageSvg/scoreScreen/math.svg';
import PhysicsIcon from '@src/assets/imageSvg/scoreScreen/physics.svg';
import ChemistryIcon from '@src/assets/imageSvg/scoreScreen/chemistry.svg';
import BiologyIcon from '@src/assets/imageSvg/scoreScreen/biometric.svg';
import LiteratureIcon from '@src/assets/imageSvg/scoreScreen/literature.svg';
import EnglishIcon from '@src/assets/imageSvg/scoreScreen/english.svg';
import HistoryIcon from '@src/assets/imageSvg/scoreScreen/history.svg';
import GeographyIcon from '@src/assets/imageSvg/scoreScreen/geography.svg';
import InformaticsIcon from '@src/assets/imageSvg/scoreScreen/computer.svg';
import PhysicalEducationIcon from '@src/assets/imageSvg/scoreScreen/exercise.svg';
import MusicIcon from '@src/assets/imageSvg/scoreScreen/music.svg';
import ArtIcon from '@src/assets/imageSvg/scoreScreen/art.svg';

type TestScore = {
  id: string;
  testName: string;
  score: number;
  maxScore: number;
  date: string;
};

type TestType = {
  id: string;
  typeName: string;
  typeCode: 'oral' | 'test15' | 'test45' | 'midterm' | 'final';
  scores: TestScore[];
  weight: number; // Hệ số tính điểm
};

type Subject = {
  id: string;
  subjectName: string;
  testTypes: TestType[];
  averageScore?: number;
};

type Semester = {
  id: string;
  semesterName: string;
  subjects: Subject[];
};

type SchoolYear = {
  id: string;
  yearName: string;
  semesters: Semester[];
};

const ScoreScreen = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>('2024-2025');
  const [expandedSemester, setExpandedSemester] = useState<string | null>(
    'HK1',
  );
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [expandedTestType, setExpandedTestType] = useState<string | null>(null);

  // Sample data with all subjects
  const scoreData: SchoolYear[] = [
    {
      id: '2024-2025',
      yearName: 'Năm học 2024-2025',
      semesters: [
        {
          id: 'HK1',
          semesterName: 'Học kỳ I',
          subjects: [
            {
              id: 'toan',
              subjectName: 'Toán học',
              testTypes: [
                {
                  id: 'toan-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '1',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.5,
                      maxScore: 10,
                      date: '15/09/2024',
                    },
                    {
                      id: '2',
                      testName: 'Kiểm tra miệng lần 2',
                      score: 9.0,
                      maxScore: 10,
                      date: '25/09/2024',
                    },
                  ],
                },
                {
                  id: 'toan-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '3',
                      testName: 'Kiểm tra 15p - Hàm số',
                      score: 7.5,
                      maxScore: 10,
                      date: '20/09/2024',
                    },
                    {
                      id: '4',
                      testName: 'Kiểm tra 15p - Đạo hàm',
                      score: 8.0,
                      maxScore: 10,
                      date: '10/10/2024',
                    },
                  ],
                },
                {
                  id: 'toan-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '5',
                      testName: 'Kiểm tra 1 tiết - Lượng giác',
                      score: 7.8,
                      maxScore: 10,
                      date: '05/10/2024',
                    },
                  ],
                },
                {
                  id: 'toan-midterm',
                  typeName: 'Kiểm tra giữa kỳ',
                  typeCode: 'midterm',
                  weight: 2,
                  scores: [
                    {
                      id: '6',
                      testName: 'Kiểm tra giữa kỳ I',
                      score: 8.2,
                      maxScore: 10,
                      date: '15/11/2024',
                    },
                  ],
                },
                {
                  id: 'toan-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '7',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 8.5,
                      maxScore: 10,
                      date: '20/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'vatly',
              subjectName: 'Vật lý',
              testTypes: [
                {
                  id: 'vatly-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '8',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 9.0,
                      maxScore: 10,
                      date: '18/09/2024',
                    },
                  ],
                },
                {
                  id: 'vatly-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '9',
                      testName: 'Kiểm tra 15p - Động học',
                      score: 8.5,
                      maxScore: 10,
                      date: '25/09/2024',
                    },
                    {
                      id: '10',
                      testName: 'Kiểm tra 15p - Động lực học',
                      score: 7.8,
                      maxScore: 10,
                      date: '12/10/2024',
                    },
                  ],
                },
                {
                  id: 'vatly-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '11',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 8.7,
                      maxScore: 10,
                      date: '22/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'hoa',
              subjectName: 'Hóa học',
              testTypes: [
                {
                  id: 'hoa-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '12',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.0,
                      maxScore: 10,
                      date: '16/09/2024',
                    },
                  ],
                },
                {
                  id: 'hoa-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '13',
                      testName: 'Kiểm tra 15p - Bảng tuần hoàn',
                      score: 7.5,
                      maxScore: 10,
                      date: '28/09/2024',
                    },
                    {
                      id: '14',
                      testName: 'Kiểm tra 15p - Liên kết hóa học',
                      score: 8.5,
                      maxScore: 10,
                      date: '15/10/2024',
                    },
                  ],
                },
                {
                  id: 'hoa-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '15',
                      testName: 'Kiểm tra 1 tiết - Phản ứng hóa học',
                      score: 8.2,
                      maxScore: 10,
                      date: '08/11/2024',
                    },
                  ],
                },
                {
                  id: 'hoa-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '16',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 8.0,
                      maxScore: 10,
                      date: '21/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'sinh',
              subjectName: 'Sinh học',
              testTypes: [
                {
                  id: 'sinh-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '17',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.8,
                      maxScore: 10,
                      date: '20/09/2024',
                    },
                  ],
                },
                {
                  id: 'sinh-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '18',
                      testName: 'Kiểm tra 15p - Tế bào',
                      score: 9.0,
                      maxScore: 10,
                      date: '02/10/2024',
                    },
                    {
                      id: '19',
                      testName: 'Kiểm tra 15p - ADN và ARN',
                      score: 8.5,
                      maxScore: 10,
                      date: '18/10/2024',
                    },
                  ],
                },
                {
                  id: 'sinh-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '20',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 8.8,
                      maxScore: 10,
                      date: '23/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'van',
              subjectName: 'Ngữ văn',
              testTypes: [
                {
                  id: 'van-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '21',
                      testName: 'Đọc hiểu văn bản',
                      score: 8.0,
                      maxScore: 10,
                      date: '17/09/2024',
                    },
                  ],
                },
                {
                  id: 'van-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '22',
                      testName: 'Làm văn - Tự sự',
                      score: 7.5,
                      maxScore: 10,
                      date: '05/10/2024',
                    },
                    {
                      id: '23',
                      testName: 'Làm văn - Nghị luận',
                      score: 8.0,
                      maxScore: 10,
                      date: '20/11/2024',
                    },
                  ],
                },
                {
                  id: 'van-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '24',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 7.8,
                      maxScore: 10,
                      date: '19/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'anh',
              subjectName: 'Tiếng Anh',
              testTypes: [
                {
                  id: 'anh-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '25',
                      testName: 'Speaking Test',
                      score: 8.5,
                      maxScore: 10,
                      date: '22/09/2024',
                    },
                  ],
                },
                {
                  id: 'anh-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '26',
                      testName: 'Vocabulary & Grammar',
                      score: 8.0,
                      maxScore: 10,
                      date: '05/10/2024',
                    },
                    {
                      id: '27',
                      testName: 'Reading Comprehension',
                      score: 7.5,
                      maxScore: 10,
                      date: '25/10/2024',
                    },
                  ],
                },
                {
                  id: 'anh-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '28',
                      testName: 'Unit 3-4 Test',
                      score: 8.2,
                      maxScore: 10,
                      date: '12/11/2024',
                    },
                  ],
                },
                {
                  id: 'anh-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '29',
                      testName: 'Final Test Semester I',
                      score: 8.3,
                      maxScore: 10,
                      date: '18/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'su',
              subjectName: 'Lịch sử',
              testTypes: [
                {
                  id: 'su-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '30',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.0,
                      maxScore: 10,
                      date: '24/09/2024',
                    },
                  ],
                },
                {
                  id: 'su-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '31',
                      testName: 'Lịch sử Việt Nam 1858-1918',
                      score: 7.5,
                      maxScore: 10,
                      date: '10/11/2024',
                    },
                  ],
                },
                {
                  id: 'su-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '32',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 7.8,
                      maxScore: 10,
                      date: '17/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'dia',
              subjectName: 'Địa lý',
              testTypes: [
                {
                  id: 'dia-oral',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '33',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.5,
                      maxScore: 10,
                      date: '26/09/2024',
                    },
                  ],
                },
                {
                  id: 'dia-15p',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '34',
                      testName: 'Bản đồ địa hình',
                      score: 8.0,
                      maxScore: 10,
                      date: '08/10/2024',
                    },
                  ],
                },
                {
                  id: 'dia-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '35',
                      testName: 'Kiểm tra cuối kỳ I',
                      score: 8.2,
                      maxScore: 10,
                      date: '16/12/2024',
                    },
                  ],
                },
              ],
            },
            {
              id: 'tin',
              subjectName: 'Tin học',
              testTypes: [
                {
                  id: 'tin-45p',
                  typeName: 'Kiểm tra 1 tiết',
                  typeCode: 'test45',
                  weight: 2,
                  scores: [
                    {
                      id: '36',
                      testName: 'Lập trình Pascal',
                      score: 9.0,
                      maxScore: 10,
                      date: '15/11/2024',
                    },
                  ],
                },
                {
                  id: 'tin-final',
                  typeName: 'Kiểm tra cuối kỳ',
                  typeCode: 'final',
                  weight: 3,
                  scores: [
                    {
                      id: '37',
                      testName: 'Thực hành máy tính',
                      score: 8.8,
                      maxScore: 10,
                      date: '24/12/2024',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'HK2',
          semesterName: 'Học kỳ II',
          subjects: [
            {
              id: 'toan-hk2',
              subjectName: 'Toán học',
              testTypes: [
                {
                  id: 'toan-oral-hk2',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '38',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.8,
                      maxScore: 10,
                      date: '15/02/2025',
                    },
                  ],
                },
                {
                  id: 'toan-15p-hk2',
                  typeName: 'Kiểm tra 15 phút',
                  typeCode: 'test15',
                  weight: 1,
                  scores: [
                    {
                      id: '39',
                      testName: 'Kiểm tra 15p - Tích phân',
                      score: 8.5,
                      maxScore: 10,
                      date: '28/02/2025',
                    },
                  ],
                },
              ],
            },
            {
              id: 'vatly-hk2',
              subjectName: 'Vật lý',
              testTypes: [
                {
                  id: 'vatly-oral-hk2',
                  typeName: 'Kiểm tra miệng',
                  typeCode: 'oral',
                  weight: 1,
                  scores: [
                    {
                      id: '40',
                      testName: 'Kiểm tra miệng lần 1',
                      score: 8.3,
                      maxScore: 10,
                      date: '18/02/2025',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const getTestTypeColor = (typeCode: string) => {
    switch (typeCode) {
      case 'oral':
        return '#E3F2FD';
      case 'test15':
        return '#F3E5F5';
      case 'test45':
        return '#E8F5E8';
      case 'midterm':
        return '#FFF3E0';
      case 'final':
        return '#FFEBEE';
      default:
        return '#F5F5F5';
    }
  };

  const getTestTypeBorderColor = (typeCode: string) => {
    switch (typeCode) {
      case 'oral':
        return '#2196F3';
      case 'test15':
        return '#9C27B0';
      case 'test45':
        return '#4CAF50';
      case 'midterm':
        return '#FF9800';
      case 'final':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const calculateAverage = (testTypes: TestType[]) => {
    let totalWeightedScore = 0;
    let totalWeight = 0;

    testTypes.forEach(testType => {
      if (testType.scores.length > 0) {
        const typeAverage =
          testType.scores.reduce((sum, score) => sum + score.score, 0) /
          testType.scores.length;
        totalWeightedScore += typeAverage * testType.weight;
        totalWeight += testType.weight;
      }
    });

    return totalWeight > 0
      ? (totalWeightedScore / totalWeight).toFixed(1)
      : '0.0';
  };

  const getScoreColor = (score: number) => {
    if (score >= 8.5) return lightTheme.Colors.success;
    if (score >= 6.5) return '#FF9800';
    return lightTheme.Colors.error;
  };

  // Updated function to get subject icon with SVG
  const getSubjectIcon = (subjectName: string) => {
    const subject = subjectName.toLowerCase();
    if (subject.includes('toán'))
      return (
        <MathIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('vật lý') || subject.includes('vật lí'))
      return (
        <PhysicsIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('hóa'))
      return (
        <ChemistryIcon
          width={20}
          height={20}
          fill={lightTheme.Colors.primary}
        />
      );
    if (subject.includes('sinh'))
      return (
        <BiologyIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('văn') || subject.includes('ngữ văn'))
      return (
        <LiteratureIcon
          width={20}
          height={20}
          fill={lightTheme.Colors.primary}
        />
      );
    if (subject.includes('anh') || subject.includes('english'))
      return (
        <EnglishIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('sử'))
      return (
        <HistoryIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('địa'))
      return (
        <GeographyIcon
          width={20}
          height={20}
          fill={lightTheme.Colors.primary}
        />
      );
    if (subject.includes('tin'))
      return (
        <InformaticsIcon
          width={20}
          height={20}
          fill={lightTheme.Colors.primary}
        />
      );
    if (subject.includes('thể dục'))
      return (
        <PhysicalEducationIcon
          width={20}
          height={20}
          fill={lightTheme.Colors.primary}
        />
      );
    if (subject.includes('âm nhạc'))
      return (
        <MusicIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    if (subject.includes('mỹ thuật'))
      return (
        <ArtIcon width={20} height={20} fill={lightTheme.Colors.primary} />
      );
    return (
      <LiteratureIcon width={20} height={20} fill={lightTheme.Colors.primary} />
    ); // Default icon
  };

  // Function to get test type icon
  const getTestTypeIcon = (typeCode: string) => {
    switch (typeCode) {
      case 'oral':
        return <SpeakIcon width={28} height={28} />;
      case 'test15':
        return <TimerIcon width={26} height={26} />;
      case 'test45':
        return <ClassPeriodIcon width={26} height={26} />;
      case 'midterm':
        return <MiddleTermIcon width={26} height={26} />;
      case 'final':
        return <FinalTermIcon width={26} height={26} />;
      default:
        return '📝';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🎓</Text>
          <Text style={styles.headerTitle}>Bảng điểm học tập</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {scoreData.map(year => (
          <View key={year.id} style={styles.yearContainer}>
            <TouchableOpacity
              style={styles.yearHeader}
              onPress={() =>
                setExpandedYear(expandedYear === year.id ? null : year.id)
              }
            >
              <View style={styles.yearHeaderContent}>
                <View style={styles.yearIcon}>
                  <CalendarIcon width={24} height={24} />
                </View>
                <Text style={styles.yearTitle}>{year.yearName}</Text>
              </View>
              <Text
                style={[
                  styles.expandIcon,
                  { color: lightTheme.Colors.primaryBackground },
                ]}
              >
                {expandedYear === year.id ? '−' : '+'}
              </Text>
            </TouchableOpacity>

            {expandedYear === year.id && (
              <View style={styles.yearContent}>
                {year.semesters.map(semester => (
                  <View key={semester.id} style={styles.semesterContainer}>
                    <TouchableOpacity
                      style={styles.semesterHeader}
                      onPress={() =>
                        setExpandedSemester(
                          expandedSemester === semester.id ? null : semester.id,
                        )
                      }
                    >
                      <View style={styles.semesterHeaderContent}>
                        <View style={styles.semesterIcon}>
                          <TermIcon width={24} height={24} />
                        </View>
                        <Text style={styles.semesterTitle}>
                          {semester.semesterName}
                        </Text>
                      </View>
                      <Text style={styles.expandIcon}>
                        {expandedSemester === semester.id ? '−' : '+'}
                      </Text>
                    </TouchableOpacity>

                    {expandedSemester === semester.id && (
                      <View style={styles.semesterContent}>
                        {semester.subjects.map(subject => (
                          <View
                            key={subject.id}
                            style={styles.subjectContainer}
                          >
                            <TouchableOpacity
                              style={styles.subjectHeader}
                              onPress={() =>
                                setExpandedSubject(
                                  expandedSubject === subject.id
                                    ? null
                                    : subject.id,
                                )
                              }
                            >
                              <View style={styles.subjectInfo}>
                                <View style={styles.subjectTitleRow}>
                                  <Text style={styles.subjectIcon}>
                                    {getSubjectIcon(subject.subjectName)}
                                  </Text>
                                  <Text style={styles.subjectTitle}>
                                    {subject.subjectName}
                                  </Text>
                                </View>
                                <Text style={styles.averageScore}>
                                  TB:{' '}
                                  <Text
                                    style={[
                                      styles.averageValue,
                                      {
                                        color: getScoreColor(
                                          parseFloat(
                                            calculateAverage(subject.testTypes),
                                          ),
                                        ),
                                      },
                                    ]}
                                  >
                                    {calculateAverage(subject.testTypes)}
                                  </Text>
                                </Text>
                              </View>
                              <Text style={styles.expandIcon}>
                                {expandedSubject === subject.id ? '−' : '+'}
                              </Text>
                            </TouchableOpacity>

                            {expandedSubject === subject.id && (
                              <View style={styles.subjectContent}>
                                {subject.testTypes.map(testType => (
                                  <View
                                    key={testType.id}
                                    style={styles.testTypeContainer}
                                  >
                                    <TouchableOpacity
                                      style={[
                                        styles.testTypeHeader,
                                        {
                                          backgroundColor: getTestTypeColor(
                                            testType.typeCode,
                                          ),
                                          borderLeftColor:
                                            getTestTypeBorderColor(
                                              testType.typeCode,
                                            ),
                                        },
                                      ]}
                                      onPress={() =>
                                        setExpandedTestType(
                                          expandedTestType === testType.id
                                            ? null
                                            : testType.id,
                                        )
                                      }
                                    >
                                      <View style={styles.testTypeInfo}>
                                        <View style={styles.testTypeTitleRow}>
                                          <Text style={styles.testTypeIcon}>
                                            {getTestTypeIcon(testType.typeCode)}
                                          </Text>
                                          <View>
                                            <Text style={styles.testTypeTitle}>
                                              {testType.typeName}
                                            </Text>
                                            <Text style={styles.testTypeWeight}>
                                              Hệ số: {testType.weight}
                                            </Text>
                                          </View>
                                        </View>
                                      </View>
                                      <Text style={styles.expandIcon}>
                                        {expandedTestType === testType.id
                                          ? '−'
                                          : '+'}
                                      </Text>
                                    </TouchableOpacity>

                                    {expandedTestType === testType.id && (
                                      <View style={styles.scoresContainer}>
                                        {testType.scores.map(score => (
                                          <View
                                            key={score.id}
                                            style={styles.scoreItem}
                                          >
                                            <View style={styles.scoreInfo}>
                                              <View style={styles.scoreNameRow}>
                                                <View style={styles.scoreIcon}>
                                                  <ExamIcon
                                                    width={24}
                                                    height={24}
                                                  />
                                                </View>
                                                <View>
                                                  <Text
                                                    style={styles.scoreName}
                                                  >
                                                    {score.testName}
                                                  </Text>
                                                  <View
                                                    style={styles.scoreDateRow}
                                                  >
                                                    <Text
                                                      style={styles.scoreDate}
                                                    >
                                                      {score.date}
                                                    </Text>
                                                  </View>
                                                </View>
                                              </View>
                                            </View>
                                            <View style={styles.scoreValue}>
                                              <Text style={styles.scoreLabel}>
                                                🎯
                                              </Text>
                                              <Text
                                                style={[
                                                  styles.score,
                                                  {
                                                    color: getScoreColor(
                                                      score.score,
                                                    ),
                                                  },
                                                ]}
                                              >
                                                {score.score}
                                              </Text>
                                              <Text style={styles.maxScore}>
                                                /{score.maxScore}
                                              </Text>
                                            </View>
                                          </View>
                                        ))}
                                      </View>
                                    )}
                                  </View>
                                ))}
                              </View>
                            )}
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScoreScreen;

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
    backgroundColor: lightTheme.Colors.primaryBackground,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 28,
    marginRight: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  yearContainer: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: lightTheme.Colors.primaryBackground,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  yearHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: lightTheme.Colors.primary,
    borderRadius: 12,
  },
  yearHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearIcon: {
    fontSize: 20,
    marginRight: 4,
  },
  yearTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.Colors.primaryBackground,
  },
  yearContent: {
    padding: 12,
  },
  semesterContainer: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  semesterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  semesterHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  semesterIcon: {
    marginRight: 8,
  },
  semesterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: lightTheme.Colors.text,
  },
  semesterContent: {
    padding: 8,
  },
  subjectContainer: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: lightTheme.Colors.primaryBackground,
    borderWidth: 1,
    borderColor: lightTheme.Colors.border,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  subjectIcon: {
    marginRight: 8,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: lightTheme.Colors.text,
  },
  averageScore: {
    fontSize: 13,
    color: lightTheme.Colors.text2,
  },
  averageValue: {
    fontWeight: '600',
  },
  subjectContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  testTypeContainer: {
    marginBottom: 6,
  },
  testTypeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    borderLeftWidth: 4,
  },
  testTypeInfo: {
    flex: 1,
  },
  testTypeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  testTypeIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  testTypeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: lightTheme.Colors.text,
  },
  testTypeWeight: {
    fontSize: 12,
    color: lightTheme.Colors.text2,
  },
  scoresContainer: {
    paddingLeft: 16,
    paddingTop: 8,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 4,
    backgroundColor: '#FAFAFA',
    borderRadius: 6,
  },
  scoreInfo: {
    flex: 1,
  },
  scoreNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  scoreIcon: {
    fontSize: 12,
    marginRight: 8,
  },
  scoreName: {
    fontSize: 13,
    fontWeight: '500',
    color: lightTheme.Colors.text,
  },
  scoreDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    fontSize: 10,
    marginRight: 4,
  },
  scoreDate: {
    fontSize: 11,
    color: lightTheme.Colors.text2,
  },
  scoreValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 12,
    marginRight: 4,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  maxScore: {
    fontSize: 12,
    color: lightTheme.Colors.text2,
    marginLeft: 2,
  },
  expandIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.Colors.text,
    width: 20,
    textAlign: 'center',
  },
});
