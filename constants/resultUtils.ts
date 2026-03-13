export const getStatusAndColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;

    if (percentage > 80) {
        return { status: "Çok Kötü", color: "#FF0000" };
    } else if (percentage > 60) {
        return { status: "Kötü", color: "#FF5555" };
    } else if (percentage > 40) {
        return { status: "Orta", color: "#FFFF55" };
    } else if (percentage > 20) {
        return { status: "İyi", color: "#55FF55" };
    } else {
        return { status: "Çok İyi", color: "#00FFFF" };
    }
};
