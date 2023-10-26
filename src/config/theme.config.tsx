import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

type ThemeProp = {
    children:JSX.Element,
};

enum themePalette {
 BG = "#FFF ",
 LY = "#D9D9D9;",
 FONT_GLOBAL = 'Montserrat',
 //Alert styles
 ERROR_MAIN = "#f44336",
 BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
 SUCCES_MAIN = "#66bb6a",
 BG_SUCCES_MAIN = "rgba(102,187,106,0.1)"
}

const theme = createTheme({
    palette:{
        mode:"light",
        background:{
            default:themePalette.BG,
        },
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components:{
     MuiAlert:{
        defaultProps:{
            style:{
                borderRadius:"0.8em",
                fontSize:"1em",
            },
        },
        styleOverrides:{
            standardError:{
                border:`1px solid ${themePalette.ERROR_MAIN}`,
                background: themePalette.BG_ERROR_MAIN
            },
            standardSuccess:{
                border: `1px solid ${themePalette.SUCCES_MAIN}`,
                background: themePalette.BG_SUCCES_MAIN,
            }
        }
     }  
      //  MuiAlert .. con esto puedo modificar mis alertas 
    }

})

export const ThemeConfig:React.FC<ThemeProp> = ({children}) => {
    return(
        <div>
            <ThemeProvider theme ={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </div>
    )
}