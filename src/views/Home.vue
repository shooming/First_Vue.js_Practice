<template>
    <div>
        <h1>Welcome to {{title}}</h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="getData">Get</button> <!-- 이벤트가 onclick이 아니라 @click임 -->
        <button type="button" @click="setData">Set</button>
        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
            <!-- :을 사용하여 데이터 변수에 바로 접근, v-modle은 value 바인딩이 가능함-->
        </select>
        <table class="table table-bordered" v-if="tableShow">
            <!-- v-if는 조건에 따라 화면출력 담당 조건이 안맞으면 렌더링도 안함-->
            <!-- v-show는 조건에 따라 화면출력 담당 존건 안맞아도 렌더링은 해둠-->
            <!-- 자주 보여주었다 안보여주었다 할때 show 특정조건에 이르렀을 때만 보여줄때 if-->
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    // 컨트롤하고 싶은 데이터 작성
    data() {
        return {
            title: "개발자입니다",
            title2: "Seoul",
            input1: "abcd",
            options: [
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"B", t:"Busan"},
            ],
            region: "B",
            tableShow: false
        };
    },
    watch: {
        input1() {
            console.log(this.input1)
        },
        title() {
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "12345"
        },
        changeRegion() {
            alert(this.region);
        },
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    }, 
    beforeDestroy() {
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")

    }
}
</script>