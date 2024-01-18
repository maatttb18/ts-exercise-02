import { Readable, pipeline } from 'node:stream'
import winston from 'winston'
import characterGenerator from './characterGenerator.js'
import CharacterFilter from './characterFilter.js'
import MessageFormatter from './messageFormatter.js'

const readableStream: Readable = Readable.from(characterGenerator())
const filterFemaleCharacter: CharacterFilter = new CharacterFilter()
const messageFormat: MessageFormatter = new MessageFormatter()

const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

pipeline(
  readableStream, 
  filterFemaleCharacter, 
  messageFormat, 
  logger, 
  (error: Error| null) => {
    if (error) {
      logger.error(error)
    }
  })

