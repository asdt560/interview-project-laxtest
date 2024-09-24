# InterviewProjectLaxtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Questions

Describe the pros and cons of a few methods of communication between Angular components.
* @Input Decorator
  - Pros: simple to use, can use property binding to modify input, can combine with @Output
  - Cons: Only parent to child communications
* The @Output Decorator
  - Pros: simple to use, uses EventEmitter to send an update whenever you want, can combine with @Input
  - Cons: Only child to parent communications
* The @ViewChild Decorator
  - Pros: obtains a reference to child which can access properties and methods freely
  - Cons: Only child-parent communications, change detection problems exist
* Service as an Intermediary
  - Pros: Allows any component that imports the service to use the information, good if multiple otherwise unrelated components need the same information
  - Cons: Not many, but for small scale communications it is cumbersome, only use for scale
* NgRx
  - Pros: Centralizes state management for application, good for large and complex state, has similarities with other state management tools.
  - Cons: Initial boilerplate code, may not be worth it in smaller app, harder to learn to use.
* Route Parameters
  - Pros: simplicity, allows receiver to get data from anywhere, user can just save a specific route and use it if they wish.
  - Cons: requires page reload, need to account for page reload and for user using route directly
Describe 3 things you dislike about Angular.
- Lots of mandatory Boilerplate code, though partially alleviated by using angular CLI to generate new components.
- SEO requires additional work due to the way content is generated.
- It can be hard to update between versions.
If there are any items that you did not complete, please list them out.
If you had 40 hours to work on this project, please describe all the improvements you would incorporate:
- Add placeholder to smooth out the initial load of the table data.
- Improve styles to make it look better overall.
- Add thorough testing.
- Look into the API endpoints, add some kind of search bar to quickly find specific entries.
- Inquire as to the user requirements and common features in similar websites, see about adding the more important ones.