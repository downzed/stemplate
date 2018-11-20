


# core.popup

popups dynamically.

* simple popup ( automatically wrapped with a material-ui dialog )
```js
core.popup(popup => 'This text will appear inside a popup', { title: 'My Popup', id: '123' });
```

* custom popup ( no wrapper )
```js
core.popup({
    render(popup){
        return (
            <MyCustomPopup 
                isOpen={ popup.isOpen }
                onClose={ e => popup.close() }/>
    }
});
```
 