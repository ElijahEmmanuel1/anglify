
import { toeicLessons } from './src/data/toeicData.js';

console.log("Verifying TOEIC Data...");

let errors = 0;

Object.values(toeicLessons).forEach(lesson => {
    lesson.exercises.forEach((ex, i) => {
        // Check answer bounds
        if (ex.answer < 0 || ex.answer >= ex.statements.length) {
            console.error(`Error in ${lesson.id} Q${i + 1}: Answer index ${ex.answer} out of bounds (options: ${ex.statements.length})`);
            errors++;
        }

        // Check image presence
        if (!ex.image || !ex.image.includes('images.unsplash.com')) {
            console.error(`Error in ${lesson.id} Q${i + 1}: Invalid image URL`);
            errors++;
        }

        // Check content consistency (simple heuristic)
        const correctText = ex.statements[ex.answer];
        if (!correctText) {
            console.error(`Error in ${lesson.id} Q${i + 1}: Correct text undefined`);
            errors++;
        }
    });
});

if (errors === 0) {
    console.log("Data structure verification passed.");
} else {
    console.log(`Found ${errors} errors.`);
}
