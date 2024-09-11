import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "src/lib/mock/mockData.json")
const posts = JSON.parse(fs.readFileSync(filePath, "utf-8"))

export default posts
