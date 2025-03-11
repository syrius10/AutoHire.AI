import { calculateSkillGap } from "../src/services/skillGapService";

test("calculates skill gap correctly", () => {
  const requiredSkills = ["JavaScript", "React", "Node.js"];
  const candidateSkills = ["JavaScript", "Node.js"];

  const result = calculateSkillGap(requiredSkills, candidateSkills);
  expect(result.missingSkills).toContain("React");
  expect(result.gapScore).toBe(33);
});
