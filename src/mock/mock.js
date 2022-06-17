import Mock from 'mockjs'

Mock.mock(`http://${window.location.host}/user`, {
    'name': '@name', // 随机生成姓名
    'email': '@email', // 随机生成邮箱
    'age|1-10': 5, // 年龄1-10之间
});

Mock.mock(`http://${window.location.host}/menu`, {
    'id': '@increment', // id自增
    'name': 'menu', // 名称为menu
    'order|1-20': 5, // 排序1-20之间
})
