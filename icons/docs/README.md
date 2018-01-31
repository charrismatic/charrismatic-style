# CREATE CSS ICONS SVG PATHS
SUPPORTS FONT-AWESOME
DEMO: ww.codepen.io/super_thalamus/pen/wdyeGp


To define reusable classes in this way it is recommended to to a map
and use mixins and functions to build out your set of elements

Resources and examples of how to do this
https://www.viget.com/articles/sass-with-maps
https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184
http://clubmate.fi/sass-maps-syntax-examples-and-good-things/
https://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps
http://blog.grayghostvisuals.com/sass/real-sass-real-maps/

Codepen example
https://codepen.io/super_thalamus/pen/RZVWbY

**See icons_factory_example.scss for more**


KNOWN BUGS:
FIREFOX DOES NOT RENDER INLINE SVG USING HEX COLOR VALUES,
IE DOESNT LIKE NON URL ENCODED SVG LINKS
I'VE ADDED A URL ENCODING STEP TO ESCAPE URL CHARACTERS


HOW TO USE:

CREATE AN ICON CLASS

DEFINE THE CUSTOM ICON CLAS TO SET THE ICON BACKGROUND IMAGE
  SVG PROPERTIES SHOULD BE SET HERE SINCE NOT ALL CSS
  PROPERTIES ARE USED IN SVG'S

.ic-icon-name:hover { background-image: define_icon( path_variable, fill_color, options }


ADD NEW FONTS TO THE PATH MAP:
VISIT https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg
SELECT THE FONT
CLICK ON 'VIEW SOURCE'
COPY THE VECTOR PATH AND ADD IT TO $ic_path_map IN `_get_icon_path()`
\* PLEASE USE THE FONTS ORIGINAL NAME AS THE VARIABLE IDENTIFIER INSIDE
  THAT PATH MAP FOR CONSISTENCY

YOU CAN ALSO EXPORT A CUSTOM SET USING FONT-AWESOME-SVG NODE PACKAGE
https://www.npmjs.com/package/font-awesome-svg

BROWSER SUPPORT: HIGH
http://caniuse.com/#feat=svg-css



## OPTIONS:
```
@paramater $ic_name icon path variable name
@parameter $fill_color svg fill color  [default: black]
@parameter $stroke_color svg stroke color [default: transparent]
@parameter $stroke_width svg stroke width [default: 0]
@parameter $extra_css additional svg styles [default: null]
```

YOU CAN ALSO DEFINE ICON STATES AND CLASS MODIFIERS HERE
  :HOVER, :FOCUS, .ACTIVE, ETC.

CUSTOM ICONS INHERIT THE DEFAULT CSS PROPERTIES FROM
THE i ELEMENT OR THE `.icon` CLASS

USE THE `i` ELEMENT FOR A SIMPLE HTML ELEMENT
APPLY THE `.icon` CLASS TO MODIFY AN EXTEND AN EXISTING ELEMENT

```
 .icon,
 i {
   display: inline-block;
   font-size: 0;
   width: 50px;
   height: 50px;
   margin: 10px 20px;
   background-size: 80%;
   background-repeat: no-repeat;
   background-position: 50% 50%;
   transition: .2s linear;
   cursor: pointer;
 }
```

## PLACEHOLDER

TO INCORORATE YOUR OWN SYNTAX AND THEME ELEMENTS

EXTEND `%svg_icon` THE SASS PLACEHOLDER

```
  .new_thing {
    @extend %svg_icon;

    //other-css-properties ...
  }
```


THEN DEFINE YOUR OWN PLACEHOLDER TO APPLY THE ICON SHAPE

CSS STYLE
```
%ic-search--light { background-image: define_icon(search, rgb(225,225,225)); }
%ic-search--light:hover { transform: scale(1.1); }
%ic-search--light.active {
  background-image: define_icon(search, rgb(0,255,255));
  background-color: rgb(255,0.255);
}
```

OR DEFINE A SET OF RELATED ICONS AT ONCE WITH NESTED STYLE
NESTED STYLE

```
%ic-monster {
  background-image: define_icon(monsters, rgb(255,0,0));
  &--frankenstein {
    background-image: define_icon(frankenstein, rgb(0,255,0));
    &.running { animation: running-frankenstein; }
    &.alive {
      transform: scale(2);
      transition: transform 4000ms linear 50ms;

      &:hover { content: "HEEEESSS ALIIIVE!! ALIIIVEEE!" }
    }
  }

  &--chupacabra { background-image: define_icon(goats, rgb(74, 23, 186)); }
}
```

---

__Notes:__

### Extending Nested Placeholders

There are some tricky things with using nested placeholders.

Try not to be too complicated with your definitions or you may run into
trouble later on.

The following works.

====
#### Inheritance
====
```
%class {
  property: value;

  > * {
    property: value;
  }
}

.parent {
  @extend %class;
}
```

#### Results in
```
.parent {
  property: value;
}

.parent > * {
  property: value;
}
```

===
#### Combinators
===
```
.box {
  shape: boxy;

  &.red { color: red; }
  &.big { size: big; }
}

.sqaure {
  @extend %box;
}
```

#### Results in
```
.square { shape: boxy; }
.square.red { color: red; }
.square.big { size: big; }
```

===  
#### Extreme case
===
```
.complicated {
  think: carefully;

  > .title {}
  &: hover {}
  .continue {
    thing: style;

    &:nth-child(2n+1) {
      still: works;
    }
    ...
  }
}
```

---

#### However, the following does NOT work

===
#### Nested media queries
===
```
%big_version {
  ...
  @media query() {
    //small version
    & {
      ...
    }
  }
}
```
\* This will throw a fatal error during compilation

_Media queries that wrap the placeholder are acceptable_
```
@media query(bog) {
  %big_version {
    ...
  }
}
```

And there are techniques to use the `@content` function with `@at-root` to make this work

but the logic is slightly complicated to understand what the output will render.

Some combination of the effects below can make media queries work inside of a placeholder;

REFERENCE http://stackoverflow.com/questions/17181849/placeholder-mixin-scss-css

REFERENCE http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixin-content

_NOTE: Future versions of SASS may not have these problems, and there are differences
from LibSass and Ruby Sass_
```
@mixin optional-at-root($sel) {
  @at-root #{if(not &, $sel, selector-append(&, $sel))} {
    @content;
  }
}

%flex {
  display: flex;

  @at-root {
    // UL.FLEX HAS LI AS CHILDREN
    ul#{&} {
      \> li {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
        margin: 0 1em;
      }
      \> li:first-child { margin-left: 0; }
      \> li:last-child { margin-right: 0; }
  }
}
```

===
#### Nested Combinators do work like you think
===
```
.stylish {
  &--guy {}
  &--lady {}
  &--dog {}
  &--cat {}
}
```
 Results in
```
.stylish {}
.stylish--guy {}
.stylish--lady {}
.stylish--dog {}
.stylish--cat {}
```
