import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Linking, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StressManagementScreen() {
    const router = useRouter();
    const [showYoutubeModal, setShowYoutubeModal] = useState(true);

    const stressCategories = [
        { id: 1, label: 'Stres 1' },
        { id: 2, label: 'Stres 2' },
        { id: 3, label: 'Stres 3' },
        { id: 4, label: 'Stres 4' },
        { id: 5, label: 'Stres a' },
        { id: 6, label: 'Stres b' },
    ];

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <MaterialCommunityIcons name="head-snowflake-outline" size={36} color="white" />
                        <Text style={styles.headerTitle}>Stresini Yönet</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <View style={styles.content}>
                    <GlassCard opacity={0.15} borderRadius={15} style={styles.subtitleCard}>
                        <Text style={styles.subtitleText}>Hangi konuda destek almak istersin?</Text>
                    </GlassCard>

                    <View style={styles.grid}>
                        {stressCategories.map((item) => (
                            <TouchableOpacity key={item.id} onPress={() => setShowYoutubeModal(true)}>
                                <GlassCard opacity={0.2} borderRadius={20} style={styles.categoryCard}>
                                    <Text style={styles.categoryLabel}>{item.label}</Text>
                                </GlassCard>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Youtube Modal Overlay */}
                <Modal
                    transparent={true}
                    visible={showYoutubeModal}
                    animationType="fade"
                    onRequestClose={() => setShowYoutubeModal(false)}
                >
                    <View style={styles.modalOverlay}>
                        <GlassCard
                            opacity={0.4}
                            borderRadius={30}
                            style={[styles.youtubeCard, { backgroundColor: 'rgba(142, 45, 226, 0.4)' }]}
                        >
                            <View style={styles.youtubeHeader}>
                                <MaterialCommunityIcons name="youtube" size={50} color="red" />
                                <Text style={styles.youtubeTitle}>YouTube</Text>
                            </View>

                            <View style={styles.dividerLight} />

                            <Text style={styles.youtubeText}>
                                Youtube uygulamasına yönlendiriliyorsun.
                            </Text>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowYoutubeModal(false);
                                        router.push('/evaluate');
                                    }}
                                >
                                    <Text style={styles.rateButtonText}>Değerlendir</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.watchButton}
                                    onPress={() => {
                                        setShowYoutubeModal(false);
                                        Linking.openURL('https://www.youtube.com');
                                    }}
                                >
                                    <View style={styles.watchButtonContent}>
                                        <Ionicons name="play-circle" size={24} color="white" />
                                        <Text style={styles.watchButtonText}>İzle</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </GlassCard>
                    </View>
                </Modal>
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
        gap: 12,
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
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    subtitleCard: {
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    subtitleText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
    categoryCard: {
        width: 140,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    youtubeCard: {
        width: '85%',
        padding: 30,
        alignItems: 'center',
    },
    youtubeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    youtubeTitle: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    dividerLight: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: '100%',
        marginVertical: 20,
    },
    youtubeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 28,
        marginBottom: 30,
    },
    modalButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    rateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
        textDecorationLine: 'none',
        opacity: 0.8,
    },
    watchButton: {
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 8,
    },
    watchButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    watchButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    }
});
