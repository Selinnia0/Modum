import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, Stop, LinearGradient as SvgGradient } from 'react-native-svg';

interface ProgressCircleProps {
    progress: number; // 0 to 1
    time: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress, time }) => {
    const size = 180;
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress * circumference;

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <Defs>
                    <SvgGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#2193b0" />
                        <Stop offset="100%" stopColor="#6dd5ed" />
                    </SvgGradient>
                </Defs>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress Circle Arc (Simplification) */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#grad)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>

            <View style={styles.content}>
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 220,
        height: 220,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 110,
        padding: 10,
    },
    content: {
        position: 'absolute',
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    timeText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
