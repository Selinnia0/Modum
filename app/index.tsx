import React, { useState } from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { GradientBackground } from '@/components/GradientBackground';
import { GlassCard } from '@/components/GlassCard';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const router = useRouter();
  const [studentNo, setStudentNo] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Erkek');
  const [infoVisible, setInfoVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = () => {
    if (!/^\d{6}$/.test(studentNo)) {
      setErrorMessage('Öğrenci numarası 6 haneli bir sayı olmalıdır.');
      setErrorVisible(true);
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 3 || ageNum > 100) {
      setErrorMessage('Yaş 3 ile 100 arasında bir sayı olmalıdır.');
      setErrorVisible(true);
      return;
    }

    router.replace('/(tabs)');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoTextMain}>M</Text>
            <View style={styles.logoCircleSmall}>
              <View style={styles.leafIconBg}>
                <Ionicons name="leaf" size={24} color="white" />
              </View>
            </View>
            <Text style={styles.logoTextMain}>D</Text>
            <View style={styles.logoDoubleEmoji}>
              <View style={styles.emojiCircleYellow}>
                <Text style={styles.emojiMini}>😊</Text>
              </View>
              <View style={styles.emojiCircleOrange}>
                <Text style={styles.emojiMini}>😐</Text>
              </View>
            </View>
            <Text style={styles.logoTextMain}>M</Text>
          </View>

          <View style={styles.form}>
            <GlassCard style={styles.inputContainer} opacity={0.3} borderRadius={25}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Öğrenci No :</Text>
                <TextInput
                  style={styles.input}
                  value={studentNo}
                  onChangeText={setStudentNo}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="numeric"
                  maxLength={6}
                />
                <TouchableOpacity
                  style={styles.infoIconWrapper}
                  onPress={() => setInfoVisible(true)}
                >
                  <Ionicons name="information" size={24} color="#4A00E0" />
                </TouchableOpacity>
              </View>
            </GlassCard>

            <GlassCard style={styles.inputContainer} opacity={0.3} borderRadius={25}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Yaş :</Text>
                <TextInput
                  style={styles.input}
                  value={age}
                  onChangeText={setAge}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="numeric"
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.inputContainer} opacity={0.3} borderRadius={25}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Cinsiyet :</Text>
                <TouchableOpacity
                  style={[
                    styles.togglePillGender,
                    { justifyContent: gender === 'Erkek' ? 'flex-end' : 'flex-start' },
                  ]}
                  onPress={() => setGender(gender === 'Erkek' ? 'Kadın' : 'Erkek')}
                >
                  <View style={styles.togglePillTextContainerGender}>
                    <Text style={styles.togglePillTextGender}>{gender}</Text>
                  </View>
                  <View style={styles.toggleCircle} />
                </TouchableOpacity>
              </View>
            </GlassCard>

            <TouchableOpacity style={styles.kvkkLink}>
              <MaterialCommunityIcons name="format-list-bulleted" size={18} color="white" />
              <Text style={styles.kvkkText}>KVKK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButtonWrapper} onPress={onLogin}>
              <GlassCard style={styles.loginButtonGlass} opacity={0.3} borderRadius={25}>
                <Text style={styles.loginButtonText}>GİRİŞ</Text>
              </GlassCard>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <View style={styles.uniBox}>
              <View style={styles.footerLogoCircle}>
                <Ionicons name="leaf" size={14} color="white" />
              </View>
            </View>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={infoVisible}
          onRequestClose={() => setInfoVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setInfoVisible(false)}
          >
            <View style={styles.modalContent}>
              <Text style={styles.logoTextSmall}>MODUM</Text>

              <GlassCard style={styles.infoBox} opacity={0.5} borderRadius={20}>
                <View style={styles.infoHeader}>
                  <Ionicons name="alert-circle-outline" size={32} color="white" />
                  <Text style={styles.infoText}>
                    Bu, anonim olarak kullanacağınız bir uygulamadır. Bu sebepten dolayı biz
                    öğrenci numaranızın son 3 hanesine ihtiyaç duymuyoruz.
                  </Text>
                </View>
              </GlassCard>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={errorVisible}
          onRequestClose={() => setErrorVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <LinearGradient
              colors={['#BA2CB6', '#00C6FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.errorModalContent}
            >
              <Ionicons name="warning" size={40} color="white" style={{ marginBottom: 15 }} />
              <Text style={styles.errorHeaderText}>Giriş Yapılamadı</Text>
              <Text style={styles.errorText}>{errorMessage}</Text>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setErrorVisible(false)}
              >
                <GlassCard opacity={0.3} borderRadius={25} style={styles.modalButtonInner}>
                  <Text style={styles.modalButtonText}>Tamam</Text>
                </GlassCard>
              </TouchableOpacity>
            </LinearGradient>
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
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingVertical: 50,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoTextMain: {
    fontSize: 64,
    color: 'white',
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif-light',
  },
  logoCircleSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  leafIconBg: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoDoubleEmoji: {
    marginHorizontal: 4,
    alignItems: 'center',
  },
  emojiCircleYellow: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 2,
  },
  emojiCircleOrange: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: -4,
  },
  emojiMini: {
    fontSize: 14,
  },
  form: {
    width: '100%',
    gap: 15,
  },
  inputContainer: {
    height: 70,
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif-light',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 15,
    fontWeight: '400',
    textAlign: 'left',
  },
  infoIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  togglePillGender: {
    backgroundColor: 'rgba(50, 0, 100, 0.4)',
    borderRadius: 20,
    height: 40,
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  togglePillTextContainerGender: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  togglePillTextGender: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  kvkkLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 5,
  },
  kvkkText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
  loginButtonWrapper: {
    marginTop: 30,
    height: 90,
  },
  loginButtonGlass: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  loginButtonText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4A00E0',
    letterSpacing: 10,
    opacity: 0.8,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  uniBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerLogoCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    alignItems: 'center',
  },
  logoTextSmall: {
    fontSize: 40,
    color: 'white',
    letterSpacing: 8,
    marginBottom: 30,
  },
  infoBox: {
    padding: 24,
    width: '100%',
  },
  infoHeader: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    color: 'white',
    lineHeight: 20,
    fontSize: 14,
  },
  errorModalContent: {
    width: '75%',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  errorHeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
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
  },
});