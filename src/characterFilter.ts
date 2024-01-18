import { Transform, TransformCallback } from 'node:stream'
import Character from './character.js'

export default class FilterFemaleCharacter extends Transform {
  constructor(options?: object) {
    super({ ...options, objectMode: true })
  }

  _transform(chunk: Character, encoding: BufferEncoding, nextObject: TransformCallback): void {
    if (chunk.gender === 'female') {
      this.push(chunk)
    }

    nextObject()
  }
}
