import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const Service = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [services, setServices] = useState([
    { id: 1, name: "Engine Oil Check & Replacement" },
    { id: 2, name: "Engine Oil Check & Replacement" },
    { id: 3, name: "Engine Oil Check & Replacement" },
  ]);

  // LocalStorage se Purchase Vehicle ka data fetch karna
  useEffect(() => {
    const storedData = localStorage.getItem("purchaseVehicleData");
    if (storedData) {
      setVehicleData(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
    localStorage.setItem("serviceData", JSON.stringify(updatedServices));
  };

  return (
    <Main>
  <Container>
      <Title>🔧 Service</Title>
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


      {/* Service List */}
      <ServiceList>
        {services.map((service) => (
          <ServiceItem key={service.id}>
            <span>1 Service</span>
            <span>{service.name}</span>
            <IconContainer>
              <FaEdit className="edit" />
              <FaTrash className="delete" onClick={() => handleDelete(service.id)} />
            </IconContainer>
          </ServiceItem>
        ))}
      </ServiceList>

      <SubmitButton>Submit</SubmitButton>
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

const ServiceList = styled.div`
  margin: 20px auto;
  width: 60%;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid navy;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;

  .edit {
    color: green;
    cursor: pointer;
  }

  .delete {
    color: red;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  background: navy;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export default Service;
