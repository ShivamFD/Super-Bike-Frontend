
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUpload } from "react-icons/fa";

const VehicleData = () => {
  const [formData, setFormData] = useState({
    rcBook: "",
    insurance: "",
    vehicleDocuments: "",
  });

  const [vehicleInfo, setVehicleInfo] = useState(null);

  // Fetch stored data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("purchaseVehicleData");
    if (storedData) {
      setVehicleInfo(JSON.parse(storedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [fieldName]: file.name }); // Save file name in state
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("vehicleData", JSON.stringify(formData));
    alert("Data submitted successfully!");
  };

  return (
    <Main>
      <Container>
        <Title>📂 Vehicle Data</Title>

        <Form onSubmit={handleSubmit}>
          {/* 2-Column Inputs for Vehicle Details */}
          {vehicleInfo ? (
            <>
              <Input name="vehicleNumber" placeholder="Vehicle Number" value={vehicleInfo.vehicleNumber} readOnly />
              <Input name="oldCustomerName" placeholder="Old Customer Name" value={vehicleInfo.oldCustomerName} readOnly />
              <Input name="companyName" placeholder="Company Name" value={vehicleInfo.companyName} readOnly />
              <Input name="modelNumber" placeholder="Model Number" value={vehicleInfo.modelNumber} readOnly />
              <Input name="insuranceNumber" placeholder="Insurance Number" value={vehicleInfo.insuranceNumber} readOnly />
              <Input name="loanNumber" placeholder="Loan Number" value={vehicleInfo.loanNumber} readOnly />
              <Input name="manufactureYear" placeholder="Manufacture Year" value={vehicleInfo.manufactureYear} readOnly />
              <Input name="purchasePrice" placeholder="Purchase Price" value={vehicleInfo.purchasePrice} readOnly />
            </>
          ) : (
            <p>No Vehicle Data Found! Please Fill Purchase Vehicle Form First.</p>
          )}

          {/* File Upload Fields */}
          <FileUpload>
            <label>RC Book:</label>
            <UploadBox>
              <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "rcBook")} />
              <FaUpload />
            </UploadBox>
          </FileUpload>

          <FileUpload>
            <label>Insurance:</label>
            <UploadBox>
              <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "insurance")} />
              <FaUpload />
            </UploadBox>
          </FileUpload>

          <FileUpload>
            <label>Vehicle Documents:</label>
            <UploadBox>
              <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "vehicleDocuments")} />
              <FaUpload />
            </UploadBox>
          </FileUpload>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Container>
    </Main>
  );
};

// Styled Components
const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  background: navy;
  color: white;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
`;

/* Form with 2-Column Layout */
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  max-width: 600px;
  margin: 20px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`;

/* Input Field */
const Input = styled.input`
  padding: 12px;
  border: 2px solid navy;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background: white;

  &:read-only {
    background: #f1f1f1;
    cursor: not-allowed;
  }
`;

/* File Upload Section */
const FileUpload = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid navy;
  padding: 10px;
  border-radius: 5px;
  background: #f1f1f1;

  label {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    flex-direction: column;
    align-items: flex-start;
  }
`;

/* Upload Box */
const UploadBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  input {
    flex: 1;
    padding: 5px;
    border: none;
    background: transparent;
  }

  svg {
    font-size: 20px;
    color: navy;
    cursor: pointer;
  }
`;

/* Submit Button */
const SubmitButton = styled.button`
  grid-column: span 2;
  background: navy;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;

  &:hover {
    background: darkblue;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export default VehicleData;
