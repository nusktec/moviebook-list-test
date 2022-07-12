## React Native [Test]
## Screenshots

| Splash Screen               |Theme mode 1                          |Theme mode 2                        |
|----------------|-------------------------------|-----------------------------|
|<img src="https://i.ibb.co/B4XvMWT/screenshot-1.jpg" alt="alt text" width="200"/>|<img src="https://i.ibb.co/FDqM95W/screenshot-2.jpg" alt="alt text" width="200"/>            |<img src="https://i.ibb.co/jVV1G2b/screenshot-3.jpg" alt="alt text" width="200"/>            |

*By: nusktecsoft@gmail.com*
*Jump to apk file: https://github.com/nusktec/moviebook-list-test/tree/main/release-build*
Program Requirements and specifications

|                |Details                          |Variant                        |
|----------------|-------------------------------|-----------------------------|
|React|`v 18.0.0`            |`> Only`            |
|React Native          |`v 0.69.1`            |`> Only`            |
|Node          |`v 16.16.0`|`Type script` | `TSX`|
|APK File         |`v 1.0.0`|`./release-build/rn-app-release.apk`|
|Data Source          |`Heroku`|`https://graph-mock.herokuapp.com/movies`|
|Network Agent          |`GraphQL`|`apollo/agent`|

## App Details
> Movie list book for and recommendation app
> It has about 30 list of video fetching from the server and from the unsorted data, my depth search algorithm will take in the unsorted data and sort it locally.
> `Search query` all search pattern and algorithms is locally built to free up the server consumption and to avoid freequent api call. so every search is been calculated over the unsorted data locally.

## Folder Structure
> `App.jsx` *App entry point with router configurations*
> `./core` *This folder contain the major component of this app*
`./core/components/` *child views and dependable component*
>`theme.txs` *color and theming*
>`Util.tsx` *contain core functionalities and classes*


## Extra Features
Features of the application
> `Search parttern` uses depth search algorithm
>`Search Lookup` function is triggered after the 3 char lenght
>`Lookup key` year, author, title, actors, directors


## Night Mode Features
>`Dark Mode Support`
>Built function can listent to the system dark mode realtime
>Use can toggle between night and day mode

## Bugs
>`Array Loop`
>During typing with the live search algorithm, sometime user speed will create multiple search and it will cause duplicate result.
>sometime though, it will be fixed on my next update
