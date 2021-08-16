const awilix = require('awilix')
const { pools } = require('./db')
const userRepository = require('./db/users')
const userManager = require('./controllers/userManager')

const { accountManagerRouters } = require('./routes/accountManager')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

const Lifetime = awilix.Lifetime

container.register({
  dbpool: awilix.asValue(pools),
  userRepository: awilix.asClass(userRepository, { lifetime: Lifetime.SCOPED }),
  userManager: awilix.asClass(userManager, { lifetime: Lifetime.SINGLETON }),
  accountManagerRouters: awilix.asFunction(accountManagerRouters)
})

module.exports = {
  container
}
