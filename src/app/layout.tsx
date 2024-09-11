import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/theme"
const inter = Inter({ subsets: ["latin"] })
const pages = ["Home", "MUI", "Radix", "ShadCn", "Custom"]
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

export const metadata: Metadata = {
	title: "UI POC",
	description: "POC for UI libaries research",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<body className={inter.className}>
						<AppBar position="static">
							<Container maxWidth="xl">
								<Toolbar disableGutters>
									<Box
										sx={{
											flexGrow: 1,
											display: { xs: "none", md: "flex" },
											justifyContent: "flex-end",
										}}
									>
										{pages.map((page) => (
											<Button
												key={page}
												variant="text"
												color="primary"
												sx={{ my: 2, color: "white", display: "block" }}
												href={`/${page === "Home" ? "" : page.toLowerCase()}`}
											>
												{page}
											</Button>
										))}
										<Button
											key="blog"
											variant="text"
											color="primary"
											sx={{ my: 2, color: "white", display: "block" }}
											href={`/blog`}
										>
											blog
										</Button>
									</Box>
								</Toolbar>
							</Container>
						</AppBar>
						{children}
					</body>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</html>
	)
}
