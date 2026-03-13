import { EmojiCard } from '@/components/EmojiCard';
import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { ProgressCircle } from '@/components/ProgressCircle';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const STATS = [
    { emoji: '😊', label: 'Neşeliyim', percentage: '%100' },
    { emoji: '😔', label: 'Üzgünüm', percentage: '%0' },
    { emoji: '😐', label: 'Kaygılıyım', percentage: '%0' },
    { emoji: '😌', label: 'Huzurluyum', percentage: '%0' },
    { emoji: '😠', label: 'Kızgınım', percentage: '%0' },
    { emoji: '😳', label: 'Şaşkınım', percentage: '%0' },
    { emoji: '🤢', label: 'Tiksiniyorum', percentage: '%0' },
    { emoji: '🙈', label: 'Utanıyorum', percentage: '%0' },
    { emoji: '😱', label: 'Korkuyorum', percentage: '%0' },
];

export default function DashboardScreen() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>

                    <View style={styles.topSection}>
                        <ProgressCircle progress={0.6} time="03:27:32" />
                    </View>

                    <View style={styles.grid}>
                        {STATS.map((stat) => (
                            <EmojiCard
                                key={stat.label}
                                emoji={stat.emoji}
                                label={stat.label}
                                percentage={stat.percentage}
                                onPress={() => { }}
                            />
                        ))}
                    </View>

                    <GlassCard style={styles.actionCard} opacity={0.3} borderRadius={20}>
                        <Text style={styles.actionText}>Hadi modunu değerlendirelim...</Text>
                    </GlassCard>

                    <View style={styles.quoteBox}>
                        <Text style={styles.quoteText}>
                            "Mutluluk varacağımız bir istasyon değil, bir yolculuk biçimidir."
                        </Text>
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
        paddingBottom: 150, // More padding for tabs
    },
    topSection: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    actionCard: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        opacity: 0.9,
    },
    quoteBox: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    quoteText: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 24,
    }
});
