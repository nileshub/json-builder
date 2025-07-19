import { Input } from 'antd';
function EditableInput({ inputValue, setInputValue }) {
  return (
    <Input
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Enter key name"
    style={{ width: 200, marginRight: 8 }}
  />
  );
}

export default EditableInput;

