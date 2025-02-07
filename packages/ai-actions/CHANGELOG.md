# ai-actions

## 0.8.0

### Minor Changes

- e163836: New createFewShotToolCallMessage helper method

## 0.7.1

### Patch Changes

- 800a349: Fixed bug where input schema wasn't being dezerialized

## 0.7.0

### Minor Changes

- 26988b3: Ability to add an ActionsRegistryProvider and useActionRegistry

## 0.6.0

### Minor Changes

- d503bac: Ability to make a clientActionRegistry that feeds into a createActionComponentRouter

## 0.5.0

### Minor Changes

- 3b94009: New action type "ECHO" that will just bounce back the input schema

## 0.4.1

### Patch Changes

- ca70872: filterActionRegistryByActionType was working backwards, filtering for POST when asking for GET and vice versa. This should be fixed now.

## 0.4.0

### Minor Changes

- 3ae3232: Ability to set function names for each action that will take the place of the Action ID. This is useful when you want your IDs to be slugs and the function names to be camel case.

## 0.3.3

### Patch Changes

- fb9c0ec: Added both unparsed and parsed arguments to the caller results (successes and errors)

## 0.3.2

### Patch Changes

- ba644e5: Added ability to pass an ID alongside TActionCallerInput

## 0.3.1

### Patch Changes

- 4bcc45c: Optimize setup action caller types to avoid recursion errors.

## 0.3.0

### Minor Changes

- 16baf06: New helper methods `setupActionCaller` and `setupFunctionCalling`

### Patch Changes

- 6fd18a6: fixed bug where metadata couldn't be omitted from the object

## 0.2.1

### Patch Changes

- ffc6b79: Fixed bug where the output type of the action function wasn't correct on a GET action

## 0.2.0

### Minor Changes

- 620a9ac: New `generateActionRegistryFunctions` helper function that makes the `createAction` and `createActionRegistry` based on a namespace

## 0.1.1

### Patch Changes

- f813284: Initial publish to npm
