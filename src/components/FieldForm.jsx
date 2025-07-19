import React from 'react';
// import EditableInput from './input/input';
import EditableInput from './input/input';
// import SelectField from './select/select';
import SelectField from './select/select';
import { FaPlus } from 'react-icons/fa';
import AddSchemaButton from './AddButton/AddSchemaButton';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function FieldForm({ field, onChange,onRemove }) {
  const handleKeyChange = (value) => {
    onChange({ ...field, key: value });
  };

  const handleTypeChange = (value) => {
    const isNested = value === 'Nested';
    onChange({
      ...field,
      type: value,
      children: isNested ? [] : undefined,
    });
  };

  const handleAddChild = () => {
    const newChildren = [...(field.children || []), { key: '', type: '', children: [] }];
    onChange({ ...field, children: newChildren });
  };

  const updateChild = (index, updatedChild) => {
    const updatedChildren = [...field.children];
    updatedChildren[index] = updatedChild;
    onChange({ ...field, children: updatedChildren });
  };

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <EditableInput inputValue={field.key} setInputValue={handleKeyChange} />
        <SelectField selectedOption={field.type} setSelectedOption={handleTypeChange} />
        {onRemove && (
        <Button
        type="text"
        icon={<DeleteOutlined />}
        danger
        onClick={onRemove}
        style={{ marginLeft: 8 }}
      />
        )}
      </div>
      

      {field.type === 'Nested' && (
        <div style={{ marginTop: '10px' }}>
          

          {field.children?.map((child, index) => (
            <FieldForm
              key={index}
              field={child}
              onChange={(updatedChild) => updateChild(index, updatedChild)}
              onRemove={() => {
              const updatedChildren = [...field.children];
              updatedChildren.splice(index, 1);
              onChange({ ...field, children: updatedChildren });
    }}
            />
          ))}
          <AddSchemaButton onClick={handleAddChild} />
        </div>
      )}
    </div>
  );
}

export default FieldForm;
