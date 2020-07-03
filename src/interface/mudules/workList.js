import request from '@/utils/request.js'


/**
 * 条件查询+分页
 * @param params
 */
export const findSearch = (params, page, size) => {
  return request({
    url: '/WorkList/search/' + page + "/" + size,
    method: 'get',
    params: params
  })
}

/**
 * 获取序列
 * @param id
 */
export const getSeriesInstanceUID = (id) => {
  return request({
    url: '/WorkList/SeriesInstanceUID/' + id,
    method: 'get'
  })
}

/**
 * 获取文件夹列表
 * @param id
 */
export const getDirectoryList = () => {
  return request({
    url: '/WorkList/getDirectoryList',
    method: 'get'
  })
}

/**
 * 导入文件
 * @param id
 */
export const scanDicomFolder = (data) => {
  return request({
    url: '/WorkList/scanDicomFolder',
    method: 'post',
    data: data
  })
}


/**
 * 获取导入文件夹的进度
 * @param id
 */
export const getScanDicomFolderProgress = (key) => {
  return request({
    url: '/WorkList/getScanDicomFolderProgress/' + key,
    method: 'get',
  })
}

/**
 * 清除记录
 * @param id
 */
export const clearRecords = () => {
  return request({
    url: '/WorkList/clearRecords',
    method: 'delete',
  })
}


/**
 * 停止导入
 * @param id
 */
export const stopImport = (data) => {
  return request({
    url: '/WorkList/stopImport',
    method: 'post',
    data: data
  })
}

/**
 * 打开文件
 * @param id
 */
export const openDicomFolder = (data) => {
  return request({
    url: '/WorkList/openDicomFolder',
    method: 'post',
    data: data
  })
}
