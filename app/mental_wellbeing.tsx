import { CategoryCard } from '@/components/CategoryCard';
import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MentalWellbeingScreen() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
        setModalVisible(true);
    };

    const startTest = () => {
        setModalVisible(false);
        if (selectedCategory) {
            router.push({ pathname: '/questionnaire', params: { category: selectedCategory } });
        }
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <LinearGradient
                            colors={['#BA2CB6', '#00C6FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.modalContent}
                        >
                            <Text style={styles.modalText}>
                                Bu anketin sonunda 5 farklı sonuç alacaksın.
                            </Text>
                            <TouchableOpacity style={styles.modalButton} onPress={startTest}>
                                <GlassCard opacity={0.3} borderRadius={25} style={styles.modalButtonInner}>
                                    <Text style={styles.modalButtonText}>Tamam</Text>
                                </GlassCard>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </Modal>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>

                    <View style={styles.headerTitleRow}>
                        <Ionicons name="settings" size={30} color="lightgrey" />
                        <Text style={styles.headerTitle}>Ruhsal İyi Oluş</Text>
                    </View>
                    <View style={styles.divider} />
                </View>

                <ScrollView style={styles.content} contentContainerStyle={styles.scrollArea}>
                    <GlassCard opacity={0.2} borderRadius={15} style={styles.subtitleCard}>
                        <Text style={styles.subtitleText}>Hangi konuda destek almak istersin?</Text>
                    </GlassCard>

                    <View style={styles.grid}>
                        <CategoryCard
                            iconName="brain"
                            iconFamily="MaterialCommunityIcons"
                            label="Anksiyete\nDepresyon"
                            onPress={() => handleCategoryPress('Anksiyete\nDepresyon')}
                        />

                        <View style={styles.row}>
                            <CategoryCard
                                iconName="head-alert-outline"
                                iconFamily="MaterialCommunityIcons"
                                label="Bağımlılık"
                                onPress={() => handleCategoryPress('Bağımlılık')}
                            />

                            <CategoryCard
                                iconName="medical-bag"
                                iconFamily="MaterialCommunityIcons"
                                label="Genel\nSağlık"
                                onPress={() => handleCategoryPress('Genel Sağlık')}
                            />

                            <CategoryCard
                                iconName="account-group"
                                iconFamily="MaterialCommunityIcons"
                                label="Partner\nŞiddeti"
                                onPress={() => handleCategoryPress('Partner Şiddeti')}
                            />
                        </View>

                        <View style={styles.row}>
                            <CategoryCard
                                iconName="food-variant"
                                iconFamily="MaterialCommunityIcons"
                                label="Yeme\nBozukluğu"
                                onPress={() => handleCategoryPress('Yeme Bozukluğu')}
                            />

                            <CategoryCard
                                iconName="bed-outline"
                                iconFamily="MaterialCommunityIcons"
                                label="Uyku\nBozukluğu"
                                onPress={() => handleCategoryPress('Uyku Bozukluğu')}
                            />

                            <CategoryCard
                                iconName="gender-male-female"
                                iconFamily="MaterialCommunityIcons"
                                label="Diğer"
                                onPress={() => handleCategoryPress('Diğer')}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/results')}>
                        <GlassCard opacity={0.3} borderRadius={25} style={styles.buttonInner}>
                            <Text style={styles.buttonTextSmall}>Sonuçlarım</Text>
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
        fontSize: 24,
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
        gap: 5,
        width: '100%',
    },
    bottomButton: {
        width: 150,
        marginTop: 40,
    },
    buttonInner: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    buttonTextSmall: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '70%',
        borderRadius: 25,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    modalText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 24,
        marginBottom: 20,
    },
    modalButton: {
        width: '70%',
    },
    modalButtonInner: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    }
});
