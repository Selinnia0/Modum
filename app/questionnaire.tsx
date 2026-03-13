import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { resultsStore } from '../constants/resultsStore';
import { getStatusAndColor } from '../constants/resultUtils';

const { width } = Dimensions.get('window');

const OPTIONS = [
    "Kesin Katılmıyor",
    "Katılmıyor",
    "Kararsız",
    "Katılıyor",
    "Kesin Katılıyor"
];

const QUESTIONS_DATA: Record<string, string[]> = {
    "Anksiyete\nDepresyon": [
        "Kendimi sık sık endişeli ve huzursuz hissederim.",
        "Gelecek hakkında karamsar düşüncelerim var.",
        "Daha önce keyif aldığım etkinliklere karşı ilgimi kaybettim.",
        "Konsantre olmakta veya karar vermekte güçlük çekiyorum.",
        "Kendimi çoğu zaman yorgun ve enerjisiz hissediyorum."
    ],
    "Bağımlılık": [
        "Zararlı olduğunu bilsem de bazı alışkanlıklarımı bırakamıyorum.",
        "Belirli bir madde/davranış olmadan kendimi eksik hissediyorum.",
        "Alışkanlıklarım sosyal ilişkilerimi olumsuz etkiliyor.",
        "Kontrolü kaybettiğimi hissettiğim anlar oluyor.",
        "Bırakmaya çalışsam da tekrar aynı döngüye giriyorum."
    ],
    "Genel Sağlık": [
        "Genel fiziksel sağlığımın iyi olduğunu düşünüyorum.",
        "Düzenli olarak egzersiz yapmaya çalışırım.",
        "Beslenme alışkanlıklarımın dengeli olduğunu söyleyebilirim.",
        "Vücudumdaki ağrılar günlük yaşamımı kısıtlıyor.",
        "Kendimi fiziksel olarak zinde ve güçlü hissediyorum."
    ],
    "Partner Şiddeti": [
        "Partnerimle ilişkide kendimi güvende hissediyorum.",
        "Partnerimin kısıtlamaları özgürlüğümü engelliyor.",
        "Zaman zaman partnerimden korktuğumu hissediyorum.",
        "Tartışmalarda kendimi baskı altında hissediyorum.",
        "İlişkide duygusal sınırlarımın ihlal edildiğini düşünüyorum."
    ],
    "Yeme Bozukluğu": [
        "Yemek yeme alışkanlıklarım üzerinde kontrolüm var.",
        "Görünümümle ilgili aşırı endişe duyuyorum.",
        "Duygusal anlarımda yemek yemeyi bir kaçış olarak görüyorum.",
        "Yemek yedikten sonra sık sık suçluluk hissediyorum.",
        "Aç olmasam bile aşırı miktarda yemek yediğim oluyor."
    ],
    "Uyku Bozukluğu": [
        "Geceleri uykuya dalmakta güçlük çekiyorum.",
        "Sabahları uyandığımda kendimi dinlenmiş hissetmiyorum.",
        "Uyku düzenim günlük verimliliğimi etkiliyor.",
        "Geceleri sık sık uyanıyor ve geri uyuyamıyorum.",
        "Gündüzleri aşırı uykulu olduğumu hissediyorum."
    ],
    "Diğer": [
        "Yaşam kalitemden genel olarak memnunum.",
        "Stresle başa çıkma yöntemlerim etkilidir.",
        "Sosyal çevremden yeterli desteği alıyorum.",
        "Kendimi kişisel gelişimime adanmış hissediyorum.",
        "Hayatımda gerçekleştirmek istediğim net hedeflerim var."
    ]
};

export default function QuestionnaireScreen() {
    const router = useRouter();
    const { category } = useLocalSearchParams<{ category: string }>();

    // Default to 'Diğer' if category is missing or not found
    const currentCategory = category || 'Diğer';
    const questions = QUESTIONS_DATA[currentCategory] || QUESTIONS_DATA['Diğer'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));

    const selectedOption = answers[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    const handleOptionSelect = (optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Calculate score or just go to results
            const totalScore = answers.reduce((acc, curr) => acc + (curr + 1), 0);
            const maxScore = questions.length * 5;
            const { status, color } = getStatusAndColor(totalScore, maxScore);

            resultsStore.addResult({
                category: currentCategory,
                score: totalScore,
                maxScore: maxScore,
                status: status,
                color: color,
                date: new Date().toLocaleDateString('tr-TR')
            });

            router.push({
                pathname: '/results',
                params: {
                    score: totalScore,
                    maxScore: maxScore,
                    category: currentCategory
                }
            });
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            router.back();
        }
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.homeBtn}>
                        <Ionicons name="home" size={40} color="white" />
                    </TouchableOpacity>

                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                        </View>
                    </View>
                </View>

                <Text style={styles.progressText}>{currentIndex + 1} / {questions.length}</Text>

                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <GlassCard opacity={0.4} borderRadius={20} style={styles.questionCard}>
                        <Text style={styles.questionText}>
                            {questions[currentIndex]}
                        </Text>
                    </GlassCard>

                    <View style={styles.optionsArea}>
                        {OPTIONS.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.optionRow}
                                onPress={() => handleOptionSelect(index)}
                            >
                                <GlassCard
                                    opacity={selectedOption === index ? 0.6 : 0.2}
                                    borderRadius={25}
                                    style={styles.optionInner}
                                >
                                    <Text style={styles.optionText}>{option}</Text>
                                    <View style={[styles.radioButton, selectedOption === index && styles.radioActive]} />
                                </GlassCard>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={handleBack}
                    >
                        <GlassCard opacity={0.4} borderRadius={25} style={styles.navButtonInner}>
                            <View style={styles.row}>
                                <Ionicons name="chevron-back" size={24} color="white" />
                                <Text style={styles.navButtonText}>Önceki</Text>
                            </View>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.navButton, selectedOption === -1 && { opacity: 0.5 }]}
                        onPress={handleNext}
                        disabled={selectedOption === -1}
                    >
                        <GlassCard opacity={0.4} borderRadius={25} style={styles.navButtonInner}>
                            <View style={styles.row}>
                                <Text style={styles.navButtonText}>
                                    {currentIndex === questions.length - 1 ? 'Bitir' : 'Sonraki'}
                                </Text>
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
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    homeBtn: {
        padding: 5,
    },
    progressBarContainer: {
        flex: 1,
        height: 15,
    },
    progressBarBg: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00FFFF', // Cyan color for progress
        borderRadius: 8,
    },
    progressText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '300',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 30,
        paddingBottom: 20, // Space before footer
    },
    questionCard: {
        paddingVertical: 30,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(74, 0, 224, 0.4)',
    },
    questionText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: '400',
    },
    optionsArea: {
        marginTop: 30,
        gap: 12,
    },
    optionRow: {
        width: '100%',
    },
    optionInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    optionText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },
    radioButton: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: 'white',
    },
    radioActive: {
        backgroundColor: 'white',
        borderWidth: 6,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        marginTop: 20,
        gap: 15,
    },
    navButton: {
        flex: 1,
    },
    navButtonInner: {
        alignItems: 'center',
        paddingVertical: 14,
    },
    navButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }
});
