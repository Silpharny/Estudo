type info = {
  id: string
  name: string
  description?: string
}

const productInfo: info = {
  id: "1",
  name: "Placa de video",
  description: "Placa de video RTX 3090",
}

type category = {
  slug: string
  quantity: number
}

const category1: category = {
  slug: "hardware",
  quantity: 2,
}

type infoProduct = info & category

const product: infoProduct = {
  id: "1",
  name: "Placa de video",
  description: "Placa de video RTX 3090",
  slug: "hardware",
  quantity: 2,
}
