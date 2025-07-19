
import { Select } from 'antd';

const { Option } = Select;

const SelectField = ({ selectedOption, setSelectedOption }) => (
  <Select
    value={selectedOption}
    onChange={(value) => setSelectedOption(value)}
    placeholder="Select type"
    style={{ width: 180, marginRight: 8 }}
  >
    <Option value="String">String</Option>
    <Option value="Number">Number</Option>
    <Option value="Boolean">Boolean</Option>
    <Option value="Nested">Nested</Option>
  </Select>
);

export default SelectField;
