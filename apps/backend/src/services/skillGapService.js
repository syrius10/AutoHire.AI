import { pipeline } from "@huggingface/transformers";


// Load NLP model for skill extraction
const resumeParser = pipeline(
  "ner",
  "dbmdz/bert-large-cased-finetuned-conll03-english",
);

// List of common job skills for validation
const jobSkills = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Machine Learning",
  "Data Science",
  "SQL",
  "Java",
  "AWS",
  "Docker",
  "Kubernetes",
  "Communication",
  "Leadership",
  "Problem-Solving",
];

/**
 * Extracts structured skills from a given resume text using NLP.
 */
export const analyzeResumeSkills = async (resumeText) => {
  try {
    // Perform Named Entity Recognition (NER) to extract entities
    const entities = await resumeParser(resumeText);

    // Extract skills from detected entities
    const extractedSkills = entities
      .map((ent) => ent.word)
      .filter((skill) => jobSkills.includes(skill));

    // Deduplicate skills list
    const uniqueSkills = [...new Set(extractedSkills)];

    return uniqueSkills;
  } catch (error) {
    console.error("Error analyzing resume skills:", error);
    return [];
  }
};

/**
 * Calculates the skill gap between job requirements and a candidate's extracted skills.
 */
export const calculateSkillGap = (requiredSkills, candidateSkills) => {
  const missingSkills = requiredSkills.filter(
    (skill) => !candidateSkills.includes(skill),
  );
  const gapScore = (missingSkills.length / requiredSkills.length) * 100;

  return { missingSkills, gapScore: Math.round(gapScore) };
};
