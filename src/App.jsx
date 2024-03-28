

function App() {
  async function handleClick(){
    console.log("clicked");
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value
    const name=document.getElementById("Name").value
    try{
        await fetch("http://localhost:3000/",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json', // This header tells the server to expect JSON
            },
            body:JSON.stringify({
                email:email,
                password:password,
                name:name,
            })
        }
        )

    }
    catch(error){
        console.log(res.json(error))
    }
}

  return (
    <>
      <form >
        <label for="Name">Name</label>
        <input type="text" id="Name"/>
        <br/>
        <label for="Email" >Email</label>
        <input type="text" id="email" value=""/>
        <br/>
        <label for="password">Password</label>
        <input type="password" id="password"/>
        <br/>
        <button type="button" id="submit" onClick={()=>handleClick()}>Submit</button>
        <br/>
        <button type="button" id="login"><a href="http://127.0.0.1:5500/client/login.html">Login</a></button>
    </form>
    </>
  )
}

export default App
