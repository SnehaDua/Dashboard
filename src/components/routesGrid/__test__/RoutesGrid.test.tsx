import React from "react";
import { render, screen } from '@testing-library/react';
import RoutesGrid from "../RoutesGrid";

describe('RoutesGrid', () => {
  const routeName = "Route 1";
  const startingPoint = "A";
  const endPoint = "B";
  const distance = 100;
  
  test('renders RoutesGrid component without crashing', () => {
    render(<RoutesGrid />);
  });

  test('renders routeName, startingPoint, endPoint, and distance', () => {
    render(
      <RoutesGrid 
        routeName={routeName} 
        startingPoint={startingPoint} 
        endPoint={endPoint} 
        distance={distance} 
      />
    );

    expect(screen.getByText(routeName)).toBeInTheDocument();
    expect(screen.getByText(startingPoint)).toBeInTheDocument();
    expect(screen.getByText(endPoint)).toBeInTheDocument();
    expect(screen.getByText(`${distance} km`)).toBeInTheDocument();
  });

  test('sets delayType to high if delayTime is above 25', () => {
    const delayTime = 30;

    render(
      <RoutesGrid 
        routeName={routeName} 
        startingPoint={startingPoint} 
        endPoint={endPoint} 
        distance={distance} 
        delayTime={delayTime} 
      />
    );

    const delayCircle = screen.getByTestId('delay-circle');
    expect(delayCircle).toHaveClass('circleIcon-high');
  });

  test('sets delayType to low if delayTime is 25 or below', () => {
    const delayTime = 20;

    render(
      <RoutesGrid 
        routeName={routeName} 
        startingPoint={startingPoint} 
        endPoint={endPoint} 
        distance={distance} 
        delayTime={delayTime} 
      />
    );

    const delayCircle = screen.getByTestId('delay-circle');
    expect(delayCircle).toHaveClass('circleIcon-low');
  });
});
