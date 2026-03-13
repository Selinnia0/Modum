import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SafetyScreen() {
    const router = useRouter();

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTitleRow}>
                        <Ionicons name="shield-checkmark" size={40} color="white" />
                        <Text style={styles.headerTitle}>Güvenlik</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <View style={styles.content}>
                    <GlassCard opacity={0.2} borderRadius={15} style={styles.subtitleCard}>
                        <Text style={styles.subtitleText}>Hangi konuda güvenlik desteği almak istersin?</Text>
                    </GlassCard>

                    <View style={styles.buttonList}>
                        <TouchableOpacity style={styles.mainBtn}>
                            <LinearGradient
                                colors={['#2193b0', '#6dd5ed']}
                                style={styles.btnInner}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={styles.btnText}>Kendimle İlgili</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mainBtn}>
                            <LinearGradient
                                colors={['#2193b0', '#6dd5ed']}
                                style={styles.btnInner}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={styles.btnText}>Başkası ile ilgili</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.mainBtn}
                            onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=tr.gov.egm.kades')}
                        >
                            <LinearGradient
                                colors={['#8E2DE2', '#4A00E0']}
                                style={styles.btnInner}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <View style={styles.kadesBtnRow}>
                                    <View style={styles.kadesIconBox}>
                                        <Ionicons name="hand-right" size={24} color="white" />
                                        <Text style={styles.kadesLabel}>KADIN{"\n"}DESTEK</Text>
                                    </View>
                                    <Text style={styles.kadesMainText}>KADES</Text>
                                </View>
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
        paddingTop: 30,
    },
    subtitleCard: {
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 40,
    },
    subtitleText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonList: {
        gap: 20,
        alignItems: 'center',
    },
    mainBtn: {
        width: '85%',
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    btnInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
    },
    kadesBtnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    kadesIconBox: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    kadesLabel: {
        color: 'white',
        fontSize: 6,
        fontWeight: 'bold',
    },
    kadesMainText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
