- Basics:
    1. A Root component with two features: (1) Shopping List and (2) Recipe Book.
        - Also, a Header component.
        - Our Shopping List will contain a List component and an Edit component.
        - Our Recipe Book will contain a List, Item, and Detail component.
        - Models: Ingredient, Receipe.
    ```javascript
        ng new angular-complete-guide
        npm install --save bootstrap@3
    ```
    2. Add Bootstrap to the angular.json file:
    ```javascript
        "styles": [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
        ],
    ```
    3. Launch the application:
    ```javascript
        ng serve
    ```
    4. Create the components:
        - We rolled our own header component.
        - We'll use the cli to create other components.
    ```javascript
        ng g c recipes
        ng g c recipes/recipe-list
        ng g c recipes/recipe-detail
        ng g c recipes/recipe-list/recipe-item
    ```
        c. And more components.
    ```javascript
        ng g c shopping-list
        ng g c shopping-list/shopping-edit
    ```
    5. Standard, classic-style Bootstrap header. No surprises.
    6. Basic Recipe class. Three public properties. Naming convention: recipe.model.ts.
        - With binding, both will work: Attribute string interpolation versus bind to source 'src' itself with property binding.
    ```javascript
        <img 
            src="{{r.imagePath}}"
            [src]="r.imagePath"
    ```

- Components & Databinding:
    1. Concentrating on component communication. Initial solotion is *creative* and *not bad.*
    2. NOTE: Ensure that EventEmitter is obtained from '@angular/core'.
    3. NOTE: Custom events do not propigate upward.
    4. Custom events:
        - selectedNavigationEvent
        - selectedRecipeToDisplayEvent
        - selectedRecipeEvent
        - addIngredientEvent

- Directives:
    1. NOTE: *ngIf and *ngFor are directives. Now we'll use directives with our drop downs.
    2. So we did not import Bootstrap.js so that Angular is the only thing that interacts with the DOM.
    3. Define how the directive can be added within the decorator. Use an attribute selector. e.g.:
    ```javascript
    @Directive({
        selector: '[appDropdown]'
        })
    ```
    4. In order to leverage this directive, add it to app.component.
    5. Now apply:
    ```javascript
        <div class="btn-group" appDropdown>
    ```

- Services and Dependency Injection:
    1. Hey. Let's add some services. We will centralize tasks and manage data in the same place.
    2. We will add the following:
    - ShopingListService: Manage shopping list, accessable via recipe area.
    - RecipeService: Manageing recipes.
    3. Add service reference to the parent. Accessable to all children.
    ```javascript
        @Component({
            selector: 'app-recipes',
            templateUrl: './recipes.component.html',
            styleUrls: ['./recipes.component.css'],
            providers: [RecipeService]
        })
    ```
    4. One/two punch of constructor injection and getting the values.
    ```javascript
        constructor(private recipeService: RecipeService) { }
        ngOnInit(): void { 
        this.recipes = this.recipeService.getRecipes();
        }
    ```
    5. Now we need to lose the cross-component event emitter(s).
        1. Lots of constructor injection. 
        2. All components, paret and children, receive the same instance of the service.
        3. In the parent component, subscripe to the event:
    ```javascript
        ngOnInit(): void { 
            this.recipeService.recipeSelectedEvent.subscribe((recipe: Recipe) => {
            this.recipe = recipe;
            });
        }
    ```
        - service => recipeSelectedEvent
        - recipe-item => onRecipeSelected
        - parent => .subscribe()
    6. If injecting a service into another service, sigh, we need the following decorator.
    ```javascript
        @Injectable()
        export class RecipeService {
    ```
    7. And then we constructor-inject the service.

- Routing:
    1. NgModule will transform a JavaScript class into a module.
    ```javascript
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
        })
    ```
    2. Register routes.
    3. Remove href="#" in order to ensure that we do not reload.
    4. Child routes with parameters:
    ```javascript
    { path: ':id', component: RecipeDetailComponent }
    ```
        a. We await for this to be set outside of the component:
        ```javascript
            @Input() recipe: Recipe;
        ```
        b. Constructor-inject the router:
        ```javascript
          constructor(private route: ActivatedRoute)
        ```
        c. This will only work the first time that we load the component:
        d. And we will not be able to react to changes in the recipe.
        ```javascript
          ngOnInit(): void {
            const id = this.route.snapshot.params['id'];
          }
        ```
        e. So we will subscribe. Also, this is not a deep copy: this.recipes.slice()[id];

- Observables
    1. 