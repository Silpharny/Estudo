type UID = string | number | null

function user(uid: UID, name: string) {}

function login(uid: UID) {}

user(123, "John Doe")
login(123)

type coinType = "BRL" | "USD" | "EUR"
function buyItem(coin: coinType) {}

buyItem("BTC")
