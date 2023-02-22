// Importing necessary dependencies
import { apiPost, apiGet, apiGetWithoutData, apiPatch } from '../utils/axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Creating the data context for the application
export const DataContext = createContext();

// Data provider component that wraps the entire application
const DataProvider = ({ children }) => {
  // Hook to navigate between pages
  const navigate = useNavigate();

  // State to store the user profile information
  const [userProfile, setUserProfile] = useState({});

//********************* REGISTRATION  ************************* */ 
const register = async (formdata) => {
    try {
      const registerData = {
        fullName: formdata.fullName,
        email: formdata.email,
        phone: formdata.phone,
        password: formdata.password,
        interest: formdata.interest,
        userName: formdata.userName,
        confirm_password: formdata.confirm_password,
      };

      // Logging the registration data for debugging purposes
      console.log(registerData);

      // Making a POST request to register the user
      await apiPost('/api/user/signup', registerData).then((res) => {
        // Displaying success message upon successful registration
        toast.success(res.data.Message);

        // Saving the signature to local storage
        localStorage.setItem('signature', res.data.signature);
      });

      // Navigating to the account verification page
      navigate('/account-verification');
    } catch (err) {
      // Displaying error message upon unsuccessful registration
      toast.error(err.response.data.Error);
    }
  };

//********************* LOGIN  ************************* */ 
const login = async (formdata) => {
    try {
      const loginData = {
        email: formdata.email,
        password: formdata.password,
      };

      // Making a POST request to log in the user
      await apiPost('/api/user/login', loginData).then((res) => {
        // Displaying success message upon successful login
        toast.success(res.data.Message);

        // Saving the necessary user information to local storage
        localStorage.setItem('signature', res.data.signature);
        localStorage.setItem('user', res.data.userName);
        localStorage.setItem('verified', res.data.verified);
      });

      // Redirecting to the home page after a delay
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    } catch (err) {
      // Displaying error message upon unsuccessful login
      toast.error(err.response.data.Error);
    }
  };

  /*========================  OTP VERIFICATION  ===================*/

  // Function to handle OTP verification
  const OTPConfig = async (formData, signature) => {
    try {
      const OTPData = {
        otp: formData,
      };

      // Making a POST request to verify the OTP
      await apiPost(`/api/user/verify/${signature}`, OTPData).then((res) => {
        // Logging the verification response for debugging purposes
        console.log(res.data);

        // Displaying success message upon successful OTP verification
        toast.success(res.data.Message);

        // Redirecting to the login page after a delay
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      });
    } catch (err) {
      // Displaying error message upon unsuccessful OTP verification
      toast.error(err.response.data.Error);
    }
  };

 /*========================  RESEND OTP ===================*/
const ResendOTPConfig = async (signature) => {
  try {
    // Make an API call to resend the OTP using the provided signature
    await apiGet(`/api/user/resend-otp/${signature}`).then((res) => {
      // Display a success message using the response data
      toast.success(res.data.Message);

      // Redirect the user to the account verification page after 2 seconds
      setTimeout(() => {
        window.location.href = '/account-verification';
      }, 2000);
    });
  } catch (err) {
    // Display an error message using the response data if the API call fails
    toast.error(err.response.data.Error);
  }
};

/*========================  FORGOT PASSWORD  ===================*/
const ForgotPasswordConfig = async (formData) => {
  try {
    const EmailData = formData;

    // Make an API call to request a password reset using the provided email data
    await apiPost(`/api/user/forgot-password`, EmailData).then((res) => {
      // Display a success message using the response data
      toast.success(res.data.Message);

      // Redirect the user to the login page after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    });
  } catch (err) {
    // Display an error message using the response data if the API call fails
    toast.error(err.response.data.Error);
  }
};

/*========================  RESET PASSWORD  ===================*/
const ResetPasswordConfig = async (formData, id) => {
  try {
    const PasswordData = formData;

    // Make an API call to reset the user's password using the provided password data and reset ID
    await apiPost(`/api/user/reset-password/${id}`, PasswordData).then((res) => {
      // Display a success message using the response data
      toast.success(res.data.Message);

      // Redirect the user to the login page after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    });
  } catch (err) {
    // Display an error message using the response data if the API call fails
    toast.error(err.response.data.Error);
  }
};

/*========================  USER PROFILE  ===================*/
const ProfileConfig = async () => {
  try {
    // Make an API call to retrieve the user's profile data
    const result = await apiGetWithoutData(`/api/user/user-profile`);
    const data = await result.data;
    const user = await data.User;

    // Set the user profile state to the retrieved user data
    setUserProfile(user);
  } catch (err) {
    // Display an error message using the response data if the API call fails
    toast.error(err.response.data.Error);
  }
};

//********************* UPDATE PROFILE *************************
const UpdateProfileConfig = async (formdata) => {
  try {
    const profileData = {
      fullName: formdata.fullName,
      userName: formdata.userName,
    };

    // Make an API call to update the user's profile using the provided profile data
    await apiPatch('/api/user/update-profile', profileData).then((res) => {
      // Display a success message using the response data
      toast.success(res.data.Message);

      // Update the user data in local storage with the updated user name
      localStorage.removeItem('user');
      localStorage.setItem('user', res.data.User.userName);
    });

    // Redirect the user to the home page after 2 seconds
    setTimeout(() => {
      window.location.href = '/home';
    }, 2000);
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

 //********************* UPDATE EMAIL ************************* */ 
const UpdateEmailConfig = async (formdata) => {
  try {
    // Set up email data to be sent to API
    const emailData = {
      preEmail: formdata.preEmail,
      newEmail: formdata.newEmail,
    };
    // Make PATCH request to API endpoint for email update
    await apiPatch('/api/user/email-update', emailData).then((res) => {
      // Display success message to user
      toast.success(res.data.Message);
    });

  } catch (err) {
    // Display error message to user
    toast.error(err.response.data.Error);
  }
};

//********************* VERIFY EMAIL ************************* */ 
const VerifyEmailConfig = async(email) => {
  try {
    // Make PATCH request to API endpoint for email verification
    await apiPatch(`/api/user/email-verification/${email}`).then((res) => {
      // Display success message to user
      toast.success(res.data.Message);
      // Clear localStorage
      localStorage.clear()
    });
    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  } catch (err) {
    // Display error message to user and redirect to change-email page
    toast.error(err.response.data.Error);
    setTimeout(() => {
      window.location.href = '/change-email';
    }, 4000);
    
  }
};

//********************* UPDATE PASSWORD ************************* */ 
const UpdatePasswordConfig = async (formdata) => {
  try {
    // Set up password data to be sent to API
    const passwordData = {
      prePassword: formdata.prePassword,
      newPassword: formdata.newPassword,
    };
    // Make PATCH request to API endpoint for password update
    await apiPatch('/api/user/password-update', passwordData).then((res) => {
      // Display success message to user
      toast.success(res.data.Message);
    });

  } catch (err) {
    // Display error message to user
    toast.error(err.response.data.Error);
  }
};

//********************* VERIFY PASSWORD ************************* */ 
const VerifyPasswordConfig = async(password) => {
  try {
    // Make PATCH request to API endpoint for password verification
    await apiPatch(`/api/user/password-verification/${password}`).then((res) => {
      // Display success message to user
      toast.success(res.data.Message);
      // Clear localStorage
      localStorage.clear()
    });
    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  } catch (err) {
    // Display error message to user and redirect to change-password page
    toast.error(err.response.data.Error);
    window.location.href = '/change-password';
  }
};

//********************* NEWS LIKES  ************************* */ 
const articleLikes = async (formdata) => {
  try {
    // Set up likes data to be sent to API
    const likesData = {
      title: formdata.title,
      url: formdata.url,
    };
    // Make POST request to API endpoint for creating a new article like
    await apiPost('/api/likes/create', likesData).then((res) => {
      // Display success message to user
      toast.success(res.data.Message);
    });

  } catch (err) {
    // Display error message to user
    toast.error(err.response.data.Error);
  }
};

  // Set up the data provider with all the functions and export it

  return (
    <DataContext.Provider
      value={{
        register,
        login,
        OTPConfig,
        ResendOTPConfig,
        ForgotPasswordConfig,
        ResetPasswordConfig,
        ProfileConfig,
        userProfile,
        UpdateProfileConfig,
        UpdateEmailConfig, 
        VerifyEmailConfig,
        UpdatePasswordConfig,
        VerifyPasswordConfig,
        articleLikes
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('UseAuth must be used within the auth provider');
  }
  return context;
};

export default DataProvider;
