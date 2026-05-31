
import Modal from './components/Modal'

function App() {


  return (
    <Modal>
      <Modal.Open>
        <button className="btn-primary ">
          Create Account
        </button>
      </Modal.Open>

      <Modal.Content>
        <Modal.Header>
          <h2 className="text-xl font-semibold">
            Create your account
          </h2>
        </Modal.Header>

        <Modal.Body>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input"
            />

            <input
              type="email"
              placeholder="Email"
              className="input"
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
            />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <div className="flex justify-end gap-2">
            <Modal.Close>
              <button
                type="button"
                className="btn-secondary"
              >
                Cancel
              </button>
            </Modal.Close>

            <button
              type="submit"
              className="btn-primary"
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default App
