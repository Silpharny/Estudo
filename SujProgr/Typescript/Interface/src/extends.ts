interface GameProps {
  readonly id: string
  name: string
  description: string
  platform: string[]
}

const fifa: GameProps = {
  id: "1",
  name: "Fifa",
  description: "Jogo de futebol",
  platform: ["PS4", "PS5", "PC"],
}

interface DLC extends GameProps {
  newContent: string[]
}

const fifaDLC: DLC = {
  id: "2",
  name: "Fifa",
  description: "Jogo de futebol",
  platform: ["PS4", "PS5", "PC"],
  newContent: ["Ultimate Team", "Modo Carreira"],
}
