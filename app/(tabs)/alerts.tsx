import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ComplaintsScreen() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTitleRow}>
                        <MaterialCommunityIcons name="pencil" size={40} color="white" />
                        <Text style={styles.headerTitle}>Şikayet / Öneri</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <View style={styles.content}>
                    <GlassCard
                        opacity={0.15}
                        borderRadius={15}
                        style={[styles.subtitleCard, { backgroundColor: 'rgba(0,0,0,0.1)' }]}
                    >
                        <Text style={styles.subtitleText}>Hangi kısım ile ilgili şikayetin var?</Text>
                    </GlassCard>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.largeButton}>
                            <LinearGradient
                                colors={['#A7C7E7', '#8E2DE2', '#FF00FF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0.5 }}
                                style={styles.buttonGradient}
                            >
                                <Ionicons name="business" size={40} color="white" />
                                <Text style={styles.buttonText}>Kampüs İçi</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.largeButton}>
                            <LinearGradient
                                colors={['#A7C7E7', '#8E2DE2', '#FF00FF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0.5 }}
                                style={styles.buttonGradient}
                            >
                                <MaterialCommunityIcons name="office-building-marker-outline" size={40} color="white" />
                                <Text style={styles.buttonText}>Kampüs Dışı</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
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
        paddingTop: 40,
        alignItems: 'center',
    },
    subtitleCard: {
        paddingVertical: 18,
        width: '100%',
        alignItems: 'center',
        marginBottom: 60,
    },
    subtitleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        gap: 30,
        alignItems: 'center',
    },
    largeButton: {
        width: '80%',
        height: 90,
        borderRadius: 45,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    buttonGradient: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
    }
});
