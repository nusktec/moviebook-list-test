/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
/**
 *
 * @param mode take a bool value from system theme mode (true, false)
 * @constructor
 */
const Colors = function (mode) {
    return {
        /**
         * primaryColor: default on light mode
         */
        primaryColor: mode ? '#000' : '#fff',
        secondaryColor: mode ? '#fff' : '#000',
        textColorMute: mode ? '#929292' : '#929292',
        primaryMute: mode ? '#000000' : '#f4f6f8',
        secondaryMute: mode ? '#f4f6f8' : '#000'
    }
}
export default Colors;