import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUpdatePost } from '../../store/PostReducer';

const EditForm = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ title, body, id });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const handleUpdate = () => {
    dispatch(setUpdatePost({ ...inputs }));
  };

  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={inputs.title}
          rows={3}
          name="title"
          onChange={(e) => updateFormValue(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={inputs.body}
          name="body"
          onChange={(e) => updateFormValue(e)}
          rows={3}
        />
      </Form.Group>
      <Button variant="success" type="button" onClick={handleUpdate}>
        Save Changes
      </Button>
    </Form>
  )
}

export default EditForm;