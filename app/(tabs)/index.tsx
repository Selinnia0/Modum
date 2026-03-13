import { EmojiCard } from '@/components/EmojiCard';
import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const MOODS = [
  { emoji: '😊', label: 'Neşeliyim' },
  { emoji: '😔', label: 'Üzgünüm' },
  { emoji: '😐', label: 'Kaygılıyım' },
  { emoji: '🤩', label: 'Coşkuluyum' },
  { emoji: '😠', label: 'Kızgınım' },
  { emoji: '😳', label: 'Şaşkınım' },
  { emoji: '🤢', label: 'Tiksiniyorum' },
  { emoji: '🙈', label: 'Utanıyorum' },
  { emoji: '😱', label: 'Korkuyorum' },
];

export default function MoodSelectScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    router.push('/survey');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerSmall}>
            Duygularınızı emoji ile ifade edebileceğiniz bölümümüz...
          </Text>

          <View style={styles.titleContainer}>
            <Text style={styles.heyText}>Heyyy!</Text>
            <Text style={styles.todayText}>Bugün nasılsın?</Text>
          </View>

          <View style={styles.grid}>
            {MOODS.map((mood) => (
              <EmojiCard
                key={mood.label}
                emoji={mood.emoji}
                label={mood.label}
                onPress={() => setSelectedMood(mood.label)}
                selected={selectedMood === mood.label}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => router.push('/wellbeing')}
          >
            <GlassCard style={styles.assessmentCard} opacity={0.3} borderRadius={20}>
              <Text style={styles.assessmentText}>İyi misin? Değerlendirelim mi?</Text>
            </GlassCard>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <LinearGradient
              colors={['#FF00FF', '#8E2DE2']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.nextButtonText}>Sonraki</Text>
            </LinearGradient>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
    paddingBottom: 100, // For tab bar
  },
  headerSmall: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
  titleContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  heyText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  todayText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'normal',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  assessmentCard: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  assessmentText: {
    color: 'white',
    fontSize: 18,
    opacity: 0.9,
  },
  nextButton: {
    marginTop: 30,
    width: 180,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
