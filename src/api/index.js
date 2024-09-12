// get mock file data
export const getMockFile = () =>
  fetch(`${process.env.PUBLIC_URL}/data/file.json`)
    .then(response => response.json())
    .catch(error => {
      console.dir(error)
      return {err: error}
    })

// get buffer data
export const getBlobData = url =>
  fetch(url)
    .then(response => response.blob())
    .catch(error => {
      console.dir(error)
      return {err: error}
    })

// get buffer data
export const getBufferData = url => {
  return fetch(url)
    .then(response => response.arrayBuffer())
    .catch(error => {
      console.dir(error)
      return {err: error}
    })
}

const reportUrl = 'https://statistcs-hdpt.yy.com/reportGeneralStatistics'
const createFetch = timeout => {
  return (resource, options) => {
    const controller = new AbortController()
    options = options || {}
    options.signal = controller.signal
    const timerId = setTimeout(() => {
      clearTimeout(timerId)
      controller.abort()
    }, timeout)
    return fetch(reportUrl, options)
  }
}

export const reportData = async (userName, fileName) => {
  const reqData = {
    account: userName,
    appid: 1,
    dataType: 'f2c_hand_off_file',
    dim1: userName,
    dim2: fileName,
    dim3: '',
    value1: 1
  }
  try {
    const resp = await createFetch(3000)(reportUrl, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(reqData),
    })
    const res = await resp.json()
    // console.log('f2cDataReport', res)
    if (res && res.result != 200) {
      console.log('上报失败', res.reason, res.result)
    }
  } catch (e) {
    console.error(e)
  }
}