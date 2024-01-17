let button = document.querySelector('.button')
button.addEventListener('click',function(event){
  event.preventDefault()
    let email = document.querySelector('.login').value
let password = document.querySelector('.password').value
  const user={
    email:email,
    password:password,
  }
  
  console.log(user)


  async  function getres(){
          const a = await getUsers("/api/auth/login","POST",user)
            console.log('promise',a.message)
            if(a.message=='true'){
            window.location.href = "/index"
            }else{
              alert('Ошибка')
        
                
            }

    }


  getres()
})

async function getUsers(url,method,data) {
    // отправляет запрос и получаем ответ
   
    try {
      let body=JSON.stringify(data);

      let headers={}
      headers['Content-Type']="application/json";
        const response = await fetch(url, {
            method,
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body
          
        });
        return await response.json()
    } catch (error) {
    console.log('err')
        
    }
}