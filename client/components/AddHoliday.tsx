import "../styles/modal.css"

//Add Holiday component

interface AddHolidayProps {
  closeModal: (param: boolean) => void
}
function AddHoliday ({ closeModal }: AddHolidayProps) {


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
          <div className="body">
            <ul>
              <li>
                <label>
                  Add Image:
                  <input className="fileInput" type="file" />
                </label>
              </li>
              <li>
                <label>
                  Location:
                  <input type="text" placeholder="Add location" />
                </label>
              </li>
              <li>
                <textarea
                  placeholder="Describe your holiday"
                  rows={4}
                  cols={26}
                />
              </li>
              <li>
                <form>
                  <label>
                    Rating:
                    <select>
                      <option value="">Select rating</option>
                      <option value="option1">⭐️⭐️⭐️⭐️⭐️</option>
                      <option value="option2">⭐️⭐️⭐️⭐️</option>
                      <option value="option3">⭐️⭐️⭐️</option>
                      <option value="option4">⭐️⭐️</option>
                      <option value="option5">⭐️</option>
                    </select>
                  </label>
                </form>
              </li>
            </ul>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)}>Cancel</button>
            <button onClick={() => window.location.reload()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddHoliday