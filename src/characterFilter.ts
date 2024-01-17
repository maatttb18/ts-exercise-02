import { Transform, TransformCallback } from 'node:stream'

interface Character {
  gender: string
}

export default class FilterFemaleCharacter extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  _transform(chunk: Character, encoding: BufferEncoding, nextObject: TransformCallback) {
    if (chunk.gender === 'female') {
      this.push(chunk)
    }

    nextObject()
  }
}