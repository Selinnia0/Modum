import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from './GlassCard';

interface EmojiCardProps {
    emoji: string;
    label: string;
    onPress?: () => void;
    selected?: boolean;
    percentage?: string | null;
}

export const EmojiCard: React.FC<EmojiCardProps> = ({ emoji, label, onPress, selected, percentage }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <GlassCard
                style={[styles.card, selected && styles.selectedCard]}
                opacity={selected ? 0.5 : 0.25}
                borderRadius={25}
            >
                <View style={styles.topRow}>
                    <Text style={styles.emojiText}>{emoji}</Text>
                    {percentage && (
                        <Text style={styles.percentageText}>{percentage}</Text>
                    )}
                </View>
                <Text style={styles.label}>{label}</Text>
            </GlassCard>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 105,
        height: 105,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },
    selectedCard: {
        borderColor: 'white',
        borderWidth: 2,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    emojiText: {
        fontSize: 40,
    },
    percentageText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
});
