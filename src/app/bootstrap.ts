import {bootstrap} from 'angular2/platform/browser';
import TodoApp from './components/todo-app/component'
import {TodoStore} from './components/todo-app/service';

bootstrap(TodoApp, [TodoStore]);
