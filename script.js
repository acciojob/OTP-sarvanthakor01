//your JS code here. If required.
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Create and insert the OTP input fields dynamically
    const body = document.querySelector('body');

    // Create the heading
    const heading = document.createElement('h1');
    heading.id = 'verification_heading';
    heading.textContent = 'Verify Your Account';
    body.appendChild(heading);

    // Create the subheading
    const subheading = document.createElement('p');
    subheading.id = 'verification_subtext';
    subheading.textContent = 'Please enter the 6-digit code sent to your email or phone.';
    body.appendChild(subheading);

    // Create the OTP container
    const otpContainer = document.createElement('div');
    otpContainer.classList.add('code-container');
    body.appendChild(otpContainer);

    // Create 6 input fields for the OTP
    for (let i = 0; i < 6; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1; // Limit input to a single digit
        input.classList.add('code');
        input.id = `code-${i + 1}`;

        // Add event listeners for each input field
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleBackspace);

        otpContainer.appendChild(input);
    }

    // Focus the first input field automatically
    document.getElementById('code-1').focus();

    // Handle input forward typing
    function handleInput(event) {
        const currentInput = event.target;
        const value = currentInput.value;

        // Ensure only digits are allowed
        if (!/\d/.test(value)) {
            currentInput.value = ''; // Clear invalid input
            return;
        }

        // Move focus to the next input field if available
        const nextInput = currentInput.nextElementSibling;
        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.focus();
        }
    }

    // Handle backspace behavior
    function handleBackspace(event) {
        const currentInput = event.target;

        if (event.key === 'Backspace') {
            // If the current input is empty, move focus to the previous input field
            if (currentInput.value === '') {
                const previousInput = currentInput.previousElementSibling;
                if (previousInput && previousInput.tagName === 'INPUT') {
                    previousInput.focus();
                    previousInput.value = ''; // Clear the value in the previous input
                }
            } else {
                // If the current input has a value, clear it
                currentInput.value = '';
            }
        }
    }
});
