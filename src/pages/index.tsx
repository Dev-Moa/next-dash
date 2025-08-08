import { Box, Grid } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import StatCard from "@/components/StatCard";
import Counter from "@/components/Counter";

function Home() {
  return (
    <Layout>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="ORDERS"
              value="10,000"
              subtitle="-12% Since last month"
              isNegative={true}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="TOTAL USERS"
              value="700"
              subtitle="+16% Since last month"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard title="COMPLETED ORDERS" value="33.2%" progress={33.2} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard title="TOTAL PROFIT" value="$ 1,503,931" />
          </Grid>
        </Grid>

        {/* Counter */}
        <Counter />
      </Box>
    </Layout>
  );
}

export default Home;
