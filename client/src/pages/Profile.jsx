import React from 'react';
import { Form, useNavigation, useOutletContext} from 'react-router-dom';
import { FormInput } from '../components';
import customFetch from '../utils/customFetch';
import "./Profile.css";


export const action = async ({request}) => {
  const formData = await request.formData();
  const file = formData.get('avatar');
  if(file && file.size > 50000) {
    alert("image size too big");
    return null
}
try {
  await customFetch.patch('/users/update-user', formData);
  alert('profile updated');
} catch (error) {
  return error;
}
return null;
}

const Profile = () => {
  const {user} = useOutletContext();
  const navigation = useNavigation()
  const loading = navigation.state === "loading"
  const {name, lastName, email } = user;
  console.log(user);
  return (
    <div>
      
      <Form method='post' className="profile"
      encType='multipart/form-data'
      >
        <h4 className='form-title'>Profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              Select an image file(max 0x5 MB)
            </label>
            <input type='file' id='avatar' name='avatar' 
            className='form-input' accept='image/*'
            
            />
          </div>
          <FormInput type='text' name='name' labelText="name" defaultValue={name} />
          <FormInput type='text' labelText='last name' name='lastName' defaultValue={lastName} />
          <FormInput type='email' labelText='email' name='email' defaultValue={email} />
    <button className='btn btn-block form-btn' disabled={loading}>
      {loading ? 'Loading...' : 'Submit'}
    </button>

        </div>
      </Form>
    </div>
  )
}

export default Profile
