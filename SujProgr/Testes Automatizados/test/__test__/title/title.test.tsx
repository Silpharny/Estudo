import { render } from "@testing-library/react-native"

import { Title } from "../../src/title"

describe("testing title component", () => {
  it("shoud render title correctly", () => {
    const { getByText } = render(<Title title="Sil Miranda" />)

    expect(getByText("Sil Miranda")).toBeTruthy()
  })
})
