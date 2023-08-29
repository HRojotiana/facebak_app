import React,{useState} from 'react';
import axios from 'axios';
import './profile.css';
import { Link,useNavigate } from 'react-router-dom';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [username, setUsernameState] = useState(''); 
    const [bio, setBioState] = useState('');
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.put('http://[::1]:8080/users', {
            email: email,
            password: password,
            username: username,
            bio: bio,
            photo: photo,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
          });
    
          alert("Changes saved");
          console.log('Backend response:', response.data);
    
          alert("Your account is created. Please login now")
          navigate('/');
        } catch (error) {
          console.log('Error when requesting', error);
        }
      };

    return (
        <div className="container">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="firstName">Username:</label>
                <input type="text" id="firstName" name="firstName" required value={username} onChange={(e) => setUsernameState(e.target.value)}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor="confirmPassword">Bio:</label>
                <input type="text" id="bio" name="confirmPassword" required value={bio} onChange={(e) => setBioState(e.target.value)}/>


                <label htmlFor="newPassword">New password</label>
                <input type="text" id="password" name="confirmPassword" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>

                <label htmlFor="confirmNewPassword">Confirm new password</label>
                <input type="text" id="password" name="confirmPassword" required value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>

                <label htmlFor="confirmNewPassword">Photo: </label>
                <input type="text" id="image" name="image" required value={photo} onChange={(e) => setPhoto(e.target.value)}/>

                <button type="submit" >Save Changes</button>
            </form>
        </div>
    );
}

export default Profile;
