"use client"
import { Button, Stack } from "@mui/material"
import { postsNumber } from "@lib/mock/testData"

const length = postsNumber

function generateNumberArray(length: number) {
	return Array.from({ length }, (_, index) => index + 1)
}

const blogLinksData = generateNumberArray(length)

export default function Home() {
	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
			{blogLinksData.map((post) => (
				<Button key={post} variant="text" href={`/blog/${post}`}>
					{`blog post nr ${post}`}
				</Button>
			))}
		</Stack>
	)
}
