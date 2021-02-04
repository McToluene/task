import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Blog = () => {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Blog</h1>
        </div>
      </Box>
    </Container>
  );
};

export default Blog;
