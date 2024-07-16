document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;

    switch (activity) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'light':
            activityMultiplier = 1.375;
            break;
        case 'moderate':
            activityMultiplier = 1.55;
            break;
        case 'active':
            activityMultiplier = 1.725;
            break;
        case 'very_active':
            activityMultiplier = 1.9;n 
            break;
        default:
            activityMultiplier = 1.2;
    }

    const dailyCalories = bmr * activityMultiplier;
    const maintainCalories = Math.round(dailyCalories);
    const loseCalories = Math.round(dailyCalories - 500); // Aproximadamente 0.5 kg por semana
    const gainCalories = Math.round(dailyCalories + 500); // Aproximadamente 0.5 kg por semana

    document.getElementById('maintain-weight').innerText = `Calorías para mantener el peso: ${maintainCalories}`;
    document.getElementById('lose-weight').innerText = `Calorías para perder peso: ${loseCalories}`;
    document.getElementById('gain-weight').innerText = `Calorías para ganar peso: ${gainCalories}`;
});
