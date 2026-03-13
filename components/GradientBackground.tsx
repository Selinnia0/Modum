import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ViewProps } from 'react-native';

export const GradientBackground = ({ children }: ViewProps) => {
    return (
        <LinearGradient
            colors={['#8E2DE2', '#4A00E0', '#2193b0']}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
