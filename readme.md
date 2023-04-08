# Dev (Meteor Wallet)

```
// install dependencies
> yarn

// run ui building things (needed for dev)
> yarn run watch-meteor-ui

// start dev for web platform
// inside "/packages/meteor_wallet/platform_web"
> yarn run dev

// start dev for android platform
// inside "/packages/meteor_wallet/platform_react_native"
> yarn run start-android
```

# UI Styling and Component Layout

(Using Meteor Wallet as an example)

The main Tamagui styled components and config files are located in these two packages:

* `packages/common/ui`
* `packages/meteor_wallet/ui`

The common UI package is what is shared between all output projects (Meteor Wallet and My Near Wallet).
In this case, `packages/meteor_wallet/ui` imports `packages/common/ui`, and extends and specifies styles and components
which are specific to Meteor Wallet.

The main app is created inside the respective `app` package in each project folder:

e.g. `packages/meteor_wallet/app`

This imports from their respective UI package for styles and components.
In this case, that would be `packages/meteor_wallet/ui`. UI and Style Configuration should not
be changed here- but it is re-exported for use in the output platforms for the app:

* `packages/meteor_wallet/platform_web`
* `packages/meteor_wallet/platform_react_native`
