'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagensSchema extends Schema {
  up () {
    this.create('imagens', (table) => {
      table.increments()
      table.string('caminhoIMG', 250).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('imagens')
  }
}

module.exports = ImagensSchema
