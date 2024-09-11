import { Stack, Typography } from "@mui/material"

export default function Home() {
	return (
		<Stack direction="column" justifyContent="center" alignItems="center">
			<Typography fontSize={32} py={2}>
				hello darkness, my old friend...
			</Typography>
			<Typography>I've come to talk with you again</Typography>
		</Stack>
	)
}
