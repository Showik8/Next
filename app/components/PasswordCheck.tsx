function CheckPasswordStrength(password:string)  {
    let strength = 0;

    // Criteria for strength
    const lengthCriteria = /(?=.{8,})/; // At least 8 characters
    const lowercaseCriteria = /(?=.*[a-z])/; // At least one lowercase letter
    const uppercaseCriteria = /(?=.*[A-Z])/; // At least one uppercase letter
    const digitCriteria = /(?=.*\d)/; // At least one digit
    const specialCharCriteria = /(?=.*[@$!%*?&])/; // At least one special character

    // Evaluate password strength
    if (lengthCriteria.test(password)) strength++;
    if (lowercaseCriteria.test(password)) strength++;
    if (uppercaseCriteria.test(password)) strength++;
    if (digitCriteria.test(password)) strength++;
    if (specialCharCriteria.test(password)) strength++;

    // Determine password strength
    switch (strength) {
        case 5:
            return 'Very Strong';
        case 4:
            return 'Strong';
        case 3:
            return 'Moderate';
        case 2:
            return 'Weak';
        default:
            return 'Very Weak';
    }
}


export default CheckPasswordStrength