
const activityLevelValue = [1.2, 1.375, 1.55, 1.725, 1.9]

function BMRMaleFormula (height, weight, age, activityLevel){
    let bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    return Math.round(bmr * activityLevelValue[activityLevel]);
}

function BMRFemaleFormula (height, weight, age, activityLevel){
    let bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    return Math.round(bmr * activityLevelValue[activityLevel]);
}

function BMRCalculator(sex, height, weight, age, activityLevel){
    if (sex === true){
        return BMRMaleFormula(height, weight, age, activityLevel);
    }

    return BMRFemaleFormula(height, weight, age, activityLevel);
}

