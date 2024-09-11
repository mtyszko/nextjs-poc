"use client"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import {
	Stack,
	Button,
	TextField,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Menu,
	MenuItem,
	Snackbar,
	Select,
	MenuItem as SelectMenuItem,
	Tabs,
	Tab,
	Box,
	SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"
import theme from "@/theme"

export default function Mui() {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
	const [snackbarOpen, setSnackbarOpen] = useState(false)
	const [tabValue, setTabValue] = useState(0)
	const [selectValue, setSelectValue] = useState("")

	const handleDialogOpen = () => setDialogOpen(true)
	const handleDialogClose = () => setDialogOpen(false)

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
		setMenuAnchorEl(event.currentTarget)
	const handleMenuClose = () => setMenuAnchorEl(null)

	const handleSnackbarOpen = () => setSnackbarOpen(true)
	const handleSnackbarClose = () => setSnackbarOpen(false)

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue)
	}
	const handleSelectChange = (event: SelectChangeEvent<string>) => {
		setSelectValue(event.target.value)
	}

	interface TabPanelProps {
		children?: React.ReactNode
		index: number
		value: number
	}

	function CustomTabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		)
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Stack
				spacing={{ xs: 1, sm: 2 }}
				direction="column"
				justifyContent="center"
				alignItems="center"
				mt={2}
			>
				<Button variant="contained" onClick={handleDialogOpen} color="primary">
					MUI Button (Open Dialog)
				</Button>

				<TextField label="MUI TextField" variant="outlined" sx={{ maxWidth: "300px" }} />

				<Dialog open={dialogOpen} onClose={handleDialogClose}>
					<DialogTitle>Dialog Title</DialogTitle>
					<DialogContent>Dialog content goes here...</DialogContent>
					<DialogActions>
						<Button onClick={handleDialogClose}>Close</Button>
					</DialogActions>
				</Dialog>

				<Button
					variant="contained"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleMenuOpen}
				>
					MUI Menu (Open)
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={menuAnchorEl}
					open={Boolean(menuAnchorEl)}
					onClose={handleMenuClose}
				>
					<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
					<MenuItem onClick={handleMenuClose}>My account</MenuItem>
					<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
				</Menu>

				<Button variant="contained" onClick={handleSnackbarOpen}>
					MUI Snackbar (Open)
				</Button>
				<Snackbar
					open={snackbarOpen}
					autoHideDuration={6000}
					onClose={handleSnackbarClose}
					message="This is a Snackbar"
					action={
						<Button color="inherit" size="small" onClick={handleSnackbarClose}>
							UNDO
						</Button>
					}
				/>

				<Select
					value={selectValue}
					onChange={handleSelectChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
					sx={{ maxWidth: "300px" }}
				>
					<SelectMenuItem value="">
						<em>None</em>
					</SelectMenuItem>
					<SelectMenuItem value={10}>Ten</SelectMenuItem>
					<SelectMenuItem value={20}>Twenty</SelectMenuItem>
					<SelectMenuItem value={30}>Thirty</SelectMenuItem>
				</Select>

				<Box>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
							<Tab label="Item One" {...a11yProps(0)} />
							<Tab label="Item Two" {...a11yProps(1)} />
							<Tab label="Item Three" {...a11yProps(2)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={tabValue} index={0}>
						Item One
					</CustomTabPanel>
					<CustomTabPanel value={tabValue} index={1}>
						Item Two
					</CustomTabPanel>
					<CustomTabPanel value={tabValue} index={2}>
						Item Three
					</CustomTabPanel>
				</Box>
			</Stack>
		</ThemeProvider>
	)
}
