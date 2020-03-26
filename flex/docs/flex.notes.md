### FLEX SHORTHAND NOTES:
_'AUTOFIT' - GROW, SHRINK, MINIMUM SIZE_
`flex: 1` -> flex: 1 1 0%

_'EQUAL SIZE' - GROW, SHRINK, AVERAGE SIZE_
`flex: auto`   ->  flex: 1 1 auto

_`SHRINK` - NOT GROW, SHRINK, AVERAGE SIZE OR SMALLER_
`flex: initial`->  flex: 0 1 auto

# NOTES
THE `> *` SELECTOR GETS ALL DIRECT DESCENDANTS OF THE FLEX CONTAINER
WHICH IS IMPLICITLY REQUIRED FOR FLEX PROPERTIES TO WORK

BE CAREFUL NOT TO ADD TOO MANY PROPERTIES INSIDE PLACEHOLDERS BECAUSE IT
CAN BECOME COMPLEX TO DEBUG LATER.

DON'T ADD DISPLAY: `BLOCK` / `INLINE-BLOCK` / ETC. TO `> *` BECAUSE YOU WILL OFTEN
NEED MULTIPLE LEVELS OF FLEX NESTED FLEXBILE BOXES TO CREATE COMPLEX LAYOUTS
AND THIS WILL BE SOMETHING EASILY OVERLOOKED

- 1. ADD THE CLASS DIRECTLY IN HTML OR http://thesassway.com/intermediate/understanding-placeholder-selectors

- 2. EXTEND THE PLACEHOLDERS TO CREATE NEW CLASSES IN THE STYLESHEET

## EXAMPLE:
```
.class {
 @extend %awesome_stuff;
}
```

## SASS BUGS:
-  PLACEHOLDER INSIDE MEDIA QUERY DOES NOT WORK CURRENTLY
-  INSTEAD INCLUDE MEDIA QUERY IN PLACEHOLDER

## FLEX BUGS: https://github.com/philipwalton/flexbugs
- Minimum content sizing of flex items not honored
- Column flex items set to align-items:center overflow their container
- min-height on a flex container won't apply to its flex items
- flex shorthand declarations with unitless flex-basis values are ignored
- Column flex items don't always preserve intrinsic aspect ratios
- The default flex value has changed
- flex-basis doesn't account for box-sizing:border-box
- flex-basis doesn't support calc()
- Some HTML elements can't be flex containers
- align-items: baseline doesn't work with nested flex containers
- Min and max size declarations are ignored when wrapping flex items
- Inline elements are not treated as flex-items
- Importance is ignored on flex-basis when using flex shorthand
- Flex containers with wrapping the container is not sized to contain its items
