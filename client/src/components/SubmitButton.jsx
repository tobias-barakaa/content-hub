import React from 'react'
import { useNavigation } from 'react-router-dom';

const SubmitButton = () => {
    const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button type="submit"
          disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Submit'}
   </button>
  )
}

export default SubmitButton
