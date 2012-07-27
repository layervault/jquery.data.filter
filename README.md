## jquery.data.filter

*Because the world is better through a filter.*

At LayerVault, we make heavy use of filtering DOM elements by their data-* attributes. That's because we believe
JavaScript is the worst place to keep your Model.

We might have a dozen or so data-* attributes attached to different DOM elements. You'll be surprised how much
easier your life will be.

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
var sameVersions = $('.Revision').dfilter('project-id', true);
```

Or, give it an array!

```javascript
var versions = $('.Revision').dfilter('project-id', [100, 101]);
```

You can also filter using `true` and `false`. A value of `true` filters elements with that data attribute, even if the attribute is blank. A value of `false` will select all things without that data attribute:

```javascript
var versions = $('.Revision').dfilter('project-id', false); // Selects all revisions without a project-id
```

## Installation

### Quick and Dirty Way

Host and serve out jquery.data.filter.js in a script tag:

```html
<script src="/jquery.data.filter.min.js"></script>
```

### Best Way

Make sure this gets combined into your asset package. It's a small file and it'd be a shame to waste a whole request on it.

## About

jquery.text.fadeto.js was originally developed for [LayerVault](http://layervault.com) by [Kelly Sutton](http://kellysutton.com).

You can see more projects from LayerVault in the [LayerVault Cosmos](http://cosmos.layervault.com).
