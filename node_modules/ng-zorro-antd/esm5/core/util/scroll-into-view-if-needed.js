/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    // Non-standard
    /* tslint:disable-next-line:no-string-literal */
    if (node['scrollIntoViewIfNeeded']) {
        /* tslint:disable-next-line:no-string-literal */
        node['scrollIntoViewIfNeeded'](false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFpQjs7O0lBSTlDLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7O1FBRWxDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU87S0FDUjtJQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cbiAgLy8gTm9uLXN0YW5kYXJkXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICBpZiAobm9kZVsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgbm9kZVsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobm9kZS5zY3JvbGxJbnRvVmlldykge1xuICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19