/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { generate as generateColor } from 'ant-design-palettes';
/**
 * @param {?} message
 * @return {?}
 */
export function printErr(message) {
    console.error("[@ant-design/icons-angular]: " + message + ".");
}
/**
 * @param {?} message
 * @return {?}
 */
export function printWarn(message) {
    console.warn("[@ant-design/icons-angular]: " + message + ".");
}
/**
 * Use ant-design-palettes to generate a secondary color.
 * @param {?} primaryColor
 * @return {?}
 */
export function getSecondaryColor(primaryColor) {
    return generateColor(primaryColor)[0];
}
/**
 * Append a theme suffix to a type.
 * @param {?} name
 * @param {?} theme
 * @return {?}
 */
export function withSuffix(name, theme) {
    switch (theme) {
        case 'fill':
            return name + "-fill";
        case 'outline':
            return name + "-o";
        case 'twotone':
            return name + "-twotone";
        default:
            throw new TypeError("Unknown theme type: " + theme + ", name: " + name);
    }
}
/**
 * @param {?} name
 * @param {?} theme
 * @param {?} pri
 * @param {?} sec
 * @return {?}
 */
export function withSuffixAndColor(name, theme, pri, sec) {
    return withSuffix(name, theme) + "-" + pri + "-" + sec;
}
/**
 * @param {?} abbr
 * @return {?}
 */
export function mapAbbrToTheme(abbr) {
    return abbr === 'o' ? 'outline' : (/** @type {?} */ (abbr));
}
/**
 * @param {?} name
 * @return {?}
 */
export function alreadyHasAThemeSuffix(name) {
    return name.endsWith('-fill') || name.endsWith('-o') || name.endsWith('-twotone');
}
/**
 * @param {?} target
 * @return {?}
 */
export function isIconDefinition(target) {
    return (typeof target === 'object' &&
        typeof target.name === 'string' &&
        typeof target.theme === 'string' &&
        // IconDefinition.icon could be a SVG: We render SVG only once (the first time a icon is used)
        // and return a copy every time after that.
        (target.icon instanceof SVGElement || typeof target.icon === 'string'));
}
/**
 * @param {?} str
 * @return {?}
 */
export function getIconDefinitionFromAbbr(str) {
    /** @type {?} */
    var arr = str.split('-');
    /** @type {?} */
    var theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
    /** @type {?} */
    var name = arr.join('-');
    return (/** @type {?} */ ({
        name: name,
        theme: theme,
        icon: ''
    }));
}
/**
 * @param {?} svg
 * @return {?}
 */
