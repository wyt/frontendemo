<template>
    <div class="page">
        <h2>Home Page</h2>
        <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
        <el-button type="primary" @click="getUser()">获取用户信息</el-button>
        <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
    </div>
</template>

<script>
    import axios from 'axios'
    // eslint-disable-next-line no-unused-vars
    import mock from '../mock/mock.js'

    export default {
        name: 'Home',
        methods: {
            testAxios() {
                axios
                    .get(`http://${window.location.host}`)
                    .then(res => {
                        alert(res.data)
                    })
            },
            getUser() {
                axios
                    .get(`http://${window.location.host}/user`)
                    .then(res => {
                        alert(JSON.stringify(res.data))
                    })
            },
            getMenu() {
                axios
                    .get(`http://${window.location.host}/menu`)
                    .then(res => {
                        alert(JSON.stringify(res.data))
                    })
            }
        }
    }
</script>
