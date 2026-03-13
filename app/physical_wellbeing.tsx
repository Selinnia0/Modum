import { CategoryCard } from '@/components/CategoryCard';
import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhysicalWellbeingScreen() {
    const router = useRouter();

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <Ionicons name="walk-outline" size={40} color="white" />
                        <Text style={styles.headerTitle}>Fiziksel İyi Oluş</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <ScrollView style={styles.content} contentContainerStyle={styles.scrollArea}>
                    <GlassCard opacity={0.2} borderRadius={15} style={styles.subtitleCard}>
                        <Text style={styles.subtitleText}>Hangi konuda destek almak istersin?</Text>
                    </GlassCard>

                    <View style={styles.grid}>
                        <View style={styles.row}>
                            <CategoryCard
                                iconName="run"
                                iconFamily="MaterialCommunityIcons"
                                label="Sağlık"
                                onPress={() => router.push('/questionnaire')}
                            />

                            <CategoryCard
                                iconName="bed-outline"
                                iconFamily="MaterialCommunityIcons"
                                label="Uyku"
                                onPress={() => router.push('/questionnaire')}
                            />
                        </View>

                        <View style={styles.row}>
                            <CategoryCard
                                iconName="silverware-fork-knife"
                                iconFamily="MaterialCommunityIcons"
                                label="Beslenme"
                                onPress={() => router.push('/questionnaire')}
                            />
                        </View>

                        <View style={styles.row}>
                            <CategoryCard
                                iconName="human-male-height"
                                iconFamily="MaterialCommunityIcons"
                                label="Boy-Kilo"
                                onPress={() => router.push('/survey')}
                            />

                            <CategoryCard
                                iconName="dumbbell"
                                iconFamily="MaterialCommunityIcons"
                                label="Egzersiz"
                                onPress={() => router.push('/questionnaire')}
                            />
                        </View>
                    </View>

                    <View style={styles.footerLogo}>
                        <Text style={styles.logoTextSmall}>MODUM</Text>
                    </View>
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
        paddingTop: 20,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 25,
        zIndex: 1,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: '100%',
        marginTop: 20,
    },
    content: {
        flex: 1,
    },
    scrollArea: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 40,
        alignItems: 'center',
    },
    subtitleCard: {
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    subtitleText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    grid: {
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
    },
    footerLogo: {
        marginTop: 80,
        width: '100%',
        alignItems: 'center',
    },
    logoTextSmall: {
        fontSize: 60,
        fontWeight: 'normal',
        color: 'white',
        letterSpacing: 8,
        fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif-light',
        opacity: 0.8,
    },
});
