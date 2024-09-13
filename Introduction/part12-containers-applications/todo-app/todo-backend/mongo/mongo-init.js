db.createUser({
  user: 'root',
  pwd: 'Pa$$w0rd',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database'
    }
  ]
})

db.createCollection('todos')

db.todos.insert({ text: 'Write code', done: true })
db.todos.insert({ text: 'Learn about containers', done: false })
