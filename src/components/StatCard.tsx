import { Paper, Typography, Box, LinearProgress } from "@mui/material";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  progress?: number;
  isNegative?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, progress, isNegative }) => (
  <Paper elevation={1} sx={{ p: 3, textAlign: 'left', height: '100%' }}>
    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, textTransform: 'uppercase' }}>
      {title}
    </Typography>
    <Typography variant="h4" sx={{ mt: 1, mb: 1, fontWeight: 600 }}>
      {value}
    </Typography>
    {subtitle && (
      <Typography 
        variant="caption" 
        sx={{ 
          color: isNegative ? 'error.main' : 'success.main',
          fontWeight: 500
        }}
      >
        {subtitle}
      </Typography>
    )}
    {progress !== undefined && (
      <Box sx={{ mt: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#f3f4f6',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#8b5cf6',
              borderRadius: 4
            }
          }} 
        />
      </Box>
    )}
  </Paper>
);

export default StatCard

