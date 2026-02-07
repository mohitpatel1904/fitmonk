import { Card } from 'react-bootstrap';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DailyStats } from '@/data/mockUserData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ActivityChartProps {
  stats: DailyStats[];
  period: 'week' | 'month';
}

const ActivityChart = ({ stats, period }: ActivityChartProps) => {
  // Sort stats by date from oldest to newest
  const sortedStats = [...stats].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Take only the last 7 or 30 days based on period
  const filteredStats = period === 'week' 
    ? sortedStats.slice(-7) 
    : sortedStats.slice(-30);

  // Format dates for display
  const labels = filteredStats.map(stat => {
    const date = new Date(stat.date);
    return period === 'week' 
      ? date.toLocaleDateString('en-US', { weekday: 'short' })
      : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  // Extract data for chart
  const stepsData = filteredStats.map(stat => stat.steps);
  const caloriesData = filteredStats.map(stat => stat.caloriesBurned);

  const data = {
    labels,
    datasets: [
      {
        label: 'Steps',
        data: stepsData,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true,
        yAxisID: 'y'
      },
      {
        label: 'Calories',
        data: caloriesData,
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.0)',
        tension: 0.4,
        borderDash: [],
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Steps'
        },
        grid: {
          drawOnChartArea: false
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Calories'
        },
        grid: {
          drawOnChartArea: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false
      }
    }
  };

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <Card.Title className="mb-4">Activity Trends ({period === 'week' ? 'Last 7 days' : 'Last 30 days'})</Card.Title>
        <div className="chart-container" style={{ height: '300px' }}>
          <Line options={options} data={data} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActivityChart; 