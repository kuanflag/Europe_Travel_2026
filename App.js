import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';

// 從你的試算表提取的簡化資料
const travelData = [
  { date: '2/13', title: '抵達倫敦', location: 'London', desc: '抵達 LHR 機場，入住 Paddington 飯店，休息並適應時差。' },
  { date: '2/15', title: '前進冰島', location: 'Reykjavik', desc: '搭機前往 KEF，入住 Hotel Von，準備 3 日 Local Tour。' },
  { date: '2/19', title: '重返倫敦', location: 'London', desc: '大英博物館導覽、晚上觀賞歌劇魅影。' },
  { date: '2/23', title: '歐洲之星', location: 'Amsterdam', desc: '搭乘 Eurostar 前往荷蘭，入住 Hotel Estheréa，夜遊紅燈區。' },
  { date: '2/27', title: '最後採買', location: 'Amsterdam', desc: '海尼根博物館、安妮之家，準備隔日搭機返台。' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>2026 歐洲之旅</Text>
        <Text style={styles.headerSubtitle}>英國 · 冰島 · 荷蘭</Text>
      </View>

      {/* 日期導覽列 */}
      <View style={styles.navBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {travelData.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => setCurrentPage(index)}
              style={[styles.navItem, currentPage === index && styles.navItemActive]}
            >
              <Text style={[styles.navText, currentPage === index && styles.navTextActive]}>{item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 行程分頁內容 */}
      <PagerView style={styles.pagerView} initialPage={0} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        {travelData.map((item, index) => (
          <View key={index} style={styles.page}>
            <View style={styles.card}>
              <Text style={styles.cityTag}>{item.location}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.divider} />
              <Text style={styles.cardDesc}>{item.desc}</Text>
              
              {/* 攻略提示區塊 */}
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>💡 筆記</Text>
                <Text style={styles.infoText}>別忘了確認 Google Drive 中的詳細清單與住宿地址！</Text>
              </View>
            </View>
          </View>
        ))}
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { padding: 20, backgroundColor: '#2C3E50' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#FFF' },
  headerSubtitle: { fontSize: 16, color: '#BDC3C7', marginTop: 5 },
  navBar: { backgroundColor: '#FFF', elevation: 2, paddingVertical: 10 },
  navItem: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5 },
  navItemActive: { backgroundColor: '#3498DB' },
  navText: { fontSize: 16, color: '#7F8C8D' },
  navTextActive: { color: '#FFF', fontWeight: 'bold' },
  pagerView: { flex: 1 },
  page: { padding: 20, justifyContent: 'flex-start' },
  card: { backgroundColor: '#FFF', borderRadius: 15, padding: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  cityTag: { alignSelf: 'flex-start', backgroundColor: '#E1F5FE', color: '#01579B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5, fontSize: 12, fontWeight: 'bold', marginBottom: 10 },
  cardTitle: { fontSize: 24, fontWeight: 'bold', color: '#2C3E50' },
  divider: { height: 1, backgroundColor: '#ECF0F1', marginVertical: 15 },
  cardDesc: { fontSize: 16, color: '#34495E', lineHeight: 24 },
  infoBox: { marginTop: 20, padding: 15, backgroundColor: '#FFF9C4', borderRadius: 10 },
  infoTitle: { fontWeight: 'bold', marginBottom: 5 },
  infoText: { fontSize: 14, color: '#7F8C8D' }
});
