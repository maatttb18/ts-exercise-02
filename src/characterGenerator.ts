interface Character {
  name: string
}

export default async function* characterGenerator(): AsyncGenerator<Character, void, unknown> {
  let url = 'https://swapi.dev/api/people'

  while (url) {
    const response = await fetch(url)
    const data = await response.json()

    for (const characters of data.results) {
      yield characters as Character
    }

    url = data.next
  }
}