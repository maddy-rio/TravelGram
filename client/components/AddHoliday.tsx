import "../styles/modal.css"
import { useState } from 'react'
import axios from 'axios'

//Add Holiday component

interface AddHolidayProps {
  closeModal: (param: boolean) => void
}

// ... (imports and other code)

const baseForm = {
  image: '',
  location: '',
  description: '',
  rating: '',
};

function AddHoliday({ closeModal }: AddHolidayProps) {
  const [form, setForm] = useState(baseForm);
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

   console.log('Form Data before API call:', {
     img: file,
     location: form.location,
     description: form.description,
     rating: form.rating,
   })

    const formData = new FormData()
    formData.append('img', file || '')
    formData.append('location', form.location)
    formData.append('description', form.description)
    formData.append('rating', form.rating)

    console.log('Form Data:', formData)

    try {
      const response = await axios.post('/api/v1/addPost', formData)
      console.log('Response:', response.data)

      // Reset the form and file state
      setForm(baseForm)
      setFile(null)

      closeModal(false)
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error('Error:', error);
    console.error('Error Response:', error.response); // Log the detailed error response

    // You can also check if the error has a response status
    if (error.response && error.response.status === 500) {
      console.error('Internal Server Error');
    }
  } else {
    console.error('Unknown error:', error);
  }
 }
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <div className="title">
              <h3>Add Holiday 👇🏼</h3>
            </div>
            <button onClick={() => closeModal(false)}> ✕ </button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="body">
              <ul>
                <li>
                  <label>
                    Add Image:
                    <input
                      className="fileInput"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Location:
                    <input
                      type="text"
                      name="location"
                      placeholder="Add location"
                      onChange={handleInputChange}
                      value={form.location}
                    />
                  </label>
                </li>
                <li>
                  <textarea
                    name="description"
                    placeholder="Describe your holiday"
                    rows={4}
                    cols={26}
                    onChange={handleInputChange}
                    value={form.description}
                  />
                </li>
                <li>
                  <label>
                    Rating:
                    <select
                      name="rating"
                      onChange={handleInputChange}
                      value={form.rating}
                    >
                      <option value="">Select rating</option>
                      <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
                      <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
                      <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
                      <option value="⭐️⭐️">⭐️⭐️</option>
                      <option value="⭐️">⭐️</option>
                    </select>
                  </label>
                </li>
              </ul>
            </div>
            <div className="footer">
              <button onClick={() => closeModal(false)}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddHoliday;
