import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditableField = ({ cellData, onItemizedItemEdit }) => {
  const { leading, type, placeholder, min, name, id, value, step, precision, textAlign } = cellData;

  return (
    <InputGroup className="my-1 flex-nowrap">
      {leading != null && (
        <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
          <span className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small" style={{ width: '20px', height: '20px' }}>
            {leading}
          </span>
        </InputGroup.Text>
      )}
      <Form.Control
        className={textAlign}
        type={type}
        placeholder={placeholder}
        min={min}
        name={name}
        id={id}
        value={value}
        step={step}
        precision={precision}
        aria-label={name}
        onChange={(e) => onItemizedItemEdit({ target: { id, name, value: e.target.value } })}
        required
      />
    </InputGroup>
  );
};

export default EditableField;
