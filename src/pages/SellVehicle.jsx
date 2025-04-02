import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SellVehicle = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    contact: "",
    address: "",
    aadharCardNumber: "",
    licenseNumber: "",
    panCardNumber: "",
    sellingPrice: "",
  });

  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("purchaseVehicleData");
    if (storedData) {
      setVehicleData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("sellVehicleData", JSON.stringify(formData));
    alert("Data saved successfully!");
  };

  return (
    <Main>
 <Container>
      <Title>💰 Sell Vehicle</Title>
      <SearchBar placeholder="🔍 Search By Vehicle Number" />
      
      {vehicleData ? (
  <InfoBox>
    <InfoItem><strong>Vehicle Number:</strong> {vehicleData.vehicleNumber}</InfoItem>
    <InfoItem><strong>Model Number:</strong> {vehicleData.modelNumber}</InfoItem>
    <InfoItem><strong>Company Name:</strong> {vehicleData.companyName}</InfoItem>
    <InfoItem><strong>Insurance Number:</strong> {vehicleData.insuranceNumber}</InfoItem>
    <InfoItem><strong>Loan Number:</strong> {vehicleData.loanNumber}</InfoItem>
    <InfoItem><strong>Manufacture Year:</strong> {vehicleData.manufactureYear}</InfoItem>
    <InfoItem><strong>Purchase Price:</strong> {vehicleData.purchasePrice}</InfoItem>
  </InfoBox>
) : (
  <p>No Vehicle Data Found! Please Fill Purchase Vehicle Form First.</p>
)}


      <Form onSubmit={handleSubmit}>
        <Input name="customerName" placeholder="Customer Name" onChange={handleChange} required />
        <Input name="contact" placeholder="Contact" onChange={handleChange} required />
        <Input name="address" placeholder="Address" onChange={handleChange} required />
        <Input name="aadharCardNumber" placeholder="Aadhar Card Number" onChange={handleChange} required />
        <Input name="licenseNumber" placeholder="License Number" onChange={handleChange} required />
        <Input name="panCardNumber" placeholder="PAN Card Number" onChange={handleChange} required /> <br />
        <Title1>Selling Price</Title1>
        <Input name="sellingPrice" placeholder="Selling Price" onChange={handleChange} required /> <br />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
    </Main>
   
  );
};

const Main=styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full screen height tak center */
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa; /* Light grey background for clean UI */
`;

const Title = styled.h2`
  background: navy;
  color: white;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 Columns */
  gap: 10px 20px;
  border: 2px solid navy;
  padding: 20px;
  margin: 20px auto;
  width: 60%;
  border-radius: 8px;
  text-align: left;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* Mobile View: Single Column */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const InfoItem = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 5px;
  margin: 0;
`;
const SearchBar = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 300px;
  border: 2px solid navy;
  border-radius: 5px;
`;

const SectionTitle = styled.h3`
  background: navy;
  color: white;
  padding: 5px;
  width: 200px;
  margin: 10px auto;
  border-radius: 5px;
`;
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
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid navy;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title1 = styled.h3`
  grid-column: span 2; /* Full width */
  background: navy;
  color: white;
  padding: 8px;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  grid-column: span 2; /* Full width */
  background: navy;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
  
  &:hover {
    background: darkblue;
  }
`;

/* Responsive Design */


export default SellVehicle;
