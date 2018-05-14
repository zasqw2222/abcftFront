/**
 * @description 基础API
 * @author --
 * date: --
 */

const baseApi = {
    
    // 邮件搜索 模糊
    ResapiSearchFuzzyHint: {
        method: 'GET',
        url: '/resapi/search/fuzzy/hint',
        right: undefined,
    },
    // 搜索 高级
    ResapiSearchExactHint: {
        method: 'POST',
        url: '/resapi/search/exact/hint',
        right: undefined,
    }
}


export default baseApi