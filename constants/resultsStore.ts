export interface Result {
    id: number;
    category: string;
    score: number;
    maxScore: number;
    status: string;
    date: string;
    color: string;
}

class ResultsStore {
    private history: Result[] = [];

    addResult(result: Omit<Result, 'id'>) {
        const newResult = {
            ...result,
            id: Date.now()
        };
        // Add to the beginning of the list to show newest first
        this.history = [newResult, ...this.history];
    }

    getHistory() {
        return this.history;
    }
}

export const resultsStore = new ResultsStore();
