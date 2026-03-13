import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { resultsStore } from '../constants/resultsStore';
import { getStatusAndColor } from '../constants/resultUtils';

export default function ResultsScreen() {
    const router = useRouter();
    const { score, maxScore, category } = useLocalSearchParams<{ score: string, maxScore: string, category: string }>();

    // Current test data (if redirected from questionnaire)
    const currentScore = score ? parseInt(score) : null;
    const currentMaxScore = maxScore ? parseInt(maxScore) : 25;
    const currentCategory = category || null;

    const { status: currentStatus, color: currentStatusColor } =
        currentScore !== null ? getStatusAndColor(currentScore, currentMaxScore) : { status: "Çok İyi", color: "#00FFFF" };

    const history = resultsStore.getHistory();
    const currentDate = new Date().toLocaleDateString('tr-TR');

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="folder-download" size={32} color="#4A00E0" />
                        </View>
                        <Text style={styles.headerTitle}>Sonuçlarım</Text>
                    </View>
                </View>

                <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {/* Latest Result (If just finished a test) */}
                    {currentScore !== null && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Son Çözülen Test</Text>
                            <GlassCard opacity={0.4} borderRadius={25} style={[styles.resultCard, { borderColor: currentStatusColor, borderWidth: 1 }]}>
                                <View style={styles.resultLine}>
                                    <Text style={styles.resultLabel}>Anket : </Text>
                                    <Text style={styles.resultValue}>{currentCategory}</Text>
                                </View>
                                <View style={styles.resultLine}>
                                    <Text style={styles.resultLabel}>Puan : </Text>
                                    <Text style={styles.resultValue}>{currentScore} / {currentMaxScore}</Text>
                                </View>
                                <View style={styles.resultLine}>
                                    <Text style={styles.resultLabel}>Sonuç : </Text>
                                    <Text style={[styles.resultValue, { color: currentStatusColor }]}>{currentStatus}</Text>
                                </View>
                                <View style={styles.resultLine}>
                                    <Text style={styles.resultLabel}>Tarih : </Text>
                                    <Text style={styles.resultValue}>{currentDate}</Text>
                                </View>
                            </GlassCard>
                        </View>
                    )}

                    {/* Past History */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Geçmiş Sonuçlar</Text>
                        {history.map((res) => (
                            <GlassCard key={res.id} opacity={0.25} borderRadius={20} style={styles.historyCard}>
                                <View style={styles.historyHeader}>
                                    <Text style={styles.historyCategory}>{res.category}</Text>
                                    <Text style={styles.historyDate}>{res.date}</Text>
                                </View>
                                <View style={styles.dividerLight} />
                                <View style={styles.historyFooter}>
                                    <View style={styles.historyStat}>
                                        <Text style={styles.statLabel}>Skor</Text>
                                        <Text style={styles.statValue}>{res.score}/{res.maxScore}</Text>
                                    </View>
                                    <View style={styles.historyStat}>
                                        <Text style={styles.statLabel}>Durum</Text>
                                        <Text style={[styles.statValue, { color: res.color }]}>{res.status}</Text>
                                    </View>
                                </View>
                            </GlassCard>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.homeButton}
                        onPress={() => router.replace('/(tabs)')}
                    >
                        <GlassCard opacity={0.4} borderRadius={25} style={styles.homeButtonInner}>
                            <Text style={styles.homeButtonText}>Ana Sayfaya Dön</Text>
                        </GlassCard>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 20,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    iconBox: {
        backgroundColor: 'white',
        width: 50,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
    },
    scrollArea: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 40,
        alignItems: 'center',
    },
    section: {
        width: '100%',
        marginBottom: 30,
    },
    sectionTitle: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 15,
        marginLeft: 5,
    },
    resultCard: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
    },
    resultLine: {
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center',
    },
    resultLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
    },
    resultValue: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        flexShrink: 1,
    },
    historyCard: {
        padding: 15,
        marginBottom: 15,
        width: '100%',
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    historyCategory: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    historyDate: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
    },
    dividerLight: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginBottom: 10,
    },
    historyFooter: {
        flexDirection: 'row',
        gap: 30,
    },
    historyStat: {
        gap: 4,
    },
    statLabel: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    statValue: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    homeButton: {
        width: '100%',
        marginTop: 10,
    },
    homeButtonInner: {
        alignItems: 'center',
        paddingVertical: 15,
    },
    homeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    }
});
