<template>
  <div>Jsonplaceholder</div>
  <!-- 1개만 사용할 경우 -->
  <!-- <input type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"> -->
  <input type="text"
          :value="userIdValue"
          @input="$emit('update:userIdValue', $event.target.value)">
  <input type="text"
          :value="titleValue"
          @input="$emit('update:titleValue', $event.target.value)">
  <br/>
  <button @click="postData">Save</button>
  <button @click="putData">Update</button>
  <button @click="deleteData">Delete</button>
  <br/><br/><br/>
  <button @click="getData">jsonplaceholder get</button>
  
  <table border="1" align="center" v-if="result === 'Y'">
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ user.userId }}</td>
        <td>{{ user.id }}</td>
        <td>{{ user.title }}</td>
        <td>{{ user.completed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<!-- methods: 사용 안하고
  바로 정보 불러오고 싶을때는 created: {}, setup() -->
<script>
  import axios from 'axios';

  const HOST = "https://jsonplaceholder.typicode.com/todos";
  console.log(HOST);
  export default {
    props: {
      titleValue: {
        type: String,
        required: true
      },
      userIdValue: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        result: 'N',
        users: ""
      }
    },
    methods: {

      // 참고자료
      // https://veneas.tistory.com/entry/axiosjs-GET-POST-%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EC%84%9C%EB%B2%84%EC%99%80-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0

      // ******************** 서버 통신 방식 (GET) ********************
      // axios({
      //   method: 'get',
      //   url: '/test',
      //   params: {
      //     name: 'veneas'
      //   }
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

       // ******************** 서버 통신 방식 (POST) ********************
      // axios({
      //   url: '/test',
      //   method: 'post',
      //   data: {
      //     name: 'veneas'	
      //   }
      // })
      // .then(function a(response) { 
      //   console.log(response) 
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });


      getData() {
        // axios.get을 사용하여 서버의 데이터를 불러오는 것을 요청할 수 있다. 
        // 이때 첫번째 parameter에는 axios에 전달할 서버의 url이 들어간다. 
        // 두번째 parameter에는 config 객체를 선택적으로 추가 전달을 할 수 있다. 
        // 이는 아래 예제에서 확인할 수 있다.
        axios.get(HOST)
        // .get(HOST + "/api/getData", {
        //   headers: { "X-AUTH-TOKEN": "인증 받음을 증명하는 토큰" },
        // })
        .then((res) => {
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          this.users = res.data;
          this.result = "Y"
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
      },
      postData() {
        // axios.post를 사용하여 서버의 데이터에 입력을 할 수 있다. 위는 입력할 data를 json 형태로 담아 보낼때의 예제이다.
        // 첫번째 parameter에는 axios에 전달할 서버의 url, 두번째 parameter에는 입력할 데이터가 들어간다.
        // 마찬가지로 세번째 parameter에는 선택적으로 config 객체를 추가할 수 있다.
        console.log("postData");
        let saveData = {};
        saveData.userId = this.userId;
        saveData.title = this.title;
        console.log(saveData);

        axios.post(HOST, JSON.stringify(saveData))
          .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.status);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("postData finally");
          })
      },
      putData() {
        // PUT은 서버 내부적으로 GET 다음 POST를 거치기 때문에 POST와 사용형태가 같아 헷갈릴 수 있다. 
        // 하지만 POST는 서버에 데이터를 새로 입력하여 등록한다면 PUT은 기존 데이터를 수정 할 수 있다.
        // 첫번째 parameter에는 axios에 전달할 서버의 url, 두번째 parameter에는 수정할 데이터가 들어간다.
        // 마찬가지로 세번째 parameter에는 선택적으로 config 객체를 추가할 수 있다.
        console.log("putData");
        let number = "1";
        let putData = {};
        putData.updateTitle = "updateTitle";
        putData.updateUserId = "updateUserId";

        axios.put(HOST + "/api/putData" + number, JSON.stringify(putData))
          .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.status);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("putData finally");
          })
      },
      deleteData() {
        // axios.delete를 사용하여 데이터를 삭제할 수 도 있다. 
        // 첫번째 parameter에는 앞에서도 그러하듯 axios에 전달할 서버의 url이 들어간다. 
        // 보통 삭제할 경우에 참고할 점은 url의 마지막에는 삭제할 객체를 구분할 수 있는 key가 들어간다.
        // 하지만 필요에 의해서 data 파라미터가 들어갈 일이 있다면, 
        // 두번째 parameter에 {data: {프로퍼티 : n}} 와 같은 형식으로 사용할 수는 있다.
        console.log("deleteData");
        
        let deleteKey = "123";
        axios.delete(HOST + "/api/deleteData/" + deleteKey)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.status);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("deleteData finally");
          })

      }
    }
  };
</script>