import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PurchaseVehicle = () => {
  const navigate = useNavigate(); // Navigation hook

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    oldCustomerName: "",
    companyName: "",
    modelNumber: "",
    insuranceNumber: "",
    loanNumber: "",
    manufactureYear: "",
    purchasePrice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("purchaseVehicleData", JSON.stringify(formData));
    alert("Data saved successfully!");

    // Auto Navigate to Service Page
    navigate("/service");
  };

  return (
    <Main>
 <Container>
      <Title>🚗 Purchase Vehicle</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="vehicleNumber" placeholder="Vehicle Number" onChange={handleChange} required />
        <Input name="oldCustomerName" placeholder="Old Customer Name" onChange={handleChange} required />
        <Input name="companyName" placeholder="Company Name" onChange={handleChange} required />
        <Input name="modelNumber" placeholder="Model Number" onChange={handleChange} required />
        <Input name="insuranceNumber" placeholder="Insurance Number" onChange={handleChange} required />
        <Input name="loanNumber" placeholder="Loan Number" onChange={handleChange} required />
        <Input name="manufactureYear" placeholder="Manufacture Year" onChange={handleChange} required />
        <Input name="purchasePrice" placeholder="Purchase Price" onChange={handleChange} required />
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

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 500px;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid navy;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  background: navy;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export default PurchaseVehicle;
