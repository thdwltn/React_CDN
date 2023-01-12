(function(){
  // 작업

  function ProImg(){
    return(
      <>
       <img src="../images/red.jpg" alt="상세이미지"/>
      </>
    )
  }
    function ProSize(){
      function optionSize(){
        const sizes = window.data.allSize;
          // for (let i=0;i<sizes.length;i++){console.log(sizes[0])}
          return sizes.map((item,index) => {
            return(
              <option value={item} key={index}>{item}</option>
            )
          }) 
    }
    return(
      <>
       <p className="filed">
       <label HtmlFor="size">size:</label>
        <select>
          {optionSize()}
        </select>
       </p>
      </>
    )
  }
  function ProColor(){
    // 반복문
    function optionColor(){
      const colors = window.data.allColor;
      return colors.map((item,index)=>{
        return(
          <option value={item} key={index}>{item}</option>
        )
      })
    }
    return(
      <>
      <p className="filed">
      <label HtmlFor="color">color:</label>
      <select id="color">
      {optionColor() }
      </select>
      </p>
      </>
    )
  }





  function App(){
    return(
      <div className="custom">
        <div className="pic">
          <ProImg />
        </div>
        <div className="selector">
          <ProSize />
          <ProColor />
        </div>
      </div>
    )
  }


  // export
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )

})()

