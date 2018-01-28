'use strict'

const Schema = use('Schema')

class HelpRequestSchema extends Schema {
  up () {
    // this.create('help_requests', (table) => {
    //   table.increments()
    //   table.text('body').notNullable()
    //   table.integer('user_id')
    //   table.timestamps()
    // })
  }

  down () {
    // this.drop('help_requests')
  }
}

module.exports = HelpRequestSchema
