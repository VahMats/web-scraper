import { styled } from '@mui/material/styles';

const HeaderStyled = styled('div')(({ theme }) => ({
  '.main-component': {
    width: '100%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '56px'
  },

  '.main-box': {
    width: 228,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
    alignItems: 'center'
  },

  '.avatar': {
    overflow: 'hidden',
    transition: 'all .2s ease-in-out',
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.light
    }
  }
}));

export default HeaderStyled;
