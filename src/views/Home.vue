<template>
    <div class="page">
        <h2>Home Page</h2>
        <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
        methods: {
            testAxios() {
                axios
                    .get(`http://${window.location.host}`)
                    .then(res => {
                        alert(res.data)
                    })
            }
        }
    }
</script>
