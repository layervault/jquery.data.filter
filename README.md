## jquery.data.filter

*Because the world is better through a filter.*

At LayerVault, we make heavy use of filtering DOM elements by their data-* attributes. That's because we believe 
JavaScript is the worst place to keep your Model.

We might have 

### Old Way

```javascript
var versions = $('.Revision').filter('[data-project-id="' + projectId + '"]');
```

### New Way with jquery.data.filter.js

```javascript
var versions = $('.Revision').dfilter('project-id', projectId);
```

You can even opt to only check against existence of a non-blank data-* attribute:

```javascript
var versions = $('.Revision').dfilter('project-id');
```

## Installation

### Quick and Dirty Way

Host and serve out jquery.data.filter.js in a script tag:

```html
<script src="/jquery.data.filter.js"></script>
```

### Best Way

Make sure this gets combined into your asset package. It's a small file and it'd be a shame to waste a whole request on it.

## Authors

jquery.data.filter.js is created and maintained by [Kelly Sutton](http://kellysutton.com) of [LayerVault](http://layervault.com). It is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License). 
