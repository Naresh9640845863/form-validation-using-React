import React, { useRef } from 'react'
function TenthForm() {
    let totalresultsSpanRef=useRef();
    let totalpercSpanRef=useRef();


    let teluguInputRef=useRef();
    let hindiInputRef=useRef();
    let englishInputRef=useRef();
    let mathsInputRef=useRef();
    let scienceInputRef=useRef();
    let socialInputRef=useRef();
    let totalMarks=useRef();
    let teluguResultRef=useRef();
    let hindiResultRef=useRef();
    let englishResultRef=useRef();
    let mathsResultRef=useRef();
    let scienceResultRef=useRef();
    let socialResultRef=useRef();
    let calculateMarks=()=>{
        let telugumarks=Number(teluguInputRef.current.value);
        let hindiumarks=Number(hindiInputRef.current.value);
        let englishmarks=Number(englishInputRef.current.value);
        let mathsmarks=Number(mathsInputRef.current.value);
        let Sciencemarks=Number(scienceInputRef.current.value);
        let socialmarks=Number(socialInputRef.current.value);
        let totalMarks=telugumarks+hindiumarks+englishmarks+mathsmarks+Sciencemarks+socialmarks;
        let perc=(totalMarks/600)*100;
        alert(totalMarks);
        alert(perc);
       console.log(totalMarks);
        console.log(perc);
        totalresultsSpanRef.current.innerHTML=
        totalpercSpanRef.current.innerHTML=perc;
        
    }
    let inputOnFocus=(inputRef)=>{
        inputRef.current.style.backgroundColor="lightgray";
        inputRef.current.color="black"
    }
    let onBlur=(naresh)=>{
        naresh.current.style.backgroundColor="yellow";
    }
    let inputOnChange=(inputRef,resultRef,Passmarks)=>{
        let marks=inputRef.current.value;
        if(marks<0 || marks>100){
            resultRef.current.innerHTML="invalid";
            resultRef.current.style.backgroundColor="yellow";
        }else{  
        resultRef.current.innerHTML=marks>=Passmarks?"Pass":"Fail";
        resultRef.current.style.backgroundColor=marks>=Passmarks?"green":"red";
        }

    }
  return (
    <div>
        <form>
            <div>
                <label>Telugu</label>
                <input ref={teluguInputRef}onFocus={()=>{
                    inputOnFocus(teluguInputRef);
                }}
                onBlur={()=>{
                    onBlur(teluguInputRef);
                }}
                onChange={()=>{
                    inputOnChange(teluguInputRef,teluguResultRef,35);
                }}
                ></input>
                <span ref={teluguResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input ref={hindiInputRef}onFocus={()=>{
                    inputOnFocus(hindiInputRef);
                }}
                onBlur={()=>{
                    onBlur(hindiInputRef);
                }}
                onChange={()=>{
                     inputOnChange(hindiInputRef,hindiResultRef,25);
                }}
                ></input>
                <span ref={hindiResultRef}></span>
            </div>
            <div>
                <label>English</label>
                <input ref={englishInputRef}onFocus={()=>{
                    inputOnFocus(englishInputRef);
                }}
                onBlur={()=>{
                    onBlur(englishInputRef);
                }}
                onChange={()=>{
                    inputOnChange(englishInputRef,englishResultRef,35);
                }}
                ></input>
             <span ref={englishResultRef}></span>

            </div>
            <div>
                <label>maths</label>
                <input ref={mathsInputRef}onFocus={()=>{
                    inputOnFocus(mathsInputRef);
                }}
                onBlur={()=>{
                    onBlur(mathsInputRef);
                }}
                onChange={()=>{
                    inputOnChange(mathsInputRef,mathsResultRef,35);
                }}
                ></input>
                <span ref={mathsResultRef}></span>

            </div>
            <div>
                <label>Science</label>
                <input ref={scienceInputRef}onFocus={()=>{
                    inputOnFocus(scienceInputRef);
                }}
                onBlur={()=>{
                    onBlur(scienceInputRef);
                }}
                onChange={()=>{
                    inputOnChange(scienceInputRef,scienceResultRef,50);
                }}
                ></input>
                <span ref={scienceResultRef}></span>

            </div>
            <div>
                <label>Social</label>
                <input ref={socialInputRef}onFocus={()=>{
                    inputOnFocus(socialInputRef);
                }}
                onBlur={()=>{
                    onBlur(socialInputRef);
                }}
                onChange={()=>{
                    inputOnChange(socialInputRef,socialResultRef,50);
                }}
                ></input>
             <span ref={socialResultRef}></span>

            </div>
            <div>
                <button type="submit"onClick={()=>{
                    calculateMarks(totalMarks);
                }}
                >submit</button>
            </div>
            <span ref={totalresultsSpanRef}></span>
        </form>
    </div>
  )
}

export default TenthForm