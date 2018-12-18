/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    var regex = getRegExp(prefix);
    /** @type {?} */
    var mentions = value.match(regex);
    return mentions !== null ? mentions.map(function (e) { return e.trim(); }) : [];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUF5Qjs7SUFDakQsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUM5RCxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbkUsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixXQUFXLEdBQUcsTUFBSSxXQUFXLE1BQUcsQ0FBQztLQUNsQztJQUVELE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBVyxXQUFXLGFBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUMxRDs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFhLEVBQUUsTUFBK0I7SUFBL0IsdUJBQUEsRUFBQSxZQUErQjtJQUN4RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQztLQUNYOztJQUNELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDaEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUM3RCIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZ0V4cChwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdKTogUmVnRXhwIHtcbiAgY29uc3QgcHJlZml4QXJyYXkgPSBBcnJheS5pc0FycmF5KHByZWZpeCkgPyBwcmVmaXggOiBbcHJlZml4XTtcbiAgbGV0IHByZWZpeFRva2VuID0gcHJlZml4QXJyYXkuam9pbignJykucmVwbGFjZSgvKFxcJHxcXF4pL2csICdcXFxcJDEnKTtcblxuICBpZiAocHJlZml4QXJyYXkubGVuZ3RoID4gMSkge1xuICAgIHByZWZpeFRva2VuID0gYFske3ByZWZpeFRva2VufV1gO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChcXFxcc3xeKSgke3ByZWZpeFRva2VufSlbXlxcXFxzXSpgLCAnZycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudGlvbnModmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJyk6IHN0cmluZ1tdIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgcmVnZXggPSBnZXRSZWdFeHAocHJlZml4KTtcbiAgY29uc3QgbWVudGlvbnMgPSB2YWx1ZS5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtZW50aW9ucyAhPT0gbnVsbCA/IG1lbnRpb25zLm1hcChlID0+IGUudHJpbSgpKSA6IFtdO1xufVxuIl19