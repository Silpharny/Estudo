/* interface TechnologyProps {
  id: string
  name: string
  slug: string[]
}

let technology1: TechnologyProps = {
  id: "1",
  name: "JavaScript",
  slug: ["js", "javascript"],
} */

interface TechnologyProps {
  id: string
  name: string
  description?: string
}

interface NamesProps {
  technologies: TechnologyProps[]
}

let frontend: NamesProps = {
  technologies: [
    {
      id: "1",
      name: "JavaScript",
      description: "JavaScript is a programming language",
    },
    {
      id: "2",
      name: "TypeScript",
      description: "TypeScript is a programming language",
    },
  ],
}
