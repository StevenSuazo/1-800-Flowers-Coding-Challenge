import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditForm from '../EditForm/EditForm';
import './PostListItem.css'

const PostListItem = ({ title, body, id }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose()
  }, [title])

  return (
    <>
      <button className='PostListItem' onClick={handleShow}>
        <div className='PostListItem-text'>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>
            Edit Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm id={id} title={title} body={body} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostListItem;