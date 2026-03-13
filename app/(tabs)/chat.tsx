import { GlassCard } from '@/components/GlassCard';
import { GradientBackground } from '@/components/GradientBackground';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Linking, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function ChatScreen() {
    const router = useRouter();
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Selam, iyi günler.', type: 'outgoing' },
        { id: '2', text: 'Teşekkürler, nasıl yardımcı olabiliriz?', type: 'incoming' },
        { id: '3', text: 'Kampüse otobüs gelmiyor.', type: 'outgoing' },
        { id: '4', text: 'Ne kadarlık bir süreden bahsediyorsunuz?', type: 'incoming' },
    ]);

    const handleSend = () => {
        if (inputText.trim() === '') return;

        const userMsg = {
            id: Date.now().toString(),
            text: inputText,
            type: 'outgoing'
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        // Auto-reply after a short delay
        setTimeout(() => {
            const replyMsg = {
                id: (Date.now() + 1).toString(),
                text: 'servis şu anda hizmet verememektedir.',
                type: 'incoming'
            };
            setMessages(prev => [...prev, replyMsg]);
        }, 1000);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#2193b0', '#6dd5ed']}
                        style={styles.headerInner}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Bize Yazın</Text>
                        <Ionicons name="chatbubble-outline" size={24} color="white" />
                    </LinearGradient>

                    <TouchableOpacity
                        style={styles.whatsappButton}
                        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.whatsapp')}
                    >
                        <LinearGradient
                            colors={['#8E2DE2', '#4A00E0']}
                            style={styles.whatsappInner}
                        >
                            <FontAwesome name="whatsapp" size={36} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent}>
                    {messages.map((msg) => (
                        <View key={msg.id} style={[styles.messageRow, msg.type === 'incoming' ? styles.incomingRow : styles.outgoingRow]}>
                            <GlassCard
                                opacity={msg.type === 'incoming' ? 0.3 : 0.5}
                                borderRadius={20}
                                style={[styles.messageBubble, msg.type === 'incoming' ? styles.incomingBubble : styles.outgoingBubble]}
                            >
                                <Text style={styles.messageText}>{msg.text}</Text>
                            </GlassCard>
                        </View>
                    ))}
                </ScrollView>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={100}
                >
                    <View style={styles.inputArea}>
                        <GlassCard opacity={0.3} borderRadius={25} style={styles.inputCard}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Mesaj yaz..."
                                placeholderTextColor="rgba(255,255,255,0.6)"
                                value={inputText}
                                onChangeText={setInputText}
                                onSubmitEditing={handleSend}
                            />
                        </GlassCard>
                        <View style={styles.actionButtons}>
                            <TouchableOpacity style={styles.cameraBtn}>
                                <Ionicons name="camera-outline" size={32} color="#4A00E0" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
                                <Ionicons name="send" size={32} color="#4A00E0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
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
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 15,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    backButton: {
        padding: 5,
    },
    whatsappButton: {
        width: 60,
        height: 60,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 5,
    },
    whatsappInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatArea: {
        flex: 1,
        marginTop: 20,
    },
    chatContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    messageRow: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
    },
    incomingRow: {
        justifyContent: 'flex-start',
    },
    outgoingRow: {
        justifyContent: 'flex-end',
    },
    messageBubble: {
        maxWidth: '80%',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    incomingBubble: {
        borderTopLeftRadius: 5,
    },
    outgoingBubble: {
        borderTopRightRadius: 5,
    },
    messageText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 22,
    },
    inputArea: {
        paddingHorizontal: 20,
        paddingBottom: 110, // Margin from tab bar
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    inputCard: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        color: 'white',
        fontSize: 16,
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    cameraBtn: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBtn: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
