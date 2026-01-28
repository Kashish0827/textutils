// import React, {useState } from 'react'

export default function About(props) {
    // const[mystyle, setmyStyle]=useState({
    //      color: 'black',
    //      backgroundColor:'white'
    // })
    let mystyle = {
        color : props.mode === 'dark'? 'white':'#0b1a31',
        backgroundColor: props.mode ==='dark'?'#0b1a31':'white',
        bordercolor: props.mode === 'dark'? 'white':'#0b1a31'
    }

    // const [btntext, setbtntext] = useState("enable dark mode")
    // const togglestyle = ()=>{
    //     if( mystyle.color === 'black'){
    //         setmyStyle({
    //          color: 'white',
    //          backgroundColor:'black',
    //          border: '1px solid white'
    //         })
    //         setbtntext("enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("enable dark mode")
    //     }
    // }
    return (
        <div className="container" style={mystyle}>
            <h1 className="my-3">ABOUT US</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> Analyze your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            textutils gives yu a way to analyze your text quickly and efficiently.                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                           allows you to modify your text and use it even without having any internet connection.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong> Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            this word counter software works in any web browsers such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books,excel document , etc.                      
                        </div>
                    </div>
                </div>
            
            </div>
            {/* //  <div className="container my-3">
            //    <button type="button" onClick={togglestyle} className="btn btn-primary">{btntext}</button>
            // </div>  */}
        </div>
    )
}
