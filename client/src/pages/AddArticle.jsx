// import React from 'react';
// import { FormInput } from '../components';
// import { useOutletContext } from 'react-router-dom';
// import { Form, useNavigation, redirect } from 'react-router-dom';
// // import {  ARTICLE_TYPES } from '../../../utils/constants';
// import customFetch from '../utils/customFetch';
// import { ARTICLE_TYPE } from '../../../utils/constants';

// const AddArticle = () => {
//   const {user} = useOutletContext();
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === 'Loading...'
//   return (
//     <div>
//       <Form method='post' className='add-article-form'>
//         <h4>Add Article</h4>
//         <div className='center-form'>
//           <FormInput type="text" name='articleType' />
//         </div>
//         </Form>
//     </div>
//   )
// }

// export default AddArticle


import React from 'react';
import { FormInput } from '../components';
import { useOutletContext } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { ARTICLE_TYPE, ARTICLE_CATEGORY, AUTHORS_TONE, FREQUENCY_SUB, PUBLISH, QUANTITY } from '../../../utils/constants';
import customFetch from '../utils/customFetch';

const AddArticle = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'Loading...';

  return ( 
    <div>
      <Form method='post' className='add-article-form'>
        <h4>Add Article</h4>
        <div className='center-form'>
          <FormInput type="text" name='articleType' label='Article Type' options={ARTICLE_TYPE} />
          <FormInput type="text" name='articleCategory' label='Article Category' options={ARTICLE_CATEGORY} />
          <FormInput type="text" name='authorsTone' label='Author Tone' options={AUTHORS_TONE} />
          <FormInput type="text" name='publishing' label='Publish' options={PUBLISH} />
          <FormInput type="text" name='frequency' label='Frequency' options={FREQUENCY_SUB} />
          <FormInput type="text" name='quantity' label='Quantity' options={QUANTITY} />
        </div>
        <button type='submit' disabled={isSubmitting}> Link
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  );
};

export default AddArticle;

