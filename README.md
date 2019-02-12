## Apex Legends Data

[Base Endpoint https://apex-legends-api.herokuapp.com](https://apex-legends-api.herokuapp.com) - It's running on Heroku, so it can take some time to boot.

This is a simple API to serve basic data about Apex Legends, available in game.

### Endpoints

Base url: https://apex-legends-api.herokuapp.com

- `/api/v1/legends` - Returns all the available legends.
- `/api/v1/legends?name=bangalore` - Finds a legend with the name bangalore.
- `/api/v1/legends/1` - Finds a legend with the number 1.

### Example

Example response from :

```json

{
    "media": {
      "movie": "https://youtu.be/dSz8Dnj1pdI",
      "profile": "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-caustic-xl.jpg",
      "wallpaper": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-concept-art/apex-concept-art-wallpaper-caustic.jpg.adapt.crop16x9.1455w.jpg"
    },
    "abilities": [],
    "_id": "5c6204f3b2509a6f64ddff5a",
    "number": 3,
    "name": "CAUSTIC",
    "motto": "I don't concern myself with the ambitions of insects.",
    "type": "Toxic Trapper",
    "bio": "Before there was Caustic, a scientist named Alexander Nox worked at Humbert Labs, the Frontier’s leading manufacturer of pesticide gases. With a glut of pesticides needed to protect the growing Frontier colonies’ crops, Humbert Labs was constantly on the hunt for better and stronger formulas. Nox was one of their brightest scientists and worked day and night developing new gases. But to make sure they worked, he needed to test them on more than just inert tissue: he needed something living. As he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. But the head of Humbert Labs soon discovered his gruesome experiments, and their confrontation ended with the lab in flames and its chief dead. Today, Nox is missing and presumed deceased. Caustic, meanwhile, now finds new test subjects in the Apex Games, where he puts his gaseous creations to work and observes their effects with great interest.",
    "realName": "Alexander Nox",
    "age": "48",
    "tacticalAbility": "Nox Gas Trap",
    "passiveAbility": "Nox Vision",
    "ultimateAbility": "Nox Gas Grenade"
}

```

---

[LICENSE -  MIT](LICENSE)
