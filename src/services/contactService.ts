import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { ContactForm } from '../types'

export const submitContactForm = async (formData: ContactForm): Promise<void> => {
  try {
    console.log('Attempting to submit to Firebase...')
    console.log('Firebase db instance:', db)

    // Add the form data to Firestore
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    })

    console.log('Document written with ID: ', docRef.id)
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form. Please try again.')
  }
}

// Alternative implementation for environments where Firebase is not configured
export const submitContactFormFallback = async (formData: ContactForm): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Log the form data (in a real app, you might send this to an email service)
  console.log('Contact form submission:', {
    ...formData,
    timestamp: new Date().toISOString()
  })
  
  // Simulate success
  return Promise.resolve()
}

