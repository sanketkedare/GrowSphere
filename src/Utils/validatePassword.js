import { validate_password } from "../API/apis";


const isPassValid = async (oldPass, newPass) => {
    try {
      const response = await fetch(validate_password, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enteredPassword: newPass,
          storedHash: oldPass,
        }),
      });
      const data = await response.json();
      return (data.success);
    } catch (error) {
      console.error('Error validating password:', error);
    }
  };
  

export default isPassValid;