import { Box, styled } from '@mui/material';

const ContextBox = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.main,
  zIndex: 9999,
  border: `1px solid ${theme.palette.grey[800]}`,
  borderRadius: theme.shape.borderRadius,
}));


export default ContextBox