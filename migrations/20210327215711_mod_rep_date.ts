import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', table => {
    table.renameColumn('lastRepTime', 'lastRepDate')
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', table => {
    table.renameColumn('lastRepDate', 'lastRepTime')
  })
}

