import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  AttachMoney as AttachMoneyIcon,
  Inventory as InventoryIcon,
  People as PeopleIcon
} from '@mui/icons-material';

const DashboardHome = ({ user }) => {
  // Mock data for dashboard
  const stats = [
    { title: 'Today\'s Sales', value: '$1,250.00', icon: <AttachMoneyIcon sx={{ fontSize: 40 }} color="primary" />, color: '#D4AF37' },
    { title: 'Total Inventory', value: '124 items', icon: <InventoryIcon sx={{ fontSize: 40 }} color="primary" />, color: '#D4AF37' },
    { title: 'Active Customers', value: '48', icon: <PeopleIcon sx={{ fontSize: 40 }} color="primary" />, color: '#D4AF37' },
    { title: 'Monthly Growth', value: '+15%', icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="primary" />, color: '#D4AF37' },
  ];

  const recentTransactions = [
    { id: 1, customer: 'John Doe', amount: '$350.00', date: '2025-06-21', time: '09:45 AM', item: 'Gold Necklace' },
    { id: 2, customer: 'Jane Smith', amount: '$520.00', date: '2025-06-21', time: '11:20 AM', item: 'Gold Ring' },
    { id: 3, customer: 'Robert Johnson', amount: '$180.00', date: '2025-06-20', time: '03:15 PM', item: 'Gold Earrings' },
    { id: 4, customer: 'Emily Davis', amount: '$750.00', date: '2025-06-20', time: '01:30 PM', item: 'Gold Bracelet' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.name || 'User'}!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Here's what's happening with your store today.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  backgroundColor: stat.color,
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Box>
                <Box>
                  {stat.icon}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Transactions */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardHeader 
              title="Recent Transactions" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <Divider />
            <CardContent>
              <List>
                {recentTransactions.map((transaction) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {transaction.customer.charAt(0)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1" component="span">
                              {transaction.customer}
                            </Typography>
                            <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                              {transaction.amount}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {transaction.item}
                            </Typography>
                            {` — ${transaction.date} at ${transaction.time}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardHeader 
              title="Gold Price Trends" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <Divider />
            <CardContent>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main" sx={{ fontWeight: 'bold', mb: 1 }}>
                  $2,150.75
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mb: 3 }}>
                  +$12.50 (0.58%)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Current gold price per ounce. Updated as of June 21, 2025.
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ borderRadius: 2, mt: 3 }}>
            <CardHeader 
              title="Quick Actions" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <Divider />
            <CardContent>
              <List dense>
                <ListItem button>
                  <ListItemText primary="New Sale" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Add Inventory" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Add Customer" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Generate Report" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;