- Planning the App:
    1. Culled from the Udemy class "Angular 9 The Complete Guide (2020 Edition)"
    2. A Root component with two features: (1) Shopping List and (2) Recipe Book.
        a. Also, a Header component.
        b. Our Shopping List will contain a List component and an Edit component.
        c. Our Recipe Book will contain a List, Item, and Detail component.
        d. Model(s): Ingredient, Receipe.
    ```javascript
        ng new angular-complete-guide
        npm install --save bootstrap@3
    ```
    3. Add Bootstrap to the angular.json file:
    ```javascript
        "styles": [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
        ],
    ```
    4. Launch the application:
    ```javascript
    ng serve
    ```
    5. Create the components:
        a. We rolled our own header component.
        b. We'll use the cli to create other components.
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
    6. Standard, classic-style Bootstrap header. No surprises.
    7. Basic Recipe class. Three public properties. Naming convention: recipe.model.ts.
        1. With binding, both will work: Attribute string interpolation versus bind to source 'src' itself with property binding.
        ```javascript
        <img 
            src="{{r.imagePath}}"
            [src]="r.imagePath"
        ```