"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#4FD465",
			light: "#75DD83",
			dark: "#3BBA5D",
			contrastText: "#24293b",
		},
	},
})

export default theme

type DefaultTheme = {
	primary300: string
	primary400: string
	primary600: string
	textColor: string
	backgroundColor: string
}

export const defaultTheme: DefaultTheme = {
	primary300: "#75DD83",
	primary400: "#4FD465",
	primary600: "#3BBA5D",
	textColor: "#24293b",
	backgroundColor: "white",
}
