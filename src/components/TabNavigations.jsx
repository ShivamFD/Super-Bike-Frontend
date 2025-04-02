import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaCar, FaTools, FaGasPump, FaHandHoldingUsd, FaDatabase } from "react-icons/fa";

const TabNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "Purchase", path: "/", icon: <FaCar /> },
    { name: "Service", path: "/service", icon: <FaTools /> },
    { name: "Petrol", path: "/petrol", icon: <FaGasPump /> },
    { name: "Sell", path: "/sell", icon: <FaHandHoldingUsd /> },
    { name: "Vehicle Data", path: "/vehicle-data", icon: <FaDatabase /> },
  ];

  return (
    <NavWrapper>
      <NavContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => navigate(tab.path)}
            isActive={location.pathname === tab.path}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </TabButton>
        ))}
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding: 15px 0;
  z-index: 100;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  background: navy;
  padding: 10px;
  border-radius: 15px;
`;

const TabButton = styled.button`
  background: ${({ isActive }) => (isActive ? "#0033a0" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "navy")};
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #0033a0;
    color: white;
  }

  svg {
    font-size: 22px;
  }
`;

export default TabNavigation;
