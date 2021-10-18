# responsive-navbar

## Customization

### Slots

- `close-icon`
- `menu-icon`
- `logo`
- `navlinks`

### CSS

- `--navbar-background-color`
- `--menu-background-color`

## Working Example

### HTML

```html
  <responsive-navbar>
    <ul slot="navlinks" class="navlinks__list">
      <li><a href="/#">Home</a></li>
      <li><a href="/#">About</a></li>
      <li><a href="/#">Contact</a></li>
    </ul>
  </responsive-navbar>
```

### CSS

```css
responsive-navbar {
  --navbar-background-color: #000000;
  --menu-background-color: #000000;
  color: #ffffff;
}
.navlinks__list {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}

.navlinks__list li {
  margin-right: 1rem;
  text-transform: uppercase;
}

.navlinks__list li:last-of-type {
  margin: none;
}

.navlinks__list li a {
  color: inherit;
  text-decoration: none;
}

@media only screen and (max-width: 475px) {
  .navlinks__list {
    margin: 3rem;
    align-items: flex-start;
    flex-direction: column;
  }

  .navlinks__list li {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
}
```