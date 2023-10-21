import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Container from '@mui/material/Container';
import DocketForm from './components/DocketForm';
import * as addDataToFirebase from './components/firebaseConfig';
function App() {
const [csvData, setCsvData] = useState([]);
const [isBoxVisible, setIsBoxVisible] = useState(false);
const [dropdownData, setDropdownData] = useState({
  suppliers: [], 
  purchaseOrders: [],
});
  const handleDocketFormSubmit = (formData) => {
    console.log('formDataformDataformData',formData)
    addDataToFirebase.addDataToFirebase(formData)
    // setFormData({
    //   name: '',
    //   startTime: '',
    //   endTime: '',
    //   hoursWorked: '',
    //   ratePerHour: '',
    //   supplierName: '',
    //   purchaseOrder: '',
    // });
  };
  

  const fillMissingEntries = (data) => {
    let previousPoNumber = null;
    let previousSupplier = null;

    const filledData = data.map((row) => {
      if (!row['PO Number'] && previousPoNumber) {
        row['PO Number'] = previousPoNumber;
      } else if (row['PO Number']) {
        previousPoNumber = row['PO Number'];
      }

      if (!row['Supplier'] && previousSupplier) {
        row['Supplier'] = previousSupplier;
      } else if (row['Supplier']) {
        previousSupplier = row['Supplier'];
      }

      return row;
    });

    return filledData;
  };

  const handleFileUpload = (data) => {
    const filledData = fillMissingEntries(data);
    console.log(filledData);
    setCsvData(filledData);
    const suppliersSet = new Set(filledData.map((row) => row['Supplier']).filter((supplier) => supplier));
    const purchaseOrdersSet = new Set(filledData.map((row) => row['PO Number']).filter((po) => po));

    const suppliers = Array.from(suppliersSet);
    const purchaseOrders = Array.from(purchaseOrdersSet);
  
    setDropdownData({ suppliers, purchaseOrders });
    setIsBoxVisible(true); 
  };
  
  const processEmptyEntries = () => {
    const filledData = fillMissingEntries(csvData);
    console.log(filledData);
    setCsvData(filledData);
  };

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
      <Container
        maxWidth="sm"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', 
          height: '100vh',
        }}
      >
        <h1>CSV File Upload</h1>
            <FileUpload onFileUpload={handleFileUpload} />
            {isBoxVisible && (
              <DocketForm onSubmit={handleDocketFormSubmit} dropdownData={dropdownData} />
            )}
            {/* <DataGridPage /> */}
      </Container>

  );
}

export default App;
