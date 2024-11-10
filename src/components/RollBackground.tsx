import React from 'react';
import { useCharacter } from '../context/CharacterContext';
import { rollD10, rollD20 } from '../utils/dice';
import chart1 from '../data/chart1.json';
import chart2 from '../data/chart2.json';
import chart2A from '../data/chart2A.json';
import chart3 from '../data/chart3.json';
import chart3A from '../data/chart3A.json';
import chart3C from '../data/chart3C.json';

// Define data types for each chart to assist with TypeScript type checking
interface ChartItem {
  result: string;
  subchart?: string;
}

// Helper function to roll on a chart and handle subcharts
const rollOnChart = (chart: ChartItem[]): string => {
    const roll = rollD20() - 1; // Subtract 1 for zero-based index
    const item = chart[roll];
    
    // If there's a subchart, roll on it and append the result
    if (item.subchart) {
      const subchartData = item.subchart === 'chart2A' ? chart2A 
                        : item.subchart === 'chart3A' ? chart3A 
                        : chart3C;
      const subchartRoll = rollOnChart(subchartData); // Recursively roll on subchart
      return `${item.result} (${subchartRoll})`;
    }
    
    return item.result;
  };
  
  const RollBackground: React.FC = () => {
    const { setBackground } = useCharacter();
  
    const handleRollBackground = () => {
      // Roll for birth order
      const birthOrderRoll = rollD10();
      const birthOrder = chart1[birthOrderRoll - 1].result;
  
      // Roll for parent occupation and handle potential subcharts
      const parentOccupation = rollOnChart(chart2);
  
      // Roll for significant events, which may also contain subcharts
      const eventRolls = Array.from({ length: Math.floor(Math.random() * 4) + 1 }).map(() => rollOnChart(chart3));
      const significantEvents = eventRolls.join(', ');
  
      // Combine results into a background description
      const backgroundDescription = `
        Birth Order: ${birthOrder}
        Parent Occupation: ${parentOccupation}
        Significant Events: ${significantEvents}
      `;
  
      // Update the character's background in the context
      setBackground(backgroundDescription);
    };
  
    return (
      <div>
        <h3>Roll Background</h3>
        <button onClick={handleRollBackground}>Roll Background</button>
      </div>
    );
  };
  
  export default RollBackground;