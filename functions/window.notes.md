# THINGS THAT LIVE IN THE BROWSWER WINDOW
 
__Contents:__
- input::placeholder          
- ::selection              
- ::scrollbar              
- input autocomplete styles



## ::placeholder

`::placeholder` styles the placeholder text.           

`:placeholder-shown` is for selecting the input itself
when it's placeholder text is being shown.           

__properties supported:__
 - font properties                                    
 - color                                              
 - background properties                              
 - word-spacing                                       
 - letter-spacing                                     
 - text-decoration                                    
 - vertical-align                                     
 - text-transform                                     
 - line-height                                        
 - text-indent                                        
 - opacity                                            

## @EXAMPLE
```
.foo {
  @include placeholder { color: green; }
}
@include placeholder { color: red; }
```

Output:
```
.foo::-webkit-input-placeholder { color: green; }

::-webkit-input-placeholder { color: red; }
```

### @REFERENCE
- http://stackoverflow.com/questions/17181849/placeholder-mixin-scss-css
- http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixin-content
