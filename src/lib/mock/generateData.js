import fs from "fs"
import path from "path"
import { texts } from "./texts.js"
import { postsNumber } from "./testData.js"

export const length = postsNumber

function getRandomImages() {
	const numberOfImages = Math.floor(Math.random() * 5) + 1
	const imageUrls = []

	for (let i = 0; i < numberOfImages; i++) {
		const randomId = Math.floor(Math.random() * 400) + 1
		const imageUrl = `https://picsum.photos/id/${randomId}/800/300`
		imageUrls.push(imageUrl)
	}

	return imageUrls.length === 1 ? imageUrls[0] : imageUrls
}

const posts = Array.from({ length: length }, (_, index) => ({
	id: index.toString(),
	title: `Blogpost ${index + 1}`,
	images: getRandomImages(),
	content: `This is the content for blogpost ${index + 1}.
  ${texts[Math.floor(Math.random() * 5)]}`,
}))

const filePath = path.join(process.cwd(), "src/lib/mock/mockData.json")
fs.writeFileSync(filePath, JSON.stringify(posts, null, 2))
