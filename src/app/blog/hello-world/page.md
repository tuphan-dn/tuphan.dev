# Welcome to my MDX page!

## Contents

## GFM

This is some **bold** and _italics_ text.

This is a list in markdown:

- One
- Two
- Three

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Math

Math formula $y = ax^2 + bx + c$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## Code

Checkout my React component:

```tsx label="awesome.tsx"
import Animal from 'animal'

const cat = new Animal('Cat')
cat.speak()
```

```mdx label="table.mdx"
| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
```

```tsx label="awesome.tsx" group="animal"
import Animal from 'animal'

const cat = new Animal('Cat')
cat.speak()
```

```rs label="awesome.rs" group="animal"
use animal;

const cat = animal::new('Cat');
cat.speak();
```

```py label="awesome.py" group="animal"
from animal import Animal

cat = Animal('Cat')
cat.speak()
```
