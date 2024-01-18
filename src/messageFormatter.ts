import { Transform, TransformCallback } from 'node:stream'
import Character from './character.js'

interface FormattedMessage {
  message: string
  level: string
}
export default class MessageFormatter extends Transform {
  constructor(options?:object) {
    super({ ...options, objectMode: true })
  }

  _transform(chunk: Character, encoding: BufferEncoding, nextObject: TransformCallback) {
    const FormattedMessage: FormattedMessage = { message: chunk.name, level: 'info' }
    this.push(FormattedMessage)
    nextObject()
  }
}
