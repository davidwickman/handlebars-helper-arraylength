This helper returns the length of an array. 

## Features

* Get array length from array.


## Examples

Given the following JSON, a helper can be used to get the length of the array. 

```json
{
    "users": [
        {
            "name": "Thomas Tyrrell"
        },
        {
            "name": "Rickie Leopold"
        },
        {
            "name": "Donny Zeph"
        }
    ]
}
```

Usage: `{{ arraylength users }}`

Output: `3`
