'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'Auth/AuthenticationController.login')
  Route.post('register', 'Auth/AuthenticationController.register')
  Route.get('me', 'Auth/AuthenticationController.me').middleware(['auth'])
}).prefix('api')


Route.get('api/daily', 'DialyController.getDialy')
Route.get('api/daily/:id', 'DialyController.getDialy')

Route.group(() => {
  Route.get('', 'ItemController.getitem')
  Route.post('', 'ItemController.create')
  Route.post('/:name', 'ItemController.create')
  Route.get('/loop', 'ItemController.loop')

}).prefix('api/items')

Route.group(() => {
  Route.get('', 'StatementController.getall')
  Route.post('saveall', 'StatementController.saveall')


}).prefix('api/statement')

Route.group(() => {
  Route.get('/:username', 'ConfigController.getConfig')
  Route.post('create', 'ConfigController.createConfig')

}).prefix('api/config')