import React, { useState } from 'react';
import './App.css';
import FieldForm from './components/FieldForm';
import { FaPlus } from 'react-icons/fa';
import 'antd/dist/reset.css';
import AddSchemaButton from './components/AddButton/AddSchemaButton';

function App() {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { key: '', type: '', children: [] }]);
  };

  const updateField = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    setFields(newFields);
  };
  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', padding: '20px' }}>

      <div style={{ flex: 1 }}>
        

        {fields.map((field, index) => (
          <FieldForm
            key={index}
            field={field}
            onChange={(updatedField) => updateField(index, updatedField)}
            onRemove={() => removeField(index)}
          />
        ))}
        <AddSchemaButton onClick={handleAddField} />
      </div>

      <div
        style={{
          flex: 1,
          background: '#f4f4f4',
          borderRadius: '8px',
          padding: '10px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        <h3>JSON Schema</h3>
        <pre>{JSON.stringify(convertToJson(fields), null, 2)}</pre>
      </div>
    </div>
  );
}

function convertToJson(fields) {
  const result = {};
  fields.forEach((field) => {
    if (!field.key) return;

    if (field.type === 'Nested') {
      result[field.key] = convertToJson(field.children || []);
    } else {
      result[field.key] = field.type;
    }
  });
  return result;
}

export default App;
