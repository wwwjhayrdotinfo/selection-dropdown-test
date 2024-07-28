import logo from './logo.svg';
import './App.css';
import Dropdown from 'selection-dropdown';

function App() {
  return (
  <>
  <Dropdown options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'optionWithIcon', label: 'Option with icon', icon: '🌟' },
    { value: 'longOption3', label: 'Long Long Option 3' },
    { value: 'longOption4', label: 'Long Long Option 4' },
    { value: 'longOption5', label: 'Long Long Long Option 5' },
    { value: 'longOption6', label: 'Long Long Long Long Option 6' },
  ]} isMulti={true} isSearchable={true} usePortal={false} />
  </>
  );
}

export default App;
