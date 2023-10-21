import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getDataFromFirebase } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const DocketForm = ({ onSubmit, dropdownData }) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    hoursWorked: '',
    ratePerHour: '',
    supplierName: '',
    purchaseOrder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      startTime: '',
      endTime: '',
      hoursWorked: '',
      ratePerHour: '',
      supplierName: '',
      purchaseOrder: '',
    });
  };
  const handlePreview = () => {
    // getDataFromFirebase();
     // Initialize the useNavigate hook
    // getDataFromFirebase();  // You can fetch data or perform other actions here if needed
    navigate('/previewData');

  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      
     <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Start Time"
        name="startTime"
        type="time"
        value={formData.startTime}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        fullWidth
        label="End Time"
        name="endTime"
        type="time"
        value={formData.endTime}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        fullWidth
        label="No. of Hours Worked"
        name="hoursWorked"
        type="number"
        value={formData.hoursWorked}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Rate per Hour"
        name="ratePerHour"
        type="number"
        value={formData.ratePerHour}
        onChange={handleChange}
        margin="normal"
      />
      
      <InputLabel id="supplierName-label">Supplier Name</InputLabel>
      <Select
        labelId="supplierName-label"
        id="supplierName"
        name="supplierName"
        value={formData.supplierName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Select Supplier</MenuItem>
        {dropdownData.suppliers.map((supplier) => (
          <MenuItem key={supplier} value={supplier}>
            {supplier}
          </MenuItem>
        ))}
      </Select>

      <InputLabel id="purchaseOrder-label">Purchase Order</InputLabel>
      <Select
        labelId="purchaseOrder-label"
        id="purchaseOrder"
        name="purchaseOrder"
        value={formData.purchaseOrder}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Select Purchase Order</MenuItem>
        {dropdownData.purchaseOrders.map((purchaseOrder) => (
          <MenuItem key={purchaseOrder} value={purchaseOrder}>
            {purchaseOrder}
          </MenuItem>
        ))}
      </Select>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button variant="contained" color="primary" type="submit">
          Create DOCKET
        </Button>

        <Button variant="contained" onClick={handlePreview}>
          Preview Data
        </Button>
      </div>

    </form>
   
  </>
  );
};

export default DocketForm;
