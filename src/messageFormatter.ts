import { Transform, TransformCallback } from 'node:stream'

interface Character {
  name: string
}

interface formattedMessage {
  message: string
  level: string
}
export default class MessageFormatter extends Transform {
  constructor(options?:any) {
    super({ objectMode: true, ...options })
  }

  _transform(chunk: Character, encoding: BufferEncoding, nextObject: TransformCallback) {
    const formattedMessage: formattedMessage = { message: chunk.name, level: 'info' }
    this.push(formattedMessage)
    nextObject()
  }
}
