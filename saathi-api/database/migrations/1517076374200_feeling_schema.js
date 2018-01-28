'use strict'

const Schema = use('Schema')

class FeelingSchema extends Schema {
  up () {
    this.create('feelings', (table) => {
      table.increments()
      table.text('body').notNullable()
      table.string('tags', 256)
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('feelings')
  }
}

module.exports = FeelingSchema
