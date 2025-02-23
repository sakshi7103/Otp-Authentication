let generatedOtp = '';

        // generate OTP 
        function generateOTP(length) {
            let otp = '';
            const characters = '0123456789';
            for (let i = 0; i < length; i++) {
                otp += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return otp;
        }

            document.getElementById('generateOtp').addEventListener('click', function() {
            // Generate OTP and display success message
            generatedOtp = generateOTP(6);  // Generate 6-digit OTP
            console.log('Generated OTP: ', generatedOtp); 

            // Display OTP on the page
            document.getElementById('otpDisplay').innerText = `Generated OTP: ${generatedOtp}`;

            document.getElementById('message').innerText = 'OTP Generated Successfully';
            document.getElementById('message').classList.remove('error');
            document.getElementById('message').classList.add('success');

            // Show OTP input section and disable generate button
            document.getElementById('otpSection').style.display = 'block';
            document.getElementById('generateOtp').disabled = true;
        });

        document.getElementById('verifyOtp').addEventListener('click', function() {
            const enteredOtp = document.getElementById('otpInput').value;

            if (enteredOtp === generatedOtp) {
                document.getElementById('message').innerText = 'OTP Verified Successfully';
                document.getElementById('message').classList.remove('error');
                document.getElementById('message').classList.add('success');
            } else {
                document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
                document.getElementById('message').classList.remove('success');
                document.getElementById('message').classList.add('error');
            }
        });