import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function SurveyScreen() {
    const router = useRouter();
    const [height, setHeight] = useState('');

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
                        <Ionicons name="home" size={40} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <GlassCard opacity={0.3} borderRadius={20} style={styles.questionCard}>
                        <Text style={styles.questionText}>
                            Boyunuz (Lütfen cm cinsinden belirtiniz. 180, 165 vs...)
                        </Text>
                    </GlassCard>

                    <View style={styles.inputContainer}>
                        <GlassCard opacity={0.2} borderRadius={20} style={styles.inputCard}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Lütfen bir cevap yaz"
                                placeholderTextColor="rgba(255,255,255,0.6)"
                                value={height}
                                onChangeText={setHeight}
                                keyboardType="numeric"
                            />
                        </GlassCard>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => router.back()}
                    >
                        <GlassCard opacity={0.4} borderRadius={25} style={styles.navButtonInner}>
                            <View style={styles.row}>
                                <Ionicons name="chevron-back" size={24} color="white" />
                                <Text style={styles.navButtonText}>Önceki</Text>
                            </View>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => router.push('/(tabs)/stats')}
                    >
                        <GlassCard opacity={0.4} borderRadius={25} style={styles.navButtonInner}>
                            <View style={styles.row}>
                                <Text style={styles.navButtonText}>Sonraki</Text>
                                <Ionicons name="chevron-forward" size={24} color="white" />
                            </View>
                        </GlassCard>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        paddingTop: 30,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        paddingTop: 50,
        gap: 100,
    },
    questionCard: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50, 0, 100, 0.4)', // Slightly darker base for this specific card
    },
    questionText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        fontWeight: '400',
    },
    inputContainer: {
        paddingHorizontal: 20,
    },
    inputCard: {
        height: 120,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        gap: 15,
    },
    navButton: {
        flex: 1,
    },
    navButtonInner: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    navButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }
});
