import Model from './Model'

export default class Todo extends Model {
  // Set the resource route of the model
  resource() {
    return 'todos'
  }
}