import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#223671',
    },
    secondary: {
      main: '#F26526',
    },
  },
  typography: {
    fontFamily: ['Inter-Medium', 'Roboto', 'Open Sans'].join(','),
    body1: {
      fontFamily: "'Inter-Medium' , sans-serif",
    },
  },
  mixins: {
    /** For Toolbar "dense" */
    toolbar: {
      minHeight: 48,
    },
  },
  // shadows: [
  //   {

  //   }
  // ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#000',
          background: '#fff',
          boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '4px 0 0',
        },
      },
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          textTransform: 'none',
          minWidth: 0,
          borderRadius: 6,
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // border: '1px solid #E7EBF0',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '&.Toolbar-toolbar': {
            padding: 0,
          },
        },
      },
      defaultProps: {
        variant: 'dense',
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          position: 'sticky',
          top: 0,
          zIndex: 502,
          '&.TableParts-fixedHeader': {
            zIndex: '502 !important',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 20,
          '&.TableSelectRow-selected': {
            backgroundColor: 'aliceblue !important',
          },
          '& .MuiTableCell-root': {
            '&:not(:nth-last-of-type(-n+1))': {
              borderRight: '1px solid rgba(224, 224, 224, 1) !important',
            },
          },
          '&:hover': {
            '& .MuiTableCell-root': {
              background: '#f6f6f6',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-paddingCheckbox': {
            zIndex: '501 !important',
            padding: '0 !important',
          },
        },
        head: {
          fontFamily: "'Inter-SemiBold' , sans-serif",
          textTransform: 'uppercase',
          color: '#64748B',
          background: '#F8FAFC !important',
          '&.TableFixedCell-fixedCell': {
            background: '#F8FAFC !important',
          },
          // '& .MuiButtonBase-root': {
          //   position: 'static !important'
          // },
          // '& .MuiTableSortLabel-icon': {
          //   position: 'absolute !important',
          //   right: 0
          // },
          '& .disabled-sorting': {
            '& .MuiTableSortLabel-icon': {
              display: 'none',
            },
          },
        },
        body: {
          fontFamily: "'Inter-Medium' , sans-serif",
          padding: '0 8px',
          '&.TableFixedCell-fixedCell': {},
          '&.TableNoDataCell-cell': {
            padding: '120px 0 !important',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#223671',
            color: '#fff',
          },
          '&:hover': {
            backgroundColor: '#e9ebee !important',
            color: '#000 !important',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      // defaultProps: {
      //   margin: 'dense'
      // }
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      // defaultProps: {
      //   margin: 'dense'
      // }
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#CF2B34',
    },
  },
  typography: {
    fontFamily: ['Be Vietnam', 'Roboto', 'Open Sans'].join(','),
    body1: {
      fontFamily: "'Be Vietnam', sans-serif",
    },
  },
  mixins: {
    /** For Toolbar "dense" */
    toolbar: {
      minHeight: 48,
    },
  },
  // shadows: [
  //   {

  //   }
  // ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#fff',
          background: 'rgb(65, 65, 65)',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation4: {
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "'Be Vietnam', sans-serif",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#fff',
          textDecorationColor: '#fff',
        },
      },
    },
  },
});
