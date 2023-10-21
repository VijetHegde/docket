// DataGridPage.js

import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { getDataFromFirebase } from './firebaseConfig'; 
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const DataGridPage = () => {
    const navigate = useNavigate();
    const hadleBackPage = ()=>{
        navigate('/');
    }
  const [data, setData] = useState([]);

  useEffect(() => {
        const data = getDataFromFirebase()
        data.then((res)=>{
            setData(res);
        })        
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'endTime', headerName: 'EndTime', width: 200 },
    { field: 'hoursWorked', headerName: 'HoursWorked', width: 200 },
    { field: 'purchaseOrder', headerName: 'RurchaseOrder', width: 200 },
    { field: 'ratePerHour', headerName: 'RatePerHour', width: 200 },
    { field: 'startTime', headerName: 'StartTime', width: 200 },
    { field: 'supplierName', headerName: 'SupplierName', width: 200 },
  ];

  return (
    // <div style={{ width: '100%' }}>
    //   <h2>Data comming from Firebase</h2> {/* Add the heading above the DataGrid */}
    //   <div style={{ height: 400, width: '100%' }}>
    //     <DataGrid rows={data} columns={columns} pageSize={10} rowsPerPageOptions={[4, 10, 15]} checkboxSelection />
    //   </div>
    //   <Button  variant="contained" onClick={hadleBackPage}>Go Back To Add New Entry</Button>
    // </div>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Data coming from Firebase</h2>
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={data} columns={columns} pageSize={10} rowsPerPageOptions={[4, 10, 15]} checkboxSelection />
  </div>
  <Button variant="contained" onClick={hadleBackPage} style={{ marginTop: '20px' }}>
    Go Back To Add New Entry
  </Button>
</div>
  );
};

export default DataGridPage;
