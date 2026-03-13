import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EvaluateScreen() {
    const router = useRouter();
    const [rating, setRating] = useState(3);
    const [comment, setComment] = useState('');

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                    <Ionicons
                        name={i <= rating ? "star" : "star-outline"}
                        size={32}
                        color="#FFD700"
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <MaterialCommunityIcons name="comment-text-outline" size={36} color="white" />
                        <Text style={styles.headerTitle}>Değerlendir</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Bu videoyu nasıl buldunuz?</Text>

                    <View style={styles.starsContainer}>
                        {renderStars()}
                    </View>

                    <GlassCard
                        opacity={0.2}
                        borderRadius={15}
                        style={styles.inputCard}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder="Yorum yap..."
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            multiline
                            value={comment}
                            onChangeText={setComment}
                        />
                    </GlassCard>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => router.back()}
                    >
                        <LinearGradient
                            colors={['#8E2DE2', '#FF00FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonGradient}
                        >
                            <Text style={styles.submitButtonText}>Gönder</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        paddingHorizontal: 30,
        paddingTop: 50,
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 50,
    },
    inputCard: {
        width: '100%',
        height: 200,
        padding: 15,
        marginBottom: 40,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    textInput: {
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'top',
        height: '100%',
    },
    submitButton: {
        width: 180,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
    },
    buttonGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'normal',
    }
});
