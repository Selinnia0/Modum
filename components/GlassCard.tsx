import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface GlassCardProps extends ViewProps {
    opacity?: number;
    borderRadius?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style, opacity = 0.2, borderRadius = 20, ...props }) => {
    return (
        <View
            style={[
                styles.card,
                { backgroundColor: `rgba(255, 255, 255, ${opacity})`, borderRadius },
                style
            ]}
            {...props}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
});
