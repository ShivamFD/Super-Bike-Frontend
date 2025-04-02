import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Petrol = () => {
  const [formData, setFormData] = useState({
    mileage: "",
    date: "",
    currentRunning: "",
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
    localStorage.setItem("petrolData", JSON.stringify(formData));
    alert("Data saved successfully!");
  };

  return (
    <Main>

    <Container>
      <Title>⛽ Petrol</Title>
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
        <Input name="mileage" placeholder="Mileage/Ltr" onChange={handleChange} required />
        <Input name="date" type="date" onChange={handleChange} required />
        <Input name="currentRunning" placeholder="Current Running" onChange={handleChange} required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
        </Main>
  );
};

const Main =styled.div`
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
const SearchBar = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 300px;
  border: 2px solid navy;
  border-radius: 5px;
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


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 20px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 12px 40px;
  border: 2px solid navy;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
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


export default Petrol;
