import fs from "fs"

export default function ServerComponentTwo() {

    fs.readFileSync("src/components/Server-component-two.tsx" , "utf-8")

  return (
    <div>Server Component Two</div>
  )
}
