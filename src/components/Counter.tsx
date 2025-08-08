import { increment, decrement } from "@/store/slices/counterSlice";
import { Box, Typography, Paper, Button } from "@mui/material";
import React from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <Box sx={{ mt: 4, mb: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Redux Counter Demo
      </Typography>
      <Paper elevation={1} sx={{ p: 3, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2, color: "#8b5cf6" }}
        >
          {counter}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => dispatch(increment())}
            sx={{
              backgroundColor: "#8b5cf6",
              "&:hover": { backgroundColor: "#7c3aed" },
            }}
          >
            Increment
          </Button>
          <Button
            variant="outlined"
            onClick={() => dispatch(decrement())}
            sx={{
              borderColor: "#8b5cf6",
              color: "#8b5cf6",
              "&:hover": {
                borderColor: "#7c3aed",
                backgroundColor: "rgba(139, 92, 246, 0.04)",
              },
            }}
          >
            Decrement
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Counter;
