module.exports = (query, body) => {
  console.log(query, body)
  return {
    status: 1,
    message: '登录成功',
    user: {
      name: 'liuchengyuan',
      age: 18
    }
  }
}