export function cloneSVG(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * @param {?} raw
 * @return {?}
 */
export function replaceFillColor(raw) {
    return raw
        .replace(/['"]#333['"]/g, '"primaryColor"')
        .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
        .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
        .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLElBQUksYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBR2hFLE1BQU0sVUFBVSxRQUFRLENBQUMsT0FBZTtJQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFnQyxPQUFPLE1BQUcsQ0FBQyxDQUFDO0FBQzVELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxPQUFlO0lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWdDLE9BQU8sTUFBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFlBQW9CO0lBQ3BELE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVksRUFBRSxLQUFnQjtJQUN2RCxRQUFRLEtBQUssRUFBRTtRQUNiLEtBQUssTUFBTTtZQUNULE9BQVUsSUFBSSxVQUFPLENBQUM7UUFDeEIsS0FBSyxTQUFTO1lBQ1osT0FBVSxJQUFJLE9BQUksQ0FBQztRQUNyQixLQUFLLFNBQVM7WUFDWixPQUFVLElBQUksYUFBVSxDQUFDO1FBQzNCO1lBQ0UsTUFBTSxJQUFJLFNBQVMsQ0FBQyx5QkFBdUIsS0FBSyxnQkFBVyxJQUFNLENBQUMsQ0FBQztLQUN0RTtBQUNILENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVksRUFBRSxLQUFnQixFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ3pGLE9BQVUsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBSSxHQUFHLFNBQUksR0FBSyxDQUFDO0FBQ3BELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFZO0lBQ3pDLE9BQU8sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQWEsQ0FBQztBQUN0RCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxJQUFZO0lBQ2pELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEYsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsTUFBVztJQUMxQyxPQUFPLENBQ0wsT0FBTyxNQUFNLEtBQUssUUFBUTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTtRQUNoQyw4RkFBOEY7UUFDOUYsMkNBQTJDO1FBQzNDLENBQUMsTUFBTSxDQUFDLElBQUksWUFBWSxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUN2RSxDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsR0FBVzs7UUFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUNwQixLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3hELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUUxQixPQUFPLG1CQUFBO1FBQ0wsSUFBSSxNQUFBO1FBQ0osS0FBSyxPQUFBO1FBQ0wsSUFBSSxFQUFFLEVBQUU7S0FDVCxFQUFrQixDQUFDO0FBQ3RCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFlO0lBQ3RDLE9BQU8sbUJBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBYyxDQUFDO0FBQzNDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQVc7SUFDMUMsT0FBTyxHQUFHO1NBQ1AsT0FBTyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztTQUMxQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO1NBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZSBhcyBnZW5lcmF0ZUNvbG9yIH0gZnJvbSAnYW50LWRlc2lnbi1wYWxldHRlcyc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEVycihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc29sZS5lcnJvcihgW0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXJdOiAke21lc3NhZ2V9LmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRXYXJuKG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFtAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyXTogJHttZXNzYWdlfS5gKTtcbn1cblxuLyoqXG4gKiBVc2UgYW50LWRlc2lnbi1wYWxldHRlcyB0byBnZW5lcmF0ZSBhIHNlY29uZGFyeSBjb2xvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZGFyeUNvbG9yKHByaW1hcnlDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdlbmVyYXRlQ29sb3IocHJpbWFyeUNvbG9yKVswXTtcbn1cblxuLyoqXG4gKiBBcHBlbmQgYSB0aGVtZSBzdWZmaXggdG8gYSB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aFN1ZmZpeChuYW1lOiBzdHJpbmcsIHRoZW1lOiBUaGVtZVR5cGUpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZmlsbCc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tZmlsbGA7XG4gICAgY2FzZSAnb3V0bGluZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tb2A7XG4gICAgY2FzZSAndHdvdG9uZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tdHdvdG9uZWA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gdGhlbWUgdHlwZTogJHt0aGVtZX0sIG5hbWU6ICR7bmFtZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFN1ZmZpeEFuZENvbG9yKG5hbWU6IHN0cmluZywgdGhlbWU6IFRoZW1lVHlwZSwgcHJpOiBzdHJpbmcsIHNlYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3dpdGhTdWZmaXgobmFtZSwgdGhlbWUpfS0ke3ByaX0tJHtzZWN9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEFiYnJUb1RoZW1lKGFiYnI6IHN0cmluZyk6IFRoZW1lVHlwZSB7XG4gIHJldHVybiBhYmJyID09PSAnbycgPyAnb3V0bGluZScgOiBhYmJyIGFzIFRoZW1lVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFscmVhZHlIYXNBVGhlbWVTdWZmaXgobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctZmlsbCcpIHx8IG5hbWUuZW5kc1dpdGgoJy1vJykgfHwgbmFtZS5lbmRzV2l0aCgnLXR3b3RvbmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbkRlZmluaXRpb24odGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgSWNvbkRlZmluaXRpb24ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIHRhcmdldC5uYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiB0YXJnZXQudGhlbWUgPT09ICdzdHJpbmcnICYmXG4gICAgLy8gSWNvbkRlZmluaXRpb24uaWNvbiBjb3VsZCBiZSBhIFNWRzogV2UgcmVuZGVyIFNWRyBvbmx5IG9uY2UgKHRoZSBmaXJzdCB0aW1lIGEgaWNvbiBpcyB1c2VkKVxuICAgIC8vIGFuZCByZXR1cm4gYSBjb3B5IGV2ZXJ5IHRpbWUgYWZ0ZXIgdGhhdC5cbiAgICAodGFyZ2V0Lmljb24gaW5zdGFuY2VvZiBTVkdFbGVtZW50IHx8IHR5cGVvZiB0YXJnZXQuaWNvbiA9PT0gJ3N0cmluZycpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJY29uRGVmaW5pdGlvbkZyb21BYmJyKHN0cjogc3RyaW5nKTogSWNvbkRlZmluaXRpb24ge1xuICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJy0nKTtcbiAgY29uc3QgdGhlbWUgPSBtYXBBYmJyVG9UaGVtZShhcnIuc3BsaWNlKGFyci5sZW5ndGggLSAxLCAxKVswXSk7XG4gIGNvbnN0IG5hbWUgPSBhcnIuam9pbignLScpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICB0aGVtZSxcbiAgICBpY29uOiAnJ1xuICB9IGFzIEljb25EZWZpbml0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVTVkcoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XG4gIHJldHVybiBzdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRmlsbENvbG9yKHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJhd1xuICAgIC5yZXBsYWNlKC9bJ1wiXSMzMzNbJ1wiXS9nLCAnXCJwcmltYXJ5Q29sb3JcIicpXG4gICAgLnJlcGxhY2UoL1snXCJdI0U2RTZFNlsnXCJdL2csICdcInNlY29uZGFyeUNvbG9yXCInKVxuICAgIC5yZXBsYWNlKC9bJ1wiXSNEOUQ5RDlbJ1wiXS9nLCAnXCJzZWNvbmRhcnlDb2xvclwiJylcbiAgICAucmVwbGFjZSgvWydcIl0jRDhEOEQ4WydcIl0vZywgJ1wic2Vjb25kYXJ5Q29sb3JcIicpO1xufVxuIl19