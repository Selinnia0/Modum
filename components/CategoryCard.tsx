import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from './GlassCard';

interface CategoryCardProps {
    iconName: string;
    iconFamily: 'MaterialCommunityIcons' | 'FontAwesome5' | 'Ionicons';
    label: string;
    onPress: () => void;
    size?: 'small' | 'large';
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ iconName, iconFamily, label, onPress, size = 'small' }) => {
    const renderIcon = () => {
        const IconProps = { name: iconName as any, size: size === 'small' ? 32 : 40, color: 'white' };
        if (iconFamily === 'MaterialCommunityIcons') return <MaterialCommunityIcons {...IconProps} />;
        if (iconFamily === 'FontAwesome5') return <FontAwesome5 {...IconProps} />;
        return <Ionicons {...IconProps} />;
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <GlassCard
                opacity={0.3}
                borderRadius={25}
                style={[styles.card, size === 'large' ? styles.largeCard : styles.smallCard]}
            >
                <View style={styles.iconContainer}>
                    {renderIcon()}
                </View>
                <Text style={styles.label}>{label}</Text>
            </GlassCard>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },
    smallCard: {
        width: 105,
        height: 105,
    },
    largeCard: {
        width: 140,
        height: 140,
    },
    iconContainer: {
        marginBottom: 8,
    },
    label: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
    },
});
