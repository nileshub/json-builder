import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddSchemaButton = ({ onClick }) => (
  <Button style={{width:'100%', marginTop:'10px'}} type="primary" icon={<PlusOutlined />} onClick={onClick}>
    Add
  </Button>
);

export default AddSchemaButton;
