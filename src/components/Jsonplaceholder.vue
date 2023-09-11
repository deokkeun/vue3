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
          :value="idValue"
          @input="$emit('update:idValue', $event.target.value)">
  <input type="text"
          :value="titleValue"
          @input="$emit('update:titleValue', $event.target.value)">
  <input type="text"
          :value="completedValue"
          @input="$emit('update:completedValue', $event.target.value)">
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
      <tr v-for="(user, index) in users">
        <td>{{ user.userId }}</td>
        <td>
          <input type="checkBox" 
            @click="checked(index,$event)">
          <!-- <input type=“checkbox”
                    :id=“item.no”
                    v-model=“prodArr”
                    :value=“item.name”
                    :class=“checked(item.name)”
                /> -->
          {{ user.id }}
        </td>
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
      userIdValue: {
        type: Number,
        required: true
      },
      idValue: {
        type: Number,
        required: true
      },
      titleValue: {
        type: String,
        required: true
      },
      completedValue: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        checkedCount: 0,
        userIdValue: 0,
        idValue: 0,
        titleValue: "",
        completedValue: "",
        result: 'N',
        users: [],
        select: 0
      }
    },
    methods: {
      // checked(target) {
      //   // prodArr에 해당 값이 포함되어있는지 확인하여 checked라는 클래스를 동적으로 부여한다.
      //   const index = this.prodArr.indexOf(target)
      //   return index >= 0 ? { checked: true } : { checked: false }
      // }
      checked(target,event) {
        // target + 1 이 게시글 번호
        if(this.checkedCount > 0) {
          console.log(event);
          event.checked = false;
          alert("1개만 선택해주세요");
        } else {
          this.checkedCount += 1;
          this.select = target + 1;
          this.userIdValue = this.users[target].userId;
          this.idValue = this.users[target].id;
          this.titleValue = this.users[target].title;
          this.completedValue = this.users[target].completed;
  
          console.log(this.users[target]);
          console.log("userIdValue = " + this.userIdValue);
          console.log("this.users[target].userId" + this.users[target].userId);
  
          // const index = this.select.indexOf(target)
          // console.log(index);
          
        }
      }, 

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
        .then((response) => {
          console.log("응답 데이터 : " + JSON.stringify(response.data));
          this.users = response.data;
          this.result = "Y"
          // console.log(response.data) // 서버가 제공한 응답(데이터)
          // console.log(response.status) // `status`는 서버 응답의 HTTP 상태 코드
          // console.log(response.statusText) // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지
          // console.log(response.headers) // headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공
          // console.log(response.config) // `config`는 요청에 대해 `axios`에 설정된 구성(config)
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
        saveData.userId = this.userIdValue;
        saveData.id = this.idValue;
        saveData.title = this.titleValue;
        saveData.completed = this.completedValue;
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
        if(this.select != 0) {
          console.log("putData");
  
          let number = this.select;
          let putData = {};
          putData.userId = this.userIdValue;
          putData.id = this.idValue;
          putData.title = this.titleValue;
          putData.completed = this.completedValue;
          console.log(putData);
  
          axios.put(HOST + "/" + number, JSON.stringify(putData))
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
        } else {
          alert("수정하려는 목록을 체크해주세요");
        }
      },
      deleteData() {
        // axios.delete를 사용하여 데이터를 삭제할 수 도 있다. 
        // 첫번째 parameter에는 앞에서도 그러하듯 axios에 전달할 서버의 url이 들어간다. 
        // 보통 삭제할 경우에 참고할 점은 url의 마지막에는 삭제할 객체를 구분할 수 있는 key가 들어간다.
        // 하지만 필요에 의해서 data 파라미터가 들어갈 일이 있다면, 
        // 두번째 parameter에 {data: {프로퍼티 : n}} 와 같은 형식으로 사용할 수는 있다.
        console.log("deleteData");
        
        let deleteKey = this.select;
        console.log("deleteKey" + deleteKey);
        axios.delete(HOST + "/" + deleteKey)
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
      // async, await(try, catch) 사용 예시
      // async deleteData() {
      //   // axios를 사용하면서 주의할 점이 있다. 
      //   // 이는 axios가 Promise 기반의 자바스크립트 비동기 처리방식을 사용한다는 것이다. 
      //   // 이때의 문제점은 처리 순서를 지정하지 않으면 request 요청을 보내고 나서 
      //   // response로 응답도 받기 전에 바로 다음 구문을 수행해 버리기 때문에 원하는 결과를 받아오지 못한다는 점이다. 
      //   // 실제로 이 때문에 프로젝트를 진행하며 오랜 시간을 헤맸다. 
      //   // 해결방법은 async/await를 사용하여 처리 순서를 지정해주는 것이다.
      //   try {
      //     // axios.delete를 사용하여 데이터를 삭제할 수 도 있다. 
      //     // 첫번째 parameter에는 앞에서도 그러하듯 axios에 전달할 서버의 url이 들어간다. 
      //     // 보통 삭제할 경우에 참고할 점은 url의 마지막에는 삭제할 객체를 구분할 수 있는 key가 들어간다.
      //     // 하지만 필요에 의해서 data 파라미터가 들어갈 일이 있다면, 
      //     // 두번째 parameter에 {data: {프로퍼티 : n}} 와 같은 형식으로 사용할 수는 있다.
      //     console.log("deleteData");
          
      //     let deleteKey = this.select;
      //     console.log("deleteKey" + deleteKey);
      //     this.users = await axios.delete(HOST + "/" + deleteKey)
      //       .then((res) => {
      //         console.log(res);
      //         console.log(res.data);
      //         console.log(res.status);
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       })
      //       .finally(() => {
      //         console.log("deleteData finally");
      //       })

      //   } catch(error) {
      //     console.log(error);
      //   }

      // }
    }
  };
</script>