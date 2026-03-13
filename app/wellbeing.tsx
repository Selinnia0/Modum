import { CategoryCard } from '@/components/CategoryCard';
import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WellbeingMainScreen() {
    const router = useRouter();

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <Ionicons name="checkmark-circle-outline" size={40} color="white" />
                        <Text style={styles.headerTitle}>İyi Oluş</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <View style={styles.content}>
                    <GlassCard opacity={0.2} borderRadius={15} style={styles.subtitleCard}>
                        <Text style={styles.subtitleText}>Ruhsal ya da fiziksel olarak daha iyi olmak ister misin?</Text>
                    </GlassCard>

                    <View style={styles.mainGrid}>
                        <CategoryCard
                            size="large"
                            iconName="brain"
                            iconFamily="FontAwesome5"
                            label="Ruhsal"
                            onPress={() => router.push('/mental_wellbeing')}
                        />

                        <CategoryCard
                            size="large"
                            iconName="accessibility"
                            iconFamily="Ionicons"
                            label="Fiziksel"
                            onPress={() => router.push('/physical_wellbeing')}
                        />

                        <View style={styles.centerRow}>
                            <CategoryCard
                                size="large"
                                iconName="self-improvement"
                                iconFamily="MaterialCommunityIcons"
                                label="Stres Azaltma"
                                onPress={() => router.push('/stress_management')}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.footerLogo}>
                    <Text style={styles.logoTextSmall}>MODUM</Text>
                </View>
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
        fontSize: 32,
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
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    subtitleCard: {
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 40,
    },
    subtitleText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    mainGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
    centerRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    footerLogo: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        alignItems: 'center',
    },
    logoTextSmall: {
        fontSize: 60,
        fontWeight: 'normal',
        color: 'white',
        letterSpacing: 8,
        opacity: 0.8,
    },
});
