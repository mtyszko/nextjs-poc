import posts from "@lib/mock/mockData"
import { Button, Stack, Typography } from "@mui/material"
import Image from "next/image"

interface Post {
	id: string
	title: string
	images: string | string[]
	content: string
}

interface Params {
	id: string
}

export async function generateStaticParams() {
	return posts.map((post: Post) => ({
		id: post.id,
	}))
}

export default async function PostPage({ params }: { params: Params }) {
	const post: Post | undefined = posts.find((post: Post) => post.id === params.id)

	if (!post) {
		return <div>Post not found</div>
	}

	return (
		<Stack alignItems="center">
			<Stack spacing={2} sx={{ maxWidth: 800, paddingBottom: 3 }} direction="column">
				<Button variant="text" href="/blog" sx={{ padding: "32px 0 0" }}>
					back to blog main page
				</Button>
				<Image
					src={Array.isArray(post.images) ? post.images[0] : post.images}
					width={800}
					height={300}
					alt="Primary image"
				/>
				<Typography fontSize={32} sx={{ padding: "0 16px" }}>
					{post.title}
				</Typography>
				<Typography>{post.content}</Typography>
				{Array.isArray(post.images) &&
					post.images
						.slice(1)
						.map((image: string, index: number) => (
							<Image key={index} src={image} width={800} height={300} alt={`Image ${index + 2}`} />
						))}
			</Stack>
		</Stack>
	)
}
