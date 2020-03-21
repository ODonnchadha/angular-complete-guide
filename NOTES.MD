- Basics:
    1. A Root component with two features: (1) Shopping List and (2) Recipe Book.
        - Also, a Header component.
        - Our Shopping List will contain a List component and an Edit component.
        - Our Recipe Book will contain a List, Item, and Detail component.
        - Model(s): Ingredient, Receipe.
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

- Components & Databinding
    1. Concentrating on component communication. Initial solotion is *creative* and *not bad.*
    2. NOTE: Ensure that EventEmitter is obtained from '@angular/core'.
    3. NOTE: Custom events do not propigate upward.