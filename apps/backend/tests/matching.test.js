import { refineJobMatch } from "../src/services/hiringDataService";

test("AI match score improves with historical hiring data", async () => {
    const candidateId = 123;
    const initialScore = 75;

    const refinedScore = await refineJobMatch(candidateId, initialScore);
    expect(refinedScore).toBeGreaterThanOrEqual(75);
});