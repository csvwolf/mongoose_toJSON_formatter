# mongoose_toJSON_formatter
format toJSON function: rename _id to id

## Usage

```javascript
// Global
mogoose.plugin(require('mongoose-tojson-formatter'));

// In Schema
var Game = new Schema({ ... });
Game.plugin(require('mongoose-tojson-formatter'));
```

## TODO
- [ ] Use config to configure more features not only rename _id.
