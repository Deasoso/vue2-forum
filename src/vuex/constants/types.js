/**
 * type分2种：一种是用于mutation，以动词为前缀，对state进行改造，一种是用于getter，获得state派生数据
 * 
 * 以动词为前缀的type一般后面还带有这个动作执行的状态，比如不要写成FETCH_LOGIN，而是FETCH_LOGIN_SUC和FETCH_LOGIN_ERR。要像程序一样，从开始通过不同流程执行走。
 * 而后面没有带状态的type一般表示确定会执行到的状态，比如USER_LOGOUT表明成功注销的状态。
 */

// login
export const FETCH_LOGIN_REQ = 'FETCH_LOGIN_REQ'  //用于请求时防止再次请求
export const FETCH_LOGIN_SUC = 'FETCH_LOGIN_SUC'
export const FETCH_LOGIN_ERR = 'FETCH_LOGIN_ERR'
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN"
export const FETCH_USERINFO = 'FETCH_USERINFO'
export const USER_LOGOUT = 'USER_LOGOUT'

//topic(list)
export const FETCH_TOPIC_REQ = 'FETCH_TOPIC_REQ'
export const FETCH_TOPIC_SUC = 'FETCH_TOPIC_SUC'
export const FETCH_TOPIC_ERR = 'FETCH_TOPIC_ERR'
export const CLEAR_TOPIC_TAB_DATA = 'CLEAR_TOPIC_TAB_DATA'
export const CHANGE_TOPIC_DATA_PAGE = 'CHANGE_TOPIC_DATA_PAGE'
//topoc(release)
export const FETCH_RELEASE_REQ = 'FETCH_RELEASE_REQ'
export const FETCH_RELEASE_SUC = 'FETCH_RELEASE_SUC'
export const FETCH_RELEASE_ERR = 'FETCH_RELEASE_ERR'
export const CHANGE_BTN_TEXT = 'CHANGE_BTN_TEXT'

//topic detail
export const FETCH_DETAIL_REQ = 'FETCH_DETAIL_REQ'
export const FETCH_DETAIL_SUC = 'FETCH_DETAIL_SUC'
export const FETCH_DETAIL_ERR = 'FETCH_DETAIL_ERR'
export const CLEAR_DETAIL_DATA = 'CLEAR_DETAIL_DATA'
export const SHOW_COMMENT_PAGE = 'SHOW_COMMENT_PAGE'
export const HIDE_COMMENT_PAGE = 'HIDE_COMMENT_PAGE'
export const FETCH_COMMENT_REQ = 'FETCH_COMMENT_REQ'
export const FETCH_COMMENT_SUC = 'FETCH_COMMENT_SUC'
export const FETCH_COMMENT_ERR = 'FETCH_COMMENT_ERR'
export const CHANGE_ISFIRST_STATE = 'CHANGE_ISFIRST_STATE'
export const TOGGLE_COLLECT_TOPIC = 'TOGGLE_COLLECT_TOPIC'

//message
export const FETCH_MESSAGE_REQ = 'FETCH_MESSAGE_REQ'
export const FETCH_MESSAGE_SUC = 'FETCH_MESSAGE_SUC'
export const FETCH_MESSAGE_ERR = 'FETCH_MESSAGE_RER'
export const FETCH_MARK_ALL_REQ = 'FETCH_MARK_ALL_REQ'
export const FETCH_MARK_ALL_SUC = 'FETCH_MARK_ALL_SUC'
export const FETCH_MARK_ALL_ERR = 'FETCH_MARK_ALL_ERR'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

/************************common*****************************/
// appbar
export const CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT'

//infopopup
export const SHOW_INFOPOPUP = "SHOW_INFOPOPUP"
export const HIDE_INFOPOPUP = "HIDE_INFOPOPUP"
export const DEFINE_INFOPOPUP_MSG = "DEFINE_INFOPOPUP_MSG"
export const DEFINE_INFOPOPUP_STATE = "DEFINE_INFOPOPUP_STATE"
export const DEFINE_INFOPOPUP_BOTTOM = "DEFINE_INFOPOPUP_BOTTOM"

//dialogalert
export const SHOW_DIALOGALERT = "SHOW_DIALOGALERT"
export const HIDE_DIALOGALERT = "HIDE_DIALOGALERT"

//releasepage
export const SHOW_RELEASEPAGE = "SHOW_RELEASEPAGE"
export const HIDE_RELEASEPAGE = "HIDE_RELEASEPAGE"

//topics detail
export const SHOW_DETAIL_PAGE = 'SHOW_DETAIL_PAGE'
export const HIDE_DETAIL_PAGE = 'HIDE_DETAIL_PAGE'

//bottomnav
export const SWITCH_ROUTE_PAGE = "SWITCH_ROUTE_PAGE"
/************************common*****************************/


/************************getter*****************************/
//appbar
export const TITLE_TEXT = "TITLE_TEXT"

//login
export const COLLECTS_COUNT = 'COLLECTS_COUNT'
export const REPLIES_COUNT = 'REPLIES_COUNT'
export const RECENT_COUNT = 'RECENT_COUNT'

// message
export const HAS_NOT_READ_MESSAGES_COUNT = 'HAS_NOT_READ_MESSAGES_COUNT'
export const HAS_READ_MESSAGES_COUNT = 'HAS_READ_MESSAGES_COUNT'


/************************getter*****************************/