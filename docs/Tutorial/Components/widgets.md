# Widgets

- Smaller components that are combined together to form game screens.
- Stored in *client/src/components/widgets*
- Widgets should also contain their own state/logic if appropriate.

```jsx title="client/src/components/widgets/Widget0.js"
/**
 * Widget 0
 */
const Widget0 = (props) => {
    return (
        <>
            <Typography>Hello from Widget 0.</Typography>
        </>
    )
}

export default Widget0;
```