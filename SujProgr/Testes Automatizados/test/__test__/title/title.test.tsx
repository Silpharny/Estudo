import { render } from "@testing-library/react-native"

import { Title } from "../../src/title"

describe("Tests title component", () => {
  it("should render title correctly", () => {
    const { getByText } = render(<Title title="Sil Miranda" />)

    expect(getByText("Sil Miranda")).toBeTruthy()
  })

  it("should check style", () => {
    const { getByText } = render(<Title title="Sil Miranda" />)

    const titleElement = getByText("Sil Miranda")

    expect(titleElement.props.style).toMatchObject({
      fontSize: 24,
      marginTop: 14,
      fontWeight: "bold",
      color: "red",
    })
  })
})
