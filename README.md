## Apex Legends Data

[Base Endpoint https://apex-legends-api.herokuapp.com](https://apex-legends-api.herokuapp.com) - It's running on Heroku, so it can take some time to boot.

This is a simple API to serve basic data about Apex Legends, available in game.

### Endpoints

Base url: https://apex-legends-api.herokuapp.com

### Legends

- [`/api/v1/legends`](https://apex-legends-api.herokuapp.com/api/v1/legends) - Returns all the available legends.
- [`/api/v1/legends?name=bangalore`](https://apex-legends-api.herokuapp.com/api/v1/legends?name=bangalore) - Finds a legend with the name bangalore.
- [`/api/v1/legends/1`](https://apex-legends-api.herokuapp.com/api/v1/legends/1) - Finds a legend with the number 1.

**Example**

Example response from [http://apex-legends-api.herokuapp.com/api/v1/legends?name=WRAITH](http://apex-legends-api.herokuapp.com/api/v1/legends?name=WRAITH)

```json

{
    "media": {
        "movie": "https://youtu.be/bglAJajZFx4",
        "profile": "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg",
        "wallpaper": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-concept-art/apex-concept-art-wallpaper-wraith.jpg.adapt.crop16x9.1455w.jpg"
    },
    "_id": "5c6212bbb2509a6f64dee0a9",
    "number": 8,
    "name": "WRAITH",
    "motto": "There’s a thin line between life and death. You’ll find me there.",
    "type": "Interdimensional Skirmisher",
    "bio": "Wraith is a whirlwind fighter, able to execute swift and deadly attacks and manipulate spacetime by opening rifts in the fabric of reality — but she has no idea how she got that way. Years ago, she woke up in an IMC Detention Facility for the Mentally Ill with no memory of her life before. She also began hearing a distant voice whispering in her mind that would keep her awake for days on end. Despite nearly driving her insane, once she started to listen and trust it, the voice helped her harness her newfound power of void manipulation and escape the facility. Determined to uncover her true identity, Wraith began a quest to find out more about the experiments. Many of the old research facilities, however, are buried beneath heavily guarded arenas used for the Apex Games. Now Wraith has joined the competition, and with every match she gets closer to the truth.",
    "realName": "Redacted",
    "age": "Redacted",
    "tacticalAbility": "Into the Void",
    "passiveAbility": "Voices from the Void",
    "ultimateAbility": "Dimensional Rift",
    "abilities": [
        {
            "type": "TACTICAL ABILITY",
            "name": "Into the Void",
            "description": "Reposition quickly through the safety of void space, avoiding all damage.",
            "media": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wraith.png"
        },
        {
            "type": "PASSIVE ABILITY",
            "name": "Voices from the Void",
            "description": "A voice warns you when danger approaches. As far as you can tell, it’s on your side.",
            "media": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wraith.png"
        },
        {
            "type": "ULTIMATE ABILITY",
            "name": "Dimensional Rift",
            "description": "Link two locations with portals for 60 seconds, allowing your entire team to use them.",
            "media": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wraith.png"
        }
    ]
}

```

---

[LICENSE -  MIT](LICENSE)
